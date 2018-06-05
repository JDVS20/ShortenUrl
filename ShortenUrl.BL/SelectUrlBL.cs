using ShortenUrl.DA;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ShortenUrl.BL
{
    public class SelectUrlBL
    {

        public SelectUrlBL() { }

        public static List<string> SelectMoreRecentURL()
        {
            try
            {
                using(var ctx = new ShortenURLEntities())
                {
                    var subquery = ctx.HistoryURL
                        .OrderByDescending(h => h.DateCreated)
                        .Take(100).ToList();
                }
               return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public static IEnumerable<HistoryURL> UrlRecent()
        {
            try
            {
                using (var ctx = new ShortenURLEntities())
                {
                    List<HistoryURL> subquery = ctx.HistoryURL
                        .OrderByDescending(h => h.DateCreated)
                        .Take(100).ToList();

                    if (subquery != null)
                    {
                        return subquery;
                    }
                    return null;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
