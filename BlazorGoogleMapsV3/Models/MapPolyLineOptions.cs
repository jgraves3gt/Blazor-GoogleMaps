﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public class MapPolyLineOptions
    {
        public bool clickable { get; set; } = true;
        public bool draggable { get; set; } = false;
        public bool editable { get; set; } = false;
        public bool geodesic { get; set; } = false;
        public bool visible { get; set; } = true;
        public string strokeColor { get; set; }
        public List<MapIconSequence> icons { get; set; } = new();
        public List<MapLatLng> path { get; set; } = new();
        public double strokeOpacity { get; set; } = 1;
        public int strokeWeight { get; set; }
        public int zIndex { get; set; }
    }

    public class MapIconSequence
    {
        public bool fixedRotation { get; set; }
        public MapSymbol icon { get; set; }
        public string offset { get; set; }
        public string repeat { get; set; }
    }
}
