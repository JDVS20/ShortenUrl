using System.Web.Mvc;

namespace ShortenUrl.Controllers
{
    public class ShortUrlController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}