using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGoogleMapsV3.Models
{
    public class MapTypeControlOptions
    {
        public string position { get; set; } = MapControlPosition.Top_Left;
        public string style { get; set; } = MapTypeControlStyle.Default;
        public List<string> mapTypeIds { get; set; } = new(){ MapTypeId.Hybrid, MapTypeId.RoadMap, MapTypeId.Satellite, MapTypeId.Terrain };
    }

    public class MapPanControlOptions
    {
        public string position { get; set; } = MapControlPosition.Bottom_Left;
    }

    public class MapRotateControlOptions
    {
        public string position { get; set; } = MapControlPosition.Top_Right;
    }

    public class MapScaleControlOptions
    {
        public string position { get; set; } = MapControlPosition.Left_Center;
    }

    public class MapStreetViewControlOptions
    {
        public string position { get; set; } = MapControlPosition.Bottom_Right;
    }

    public class MapZoomControlOptions
    {
        public string position { get; set; } = MapControlPosition.Bottom_Right;
    }

    public static class MapTypeControlStyle
    {
        public const string Default = "DEFAULT";
        public const string Drop_Down_Menu = "DROPDOWN_MENU";
        public const string Horizontal_Bar = "HORIZONTAL_BAR";
    }

    public static class MapTypeId
    {
        public const string Hybrid = "HYBRID";
        public const string RoadMap = "ROADMAP";
        public const string Satellite = "SATELLITE";
        public const string Terrain = "TERRAIN";
    }
}
