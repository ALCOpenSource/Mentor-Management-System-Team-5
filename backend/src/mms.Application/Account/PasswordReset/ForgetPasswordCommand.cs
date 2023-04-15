using System;
using AspNetCoreHero.Results;
using MediatR;
using mms.Application.Account.Login;

namespace mms.Application.Account.PasswordReset
{
	public class ForgetPasswordCommand : IRequest<Result<ForgetPasswordResponseDto>>
    {
        public string Email { get; set; }
	}
}

