using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace API.Controllers
{
    public class ErrorsController : BaseApiCustomController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }
        [HttpGet("bad-request")]

        public ActionResult GetBadReq()
        {
            return BadRequest("Bad request");
        }
        [HttpGet("unathourized")]
        public ActionResult GetUnathorized()
        {
            return Unauthorized("Bad request");
        }
        [HttpGet("validation-error")]

        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("p1", "Invalid errorr 1");
            ModelState.AddModelError("p2", "Invalid errorr 1");
            return ValidationProblem();
        }
        [HttpGet("server-error")]

        public ActionResult GetServerError()
        {
            throw new Exception("excepcion CUSTOM");
        }
    }
}