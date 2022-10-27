using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Models;

namespace GDMMultiText
{
    public class MultiText
    {
        [JsonProperty("toptext")]
        public string? TopText { get; set; }

        [JsonProperty("bottomtext")]
        public string? BottomText { get; set; }
    }
}

