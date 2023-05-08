using mms.Application.Profile.Query.GetProfileById;
using mms.Application.UserNotification.Command.EditUserNotification;
using mms.Application.UserNotification.Query;
using mms.Application.UserPrivacy.Command.EditUserPrivacy;
using mms.Application.UserPrivacy.Query;
using UserNotificationEntity = mms.Domain.Entities.UserNotification;
using UserPrivacyEntity = mms.Domain.Entities.UserPrivacy;
using AppUserEntity = mms.Domain.Entities.AppUser;
using Programmes = mms.Domain.Entities.Programme;
using Reports = mms.Domain.Entities.Report;
using mms.Application.UserTasks.Query;
using mms.Domain.Entities;
using mms.Application.Programme.Query;
using mms.Application.Report.Query;
using mms.Application.Mentors.Query;
using mms.Application.MentorManagers.Query;

namespace mms.Application.Common.Mapper
{
    public class AutoMapperInitializer : AutoMapper.Profile
    {
        public AutoMapperInitializer()
        {
            CreateMap<UserNotificationEntity, EditUserNotificationCommand>().ReverseMap();
            CreateMap<UserNotificationEntity, GetUserNotificationResponse>().ReverseMap();
            CreateMap<UserPrivacyEntity, EditUserPrivacyCommand>().ReverseMap();
            CreateMap<UserPrivacyEntity, GetUserPrivacyResponse>().ReverseMap();
            CreateMap<AppUserEntity, GetProfileByIdResponse>().ReverseMap();
            CreateMap<UserTask, GetUserTasksResponse>().ReverseMap();
            CreateMap<Programmes, GetProgrammeResponse>().ReverseMap();
            CreateMap<Reports, GetReportsResponse>().ReverseMap();
            CreateMap<ProgramsMentor, GetMentorsResponse>().ReverseMap();
            CreateMap<MentorManager, GetMentorManagersResponse>().ReverseMap();
        }
    }
}