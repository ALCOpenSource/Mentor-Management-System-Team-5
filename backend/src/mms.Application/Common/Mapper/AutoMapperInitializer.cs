using AutoMapper;
using mms.Application.UserNotification.Command.EditUserNotification;
using UserNotificationEntity = mms.Domain.Entities.UserNotification;

namespace mms.Application.Common.Mapper
{
    public class AutoMapperInitializer : Profile
    {
        public AutoMapperInitializer()
        {
            CreateMap<UserNotificationEntity, EditUserNotificationCommand>().ReverseMap();
        }
    }
}