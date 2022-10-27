using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Models;

namespace GDMIconLink
{
    public class IconLink
    {
        [JsonProperty("image")]
        public int ImageId;

        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("link")]
        public List<Link>? Link;
    }
}
