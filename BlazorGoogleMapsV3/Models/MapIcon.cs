using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public class MapIcon
    {
        public string url { get; set; }
        public MapPoint anchor { get; set; }
        public MapPoint labelOrigin { get; set; }
        public MapPoint origin { get; set; }
        public MapSize scaledSize { get; set; }
        public MapSize size { get; set; }
    }
}
