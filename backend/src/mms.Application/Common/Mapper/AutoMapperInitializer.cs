using AutoMapper;
using mms.Application.Profile.Query.GetProfileById;
using mms.Application.UserNotification.Command.EditUserNotification;
using mms.Application.UserNotification.Query;
using mms.Application.UserPrivacy.Command.EditUserPrivacy;
using mms.Application.UserPrivacy.Query;
using UserNotificationEntity = mms.Domain.Entities.UserNotification;
using UserPrivacyEntity = mms.Domain.Entities.UserPrivacy;
using AppUserEntity = mms.Domain.Entities.AppUser;

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
        }
    }
}