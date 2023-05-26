using AspNetCoreHero.Results;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using mms.Domain.Entities;
using mms.Domain.Mail;
using mms.Infrastructure.Interface;
using mms.Infrastructure.Utility;

namespace mms.Application.Account
{
    public abstract class AccountBaseHandler
    {
        protected readonly UserManager<AppUser> _userManager;
        protected readonly IConfiguration _configuration;
        protected readonly ITokenGeneratorService _tokenGeneratorService;
        protected readonly IMailService _mailService;

        protected AccountBaseHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ITokenGeneratorService tokenGeneratorService, IMailService mailService)
        {
            _userManager = userManager;
            _configuration = configuration;
            _tokenGeneratorService = tokenGeneratorService;
            _mailService = mailService;
        }

        protected async Task<AppUser?> ValidateUser(string email, string password)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null || !await _userManager.CheckPasswordAsync(user, password))
            {
                return default;
            }

            return await _userManager.Users
                .FirstOrDefaultAsync(x => x.Id == user.Id);
        }

        protected async Task<Result<string>> CreateUser(AppUser user, string role, string subject,
            string password, bool confirmEmail)
        {
            user.DateCreated = DateTime.UtcNow;
            var userCreationResult = password == null
                ? await _userManager.CreateAsync(user)
                : await _userManager.CreateAsync(user, password);
            if (!userCreationResult.Succeeded)
            {
                return GetErrorResponse(userCreationResult);
            }

            var roleAssignedResult = await _userManager.AddToRoleAsync(user, role);
            if (!roleAssignedResult.Succeeded)
            {
                return GetErrorResponse(roleAssignedResult);
            }

            if (confirmEmail)
            {
                var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                var encodedToken = TokenConverter.EncodeToken(token);
                var link = $"{_configuration["AppSettings:WebUrl"]}/sign-up-confirmation?email={user.Email}&token={encodedToken}";
                var emailBody = await GetEmailBody(user, "StaticsFiles/Html/ConfirmEmail.html", link, password);

                await SendEmail(user.Email, subject, emailBody);
            }

            return await Result<string>.SuccessAsync("User On-boarding successful, please check your email to proceed");
        }

        // Method overload with default subject and password values
        protected async Task<Result<string>> CreateUser(AppUser user, string role, bool confirmEmail)
        {
            return await CreateUser(user, role, "Verify Email", null, confirmEmail);
        }

        // Method overload with default subject value
        protected async Task<Result<string>> CreateUser(AppUser user, string role, string password, bool confirmEmail)
        {
            return await CreateUser(user, role, "Verify Email", password, confirmEmail);
        }

        protected async Task<string> GetEmailBody(AppUser user, string emailTempPath, string link, string tempPassword)
        {
            //This algorithm is to get a name from an email. We are to concatenate the first and last name
            //but in the case that the first and last name do not exist, we pick the name just before the '@' on the email.
            var email = user.Email.Trim();
            if (email.Contains("@"))
            {
                email.Remove(0, 1);
            }

            int indexDomain = email.IndexOf("@") + 1;
            var nameFromMailPath = email.Substring(0, indexDomain - 1);
            var userName = $"{user.FirstName} {user.LastName}";

            if (userName == " " || string.IsNullOrWhiteSpace(userName))
            {
                userName = nameFromMailPath;
            }

            var temp = await File.ReadAllTextAsync(Path.Combine(Directory.GetCurrentDirectory(), emailTempPath));
            var newTemp = temp.Replace("**user**", userName).Replace("**link**", link);
            if (tempPassword != null)
            {
                var updatedTemp = newTemp.Replace("**password**", tempPassword);
                return updatedTemp;
            }

            return newTemp;
        }

        protected async Task SendEmail(string to, string subject, string body)
        {
            var mailRequest = new MailRequest
            {
                Body = body,
                ToEmail = to,
                Subject = subject
            };

            await _mailService.SendEmailAsync(mailRequest);
        }

        protected static Result<string> GetErrorResponse(IdentityResult identityResult)
        {
            return Result<string>.Fail(identityResult.Errors.Select(x => x.Description).ToArray().ToString());
        }
    }
}