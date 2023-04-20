using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.UserNotification.Command.EditUserNotification
{
    public class EditUserNotificationCommand : IRequest<IResult>
    {
        public bool AllNotificationEmail { get; set; }
        public bool AllNotificationInApp { get; set; }
        public bool ProgramEmail { get; set; }
        public bool ProgramInApp { get; set; }
        public bool TaskEmail { get; set; }
        public bool TaskInApp { get; set; }
        public bool ApprovalRequestEmail { get; set; }
        public bool ApprovalRequestInApp { get; set; }
        public bool ReportsEmail { get; set; }
        public bool ReportsInApp { get; set; }
        public bool PostCommentsEmail { get; set; }
        public bool PostCommentsInApp { get; set; }
        public bool PostsEmail { get; set; }
        public bool PostsInApp { get; set; }
        public bool MentionsEmail { get; set; }
        public bool MentionsInApp { get; set; }
        public bool DirectMessageEmail { get; set; }
        public bool DirectMessageInApp { get; set; }
    }
}