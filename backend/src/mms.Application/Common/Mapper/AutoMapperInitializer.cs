using AutoMapper;
using mms.Application.UserNotification.Command.EditUserNotification;
using mms.Application.UserNotification.Query;
using mms.Application.UserPrivacy.Command.EditUserPrivacy;
using mms.Application.UserPrivacy.Query;
using UserNotificationEntity = mms.Domain.Entities.UserNotification;
using UserPrivacyEntity = mms.Domain.Entities.UserPrivacy;
using SupportEntity = mms.Domain.Entities.Support;
using ProgrammeEntity = mms.Domain.Entities.Programme;
using mms.Application.Support.Command;
using mms.Application.Program.Query;

namespace mms.Application.Common.Mapper
{
    public class AutoMapperInitializer : Profile
    {
        public AutoMapperInitializer()
        {
            CreateMap<UserNotificationEntity, EditUserNotificationCommand>().ReverseMap();
            CreateMap<UserNotificationEntity, GetUserNotificationResponse>().ReverseMap();
            CreateMap<UserPrivacyEntity, EditUserPrivacyCommand>().ReverseMap();
            CreateMap<UserPrivacyEntity, GetUserPrivacyResponse>().ReverseMap();
            CreateMap<SupportEntity, AddSupportCommand>().ReverseMap();
            CreateMap<ProgrammeEntity, GetArchiveProgramsResponse>().ReverseMap();
        }
    }
}