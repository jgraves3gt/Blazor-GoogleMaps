using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public class MapCameraOptions
    {
        public MapLatLng center { get; set; }
        public double heading { get; set; }
        public double tilt { get; set; }
        public double zoom { get; set; }
    }
}
