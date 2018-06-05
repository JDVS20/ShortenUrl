using System;

namespace ShortenUrl.BL
{
    public class ShortenUrl
    {
        public ShortenUrl() { }

        public int Id { get; set; }
        public string OriginalUrl { get; set; }
        public string ShortUrl { get; set; }
        public DateTime DateCreated { get; set; }
    }
}

