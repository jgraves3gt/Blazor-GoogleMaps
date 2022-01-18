using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor_GoogleMaps.Models
{
    public class MapMarker
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public double Lat { get; set; }
        public double Lon { get; set; }
        public bool Clickable { get; set; } = true;
        public bool Visible { get; set; } = true;
        private IconSourceType SourceType { get; set; }
        public MapMarkerOptions GetOptions()
        {
            return new MapMarkerOptions();
        }
    }


    
}
