using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public class MapMarkerOptions
    {
        public string animation { get; set; }
        public MapLatLng position { get; set; }
        public MapPoint anchorPoint { get; set; }
        public bool clickable { get; set; } = true;
        public bool draggable { get; set; } = true;
        public bool crossOnDrag { get; set; } = true;
        public string cursor { get; set; }
        public string icon { get; set; }
        public string label { get; set; }
        public double opacity { get; set; } = 1;
        public bool optimized { get; set; } = true;
        public bool visible { get; set; } = true;
        public string title { get; set; }
        public int zIndex { get; set; }
        public string collisionBehavior { get; set; }
        public MapMarkerShape shape { get; set; }

    }

    public enum IconSourceType
    {
        String,
        Icon,
        Symbol
    }

    public enum LabelSourceType
    {
        String,
        MarkerLabel
    }
}
