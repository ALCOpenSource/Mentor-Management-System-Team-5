using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace mms.api.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    [Route(("api/v1/[Controller]"))]
    [ApiController]
    public abstract class BaseController : Controller
    {
        private IMediator _mediator;
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
    }
}