using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public class MapInfoWindow
    {
        public Guid Id { get; set; }
        public object Options { get; set; }
        public object OpenOptions { get; set; }
    }
}
