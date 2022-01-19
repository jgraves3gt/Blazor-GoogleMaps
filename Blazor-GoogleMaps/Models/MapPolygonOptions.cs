using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor_GoogleMaps.Models
{
    public class MapPolygonOptions
    {
        public bool clickable { get; set; } = true;
        public bool draggable { get; set; } = true;
        public bool editable { get; set; } = true;
        public bool geodesic { get; set; } = true;
        public bool visible { get; set; } = true;
        public string fillColor { get; set; }
        public string strokeColor { get; set; }
        public double fillOpacity { get; set; }
        public double strokeOpacity { get; set; }
        public double strokeWeight { get; set; }
        public string strokePosition { get; set; } = StrokePosition.Center;
        public List<List<MapLatLng>> paths { get; set; }
        public int zIndex { get; set; }
    }

    public static class StrokePosition
    {
        public const string Center = "CENTER";
        public const string Inside = "INSIDE";
        public const string Outside = "OUTSIDE";
    }
}
