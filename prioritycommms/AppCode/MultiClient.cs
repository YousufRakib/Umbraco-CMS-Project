using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Models;

namespace GDMMultiClient
{
    public class MultiClient
    {
        [JsonProperty("image")]
        public int? ImageId;

        [JsonProperty("content")]
        public string? Content { get; set; }
    }
}
