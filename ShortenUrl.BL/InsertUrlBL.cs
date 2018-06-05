using ShortenUrl.DA;
using System;
using System.Data.SqlClient;

namespace ShortenUrl.BL
{
    public class InsertUrlBL
    {        
        public InsertUrlBL() { }        

        public static void InsertData(string url, string shortUrl)
        {
            try
            {
                using (var ctx = new ShortenURLEntities())
                {
                    var param1 = new SqlParameter("@Url", url);
                    var param2 = new SqlParameter (@"Short", shortUrl);

                    var result = ctx.Database.ExecuteSqlCommand("usp_InsertUrl @Url, @Short", param1, param2);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
