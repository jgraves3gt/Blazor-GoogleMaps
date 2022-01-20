using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor_GoogleMaps.Models
{
    public class MapInfoWindowOptions
    {

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
