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
                    var param1 = new SqlParameter { ParameterName = "Url", Value = url };
                    var param2 = new SqlParameter { ParameterName = "Short", Value = shortUrl };

                    var result = ctx.Database.SqlQuery<ShortenUrl>("exec usp_InsertUrl @Url @Short ", param1, param2);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
