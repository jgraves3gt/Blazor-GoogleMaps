using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor_GoogleMaps.Models
{
    public class MapMarkerShape
    {
        public List<int> coords { get; set; }
        public string type { get; set; }

        public MapMarkerShape CreateCircle(int x, int y, int radius)
        {
            var shape = new MapMarkerShape();
            shape.type = MapMarkerShapeType.Circle;
            shape.coords = new List<int>() { x, y, radius };
            return shape;
        }
        public MapMarkerShape CreateRectangle(int x1, int y1, int x2, int y2)
        {
            var shape = new MapMarkerShape();
            shape.type = MapMarkerShapeType.Rectangle;
            shape.coords = new List<int>() { x1, y1, x2, y2 };
            return shape;
        }
        public MapMarkerShape CreatePolygon(List<int> coords)
        {
            var shape = new MapMarkerShape();
            shape.type = MapMarkerShapeType.Polygon;
            shape.coords = coords;
            return shape;
        }
    }

    public static class MapMarkerShapeType
    {
        public static string Circle = "circle";
        public static string Polygon = "poly";
        public static string Rectangle = "rect";
    }
}
