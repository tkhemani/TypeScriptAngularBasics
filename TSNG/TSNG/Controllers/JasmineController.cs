using System;
using System.Web.Mvc;

namespace TSNG.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
