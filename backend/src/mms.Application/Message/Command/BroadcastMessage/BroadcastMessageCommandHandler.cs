using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AspNetCoreHero.Results;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using mms.Application.Account.ChangePassword;
using mms.Application.Common.ChatHub;
using mms.Application.Message.Command.CreateMessage;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.Message.Command.BroadcastMessage
{
    public class
        BroadcastMessageCommandHandler : IRequestHandler<BroadcastMessageCommand, IResult<List<CreateMessageResult>>>
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ApplicationContext _context;
        private readonly ICurrentUserService _currentUserService;
        private readonly IHubContext<ChatHub> _chatHub;

        public BroadcastMessageCommandHandler(UserManager<AppUser> userManager, ApplicationContext context,
            ICurrentUserService currentUserService, IHubContext<ChatHub> chatHub)
        {
            _userManager = userManager;
            _context = context;
            _currentUserService = currentUserService;
            _chatHub = chatHub;
        }

        public async Task<IResult<List<CreateMessageResult>>> Handle(BroadcastMessageCommand request,
            CancellationToken cancellationToken)
        {
            var result = new List<CreateMessageResult>();
            foreach (var message in request.Messages)
            {
                var handler = new CreateMessageCommandHandler(_userManager, _context, _currentUserService, _chatHub);
                var response = await handler.Handle(new CreateMessageCommand
                {
                    Subject = request.Subject,
                    Body = request.Body,
                    RecipientId = message.RecipientId,
                    ThreadId = message.ThreadId
                }, cancellationToken);

                if (!response.Succeeded)
                {
                    return Result<List<CreateMessageResult>>.Fail($"{response.Message}: {message.RecipientId}");
                }

                result.Add(response.Data);
            }

            return Result<List<CreateMessageResult>>.Success(result, "Success");
        }
    }
}