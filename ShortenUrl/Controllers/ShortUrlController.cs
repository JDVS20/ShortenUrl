using ShortenUrl.BL;
using System.IO;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace ShortenUrl.Controllers
{
    public class ShortUrlController : Controller
    {
        string apiKey = System.Configuration.ConfigurationManager.AppSettings["apiKey"];
        string login = System.Configuration.ConfigurationManager.AppSettings["login"];

        public ActionResult Index()
        {
            //Load data in grid
            SelectUrlBL.SelectMoreRecentURL();

            return View();
        }        

        public string UrlProcess(string urlComplete)
        {
            var url = string.Format("http://api.bit.ly/shorten?format=json&version=2.0.1&longUrl={0}&login={1}&apiKey={2}", HttpUtility.UrlEncode(urlComplete), login, apiKey);
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);

            try
            {
                WebResponse response = request.GetResponse();
                using (Stream responseStream = response.GetResponseStream())
                {
                    StreamReader reader = new StreamReader(responseStream, Encoding.UTF8);
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    dynamic jsonResponse = js.Deserialize<dynamic>(reader.ReadToEnd());
                    string result = jsonResponse["results"][urlComplete]["shortUrl"];

                    // Insert URL in History table 
                    InsertUrlBL.InsertData(urlComplete, result);
                    return result;
                }
            }
            catch (WebException ex)
            {
                throw ex;
            }
        }
    }
}