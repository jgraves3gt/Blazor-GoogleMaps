using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor_GoogleMaps.Models
{
    public class MapSymbol
    {
        public string path { get; set; }
        public MapPoint anchor { get; set; }
        public MapPoint labelOrigin { get; set; }
        public string fillColor { get; set; }
        public string strokeColor { get; set; }
        public double fillOpacity { get; set; }
        public double rotation { get; set; }
        public double scale { get; set; }
        public double strokeOpacity { get; set; }
        public double strokeWeight { get; set; }
    }
}
