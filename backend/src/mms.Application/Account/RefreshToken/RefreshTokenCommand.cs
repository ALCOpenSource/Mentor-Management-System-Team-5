using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AspNetCoreHero.Results;

namespace mms.Application.Account.RefreshToken
{
    public class RefreshTokenCommand : IRequest<Result<RefreshTokenResponse>>
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
    }
}