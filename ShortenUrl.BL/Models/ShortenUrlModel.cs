using System;

namespace ShortenUrl.BL.Models
{
    public class ShortenUrlModel
    {
        public int Id { get; set; }
        public string OriginalUrl { get; set; }
        public string ShortUrl { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
