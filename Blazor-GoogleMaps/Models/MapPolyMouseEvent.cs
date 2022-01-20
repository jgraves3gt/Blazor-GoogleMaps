using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor_GoogleMaps.Models
{
    public class MapPolyMouseEvent
    {
        public Guid PolygonId { get; set; }
        public int? edge { get; set; }
        public int? path { get; set; }
        public int? vertex { get; set; }
    }
}
