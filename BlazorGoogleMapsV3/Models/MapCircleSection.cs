using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public class MapCircleSection
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public MapLatLng Center { get; set; } = new();
        public double Radius { get; set; }
        public int Degrees { get; set; }
        public int RotateDegrees { get; set; }
        public object Options { get; set; }
    }
}
