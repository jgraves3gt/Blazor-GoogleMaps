using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor_GoogleMaps.Models
{
    public class MapMarker
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public object Options { get; set; }

    }  
}
