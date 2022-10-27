using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Models;

namespace GDMImageCard
{
    public class ImageCard
    {
        [JsonProperty("image")]
        public int? ImageId;

        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("designation")]
        public string? Designation { get; set; }
    }
}
