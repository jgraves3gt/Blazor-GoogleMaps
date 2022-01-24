using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public class MapRestriction
    {
        public MapLatLngBounds latLngBounds { get; set; }
        public bool strictBounds { get; set; }
    }

    public class MapLatLngBounds
    {
        public double east { get; set; }
        public double north { get; set; }
        public double south { get; set; }
        public double west { get; set; }
    }
}
