using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public class MapOptions
    {
        public string backgroundColor { get; set; }
        public MapLatLng center { get; set; }
        public bool clickableIcons { get; set; } = true;
        public double controlSize { get; set; }
        public bool disableDefaultUI { get; set; } = false;
        public bool disableDoubleClickZoom { get; set; } = false;
        public string draggableCursor { get; set; } = MapCursor.Default;
        public string draggingCursor { get; set; } = MapCursor.Grabbing;
        public bool fullscreenControl { get; set; } = false;
        public MapFullscreenControlOptions fullscreenControlOptions { get; set; }
        public string gestureHandling { get; set; } = MapGestureHandlingType.Auto;
        public double heading { get; set; }
        public bool keyboardShortcuts { get; set; } = true;
        public string mapId { get; set; }
        public bool mapTypeControl { get; set; } = false;
        public MapTypeControlOptions mapTypeControlOptions { get; set; }
        public string mapTypeId { get; set; } = MapTypeId.Hybrid;
        public int maxZoom { get; set; }
        public int minZoom { get; set; }
        public bool noClear { get; set; }
        public bool panControl { get; set; }
        public MapPanControlOptions panControlOptions { get; set; }
        public bool rotateControl { get; set; } = true;
        public bool scaleControl { get; set; } = true;
        public bool scrollWheel { get; set; } = true;
        public bool streetViewControl { get; set; } = true;
        public bool zoomControl { get; set; } = true;
        public MapRestriction restriction { get; set; }
        public MapRotateControlOptions rotateControlOptions { get; set; }
        public MapScaleControlOptions scaleControlOptions { get; set; }
        public MapStreetViewControlOptions streetViewControlOptions { get; set; }
        public double tilt { get; set; }
        public int zoom { get; set; }
        public MapZoomControlOptions zoomControlOptions { get; set; }
    }
}
