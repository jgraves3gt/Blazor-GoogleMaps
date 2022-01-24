using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
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

    public static class MapSymbolPath
    {
        public const string BackwardClosedArrow = "BACKWARD_CLOSED_ARROW";
        public const string BackwardOpenArrow = "BACKWARD_OPEN_ARROW";
        public const string Circle = "CIRCLE";
        public const string ForwardClosedArrow = "FORWARD_CLOSED_ARROW";
        public const string ForwardOpenArrow = "FORWARD_OPEN_ARROW";
    }
}
