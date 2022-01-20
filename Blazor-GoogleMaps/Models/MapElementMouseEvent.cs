using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor_GoogleMaps.Models
{
    public class MapElementMouseEvent
    {
        public Guid ElementId { get; set; }
        public MapLatLng Coords { get; set; }
    }
}
