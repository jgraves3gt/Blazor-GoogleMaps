using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public class MapRectangle
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public object Options { get; set; }
    }
}
