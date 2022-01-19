using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor_GoogleMaps.Models
{
    public class MapPolygon
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public List<MapLatLng> Path { get; set; } = new();
        public bool Clickable { get; set; } = true;
        public bool Draggable { get; set; } = true;
        public bool Visible { get; set; } = true;
        public string StrokeColor { get; set; }
        public double StrokeOpacity { get; set; }
        public double StrokeWeight { get; set; }
        public int ZIndex { get; set; }
    }
}
