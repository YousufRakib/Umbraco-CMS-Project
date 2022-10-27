using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Models;

namespace GDMMultiNews
{
    public class MultiNews
    {
        [JsonProperty("image")]
        public int? ImageId;

        [JsonProperty("title")]
        public string? Title { get; set; }

        [JsonProperty("content")]
        public string? Content { get; set; }
    }
}
