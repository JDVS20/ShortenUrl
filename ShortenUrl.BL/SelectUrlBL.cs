using ShortenUrl.DA;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ShortenUrl.BL
{
    public class SelectUrlBL
    {

        public SelectUrlBL() { }

        public List<string> Top100Url()
        {
            try
            {
                //List<ShortenUrl> total;

                using(var ctx = new ShortenURLEntities())
                {
                    var subquery = ctx.HistoryURL
                        .Where(h => 
                            h.Id > 0
                        ).ToList();
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
