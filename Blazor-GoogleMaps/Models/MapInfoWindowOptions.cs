using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor_GoogleMaps.Models
{
    public class MapInfoWindowOptions
    {
        public string content { get; set; }
        public bool disableAutoPan { get; set; } = false;
        public int maxWidth { get; set; }
        public int minWidth { get; set; }
        public int zIndex { get; set; }
        public MapSize pixelOffset { get; set; }
        public MapLatLng position { get; set; }
    }

    public class MapInfoWindowOpenOptions
    {
        public Guid AnchorId { get; set; }
        public MapAnchorType AnchorType { get; set; }
        public bool shouldFocus { get; set; }
    }

    public enum MapAnchorType
    {
        Marker,
        Polygon,
    }
}
