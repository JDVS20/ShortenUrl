using ShortenUrl.BL;
using System;
using System.IO;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Web.Mvc;

namespace ShortenUrl.Controllers
{
    public class ShortUrlController : Controller
    {
        string apiKey = System.Configuration.ConfigurationManager.AppSettings["apiKey"];
        

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult UrlProcess(string urlComplete)
        {
            string post = "{\"longUrl\": \"" + urlComplete + "\"}";
            string shortUrl = urlComplete;
            //HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://www.googleapis.com/urlshortener/v1/url?key=" + apiKey);
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://www.googleapis.com/urlshortener/v1/url?shortUrl=" + urlComplete);

            try
            {

                // Insert URL in table 
                //InsertUrlBL.InsertData(urlComplete, shortUrl);
                InsertUrlBL.InsertData(urlComplete, "12545sad");


                request.ServicePoint.Expect100Continue = false;
                request.Method = "POST";
                request.ContentLength = post.Length;
                request.ContentType = "application/json";
                request.Headers.Add("Cache-Control", "no-cache");

                using (Stream requestStream = request.GetRequestStream())
                {
                    byte[] postBuffer = Encoding.ASCII.GetBytes(post);
                    requestStream.Write(postBuffer, 0, postBuffer.Length);
                }

                using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
                {
                    using (Stream responseStream = response.GetResponseStream())
                    {
                        using (StreamReader responseReader = new StreamReader(responseStream))
                        {
                            string json = responseReader.ReadToEnd();
                            shortUrl = Regex.Match(json, @"""id"": ?""(?<id>.+)""").Groups["id"].Value;
                        }
                    }
                }

                return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        

        
    }
}