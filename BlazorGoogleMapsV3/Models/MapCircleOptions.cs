using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public class MapCircleOptions
    {
        public MapLatLng center { get; set; }
        public bool clickable { get; set; } = true;
        public bool draggable { get; set; } = false;
        public bool editable { get; set; } = false;
        public bool visible { get; set; } = true;
        public string fillColor { get; set; }
        public string strokeColor { get; set; }
        public double fillOpacity { get; set; }
        public double strokeOpacity { get; set; }
        public double strokeWeight { get; set; }
        public string strokePosition { get; set; } = StrokePosition.Center;
        public int zIndex { get; set; }
        public double radius { get; set; }
    }
}
