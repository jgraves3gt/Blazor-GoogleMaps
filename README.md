# BlazorGoogleMapsV3 #
---
### Blazor Implementation for Google Maps V3 JavaScript SDK




## Getting Started
---
1. Add the Nuget package to your project
      - `PM> Install-Package BlazorGoogleMapsV3 -Version 1.1.0`
2. After adding the Nuget Package to your solution, add the following `<script>` tags to your `index.html` or `_host.cshtml`
      - `<script src="https://maps.googleapis.com/maps/api/js?key={YOUR_KEY_HERE}&libraries=drawing,geometry"></script>`
      - It is recommended to add the `drawing` and `geometry` libraries as many of these features are implemented in this component.   
      - `<script src="_content/BlazorGoogleMapsV3/JS/map.js"></script>`
3. In your `_imports.razor` file add the following using directives:
      - `@using BlazorGoogleMapsV3.Components`
      - `@using BlazorGoogleMapsV3.Models`


## Creating The Map
---
1. Add the following component tag wherever you want to provide a map. `<Map></Map>`
2. The `<Map>` Component requires an Id by providing the `MapId="{Map Id Here}"` attribute. This should be a unique identifier and allows you to place multiple `<Map>` components on the same page at a time. 
    1. The `<Map>` component will fill the available space in its container. If you wish to keep it to a specific size, enclose it in a `<div>` element set to the desired size.
3. It is recommended to create a `Map` reference in your blazor code to perform any operations against the map instance. 
      1. (ie. `<Map @ref="MapItem">` and then in your code `private Map MapItem { get; set; }`)
4. The following table describes the events that can be subscribed to on the `Map` instance and their argument types. Note that many of these events are fired when map elements are interacted with, such as a map marker, however all of these events are subscribed to via the `Map` component, and the relevant map elements are returned within the event arguments.
    1. More in depth documentation is given about these events in Google's official documentation [Here](https://developers.google.com/maps/documentation/javascript/reference)
5. To initialize the map to start at a specific location, you need to provide the `MapOptions` to the `Map` component. This `Map` component accepts an `object` type for the `MapOptions` so that you can provide your own implementation of the options. As long as you follow the same structure as is outlined in the official Google documentation (link provided in the previous step), then you shouldn't have any issues. However I have created a class called `MapOptions` that you can use. It has several commonly used values by default, but they can be reassigned however you would like. If you would like to programatically move the map to an new location, simply create a new instance of the `MapOptions` and assign it to the `Map` reference's `MapOptions` property.
      1. An example of creating your own `MapOptions` could look something like this:
      2. `var _mapOptions = new { center = new MapLatLng { lat = 41.739081, lng = -111.834756 }, zoom = 15, tilt = 0 };`
      3. Then assign this to the `Map` reference and you should be good to go.
### Map Events
| Event | Arg Type | Arg Description | Example |
|-------|----------|-----------------|---------|
| Map_Click | MapLatLng | The point where the Map was clicked | `Map_Click="(e) => MapClicked((MapLatLng)e)"` |
| Map_DoubleClick | MapLatLng | The point where the Map was double clicked | `Map_DoubleClick="(e) => MapDoubleClicked((MapLatLng)e)"` |
| Map_RightClick | MapLatLng | The point where the Map was right clicked | `Map_RightClick="(e) => MapRightClicked((MapLatLng)e)"` |
| Map_ContextMenu | MapLatLng | The point where the Map was right clicked (This should be used in place of `Map_RightClick` to properly handle `ctr + click` on MacOS | `Map_ContextMenu="(e) => MapContextMenu((MapLatLng)e)"` |
| Map_MouseMove | MapLatLng | The mouse pointer location | `Map_MouseMove="(e) => MouseMove((MapLatLng)e)"` |
| Map_MouseOut | MapLatLng | The mouse pointer location | `Map_MouseOut="(e) => MouseOut((MapLatLng)e)"` |
| Map_MouseOver | MapLatLng | The mouse pointer location | `Map_MouseOver="(e) => MouseOver((MapLatLng)e)"` |
| Map_BoundsChanged | N/A | N/A | `Map_BoundsChanged="() => BoundsChanged()"` |
| Map_CenterChanged | N/A | N/A | `Map_CenterChanged="() => CenterChanged()"` |
| Map_Drag | N/A | N/A | `Map_Drag="() => Drag()"` |
| Map_DragEnd | N/A | N/A | `Map_DragEnd="() => DragEnd()"` |
| Map_DragStart | N/A | N/A | `Map_DragStart="() => DragStart()"` |
| Map_HeadingChanged | N/A | N/A | `Map_HeadingChanged="() => HeadingChanged()"` |
| Map_Idle | N/A | N/A | `Map_Idle="() => Idle()"` |
| Map_MapTypeIdChanged | N/A | N/A | `Map_MapTypeIdChanged="() => MapTypeIdChanged()"` |
| Map_ProjectionChanged | N/A | N/A | `Map_ProjectionChanged="() => ProjectionChanged()"` |
| Map_Resize | N/A | N/A | `Map_Resize="() => Resize()"` |
| Map_ZoomChanged | N/A | N/A | `Map_ZoomChanged="() => ZoomChanged()"` |
| Map_TilesLoaded | N/A | N/A | `Map_TilesLoaded="() => TilesLoaded()"` |
| Map_TiltChanged | N/A | N/A | `Map_TiltChanged="() => TiltChanged()"` |

### Marker Events

| Event | Arg Type | Arg Description | Example |
|-------|----------|-----------------|---------|
| Marker_AnimationChanged | MapMarker | The marker that had the change | `Marker_AnimationChanged="(e) => MarkerAnimationChanged((MapMarker)e)"` |
| Marker_Click | MapElementMouseEvent | The marker Id and its coordinates | `Marker_Click="(e) => MarkerClick((MapElementMouseEvent)e)"` |
| Marker_ClickableChanged | MapMarker | The marker that had the change | `Marker_ClickableChanged="(e) => MarkerClickableChanged((MapMarker)e)"` |
| Marker_ContextMenu | MapElementMouseEvent | The marker Id and its coordinates | `Marker_ContextMenu="(e) => MarkerContextMenu((MapElementMouseEvent)e)"` |
| Marker_CursorChanged | MapMarker | The marker that had the change | `Marker_CursorChanged="(e) => MarkerCursorChanged((MapMarker)e)"` |
| Marker_DBLClick | MapElementMouseEvent | The marker Id and its coordinates | `Marker_DBLClick="(e) => MarkerDBLClick((MapElementMouseEvent)e)"` |
| Marker_Drag | MapElementMouseEvent | The marker Id and its coordinates | `Marker_Drag="(e) => MarkerDrag((MapElementMouseEvent)e)"` |
| Marker_DragEnd | MapElementMouseEvent | The marker Id and its coordinates | `Marker_DragEnd="(e) => MarkerDragEnd((MapElementMouseEvent)e)"` |
| Marker_DraggableChanged | MapMarker | The marker that had the change | `Marker_DraggableChanged="(e) => MarkerDraggableChanged((MapMarker)e)"` |
| Marker_DragStart | MapElementMouseEvent | The marker Id and its coordinates | `Marker_DragStart="(e) => MarkerDragStart((MapElementMouseEvent)e)"` |
| Marker_FlatChanged | MapMarker | The marker that had the change | `Marker_FlatChanged="(e) => MarkerFlatChanged((MapMarker)e)"` |
| Marker_IconChanged | MapMarker | The marker that had the change | `Marker_IconChanged="(e) => MarkerIconChanged((MapMarker)e)"` |
| Marker_MouseDown | MapElementMouseEvent | The marker Id and its coordinates | `Marker_MouseDown="(e) => MarkerMouseDown((MapElementMouseEvent)e)"` |
| Marker_MouseOut | MapElementMouseEvent | The marker Id and its coordinates | `Marker_MouseOut="(e) => MarkerMouseOut((MapElementMouseEvent)e)"` |
| Marker_MouseOver | MapElementMouseEvent | The marker Id and its coordinates | `Marker_MouseOver="(e) => MarkerMouseOver((MapElementMouseEvent)e)"` |
| Marker_MouseUp | MapElementMouseEvent | The marker Id and its coordinates | `Marker_MouseUp="(e) => MarkerMouseUp((MapElementMouseEvent)e)"` |
| Marker_PositionChanged | MapMarker | The marker that had the change | `Marker_PositionChanged="(e) => MarkerPositionChanged((MapMarker)e)"` |
| Marker_ShapeChanged | MapMarker | The marker that had the change | `Marker_ShapeChanged="(e) => MarkerShapeChanged((MapMarker)e)"` |
| Marker_TitleChanged | MapMarker | The marker that had the change | `Marker_TitleChanged="(e) => MarkerTitleChanged((MapMarker)e)"` |
| Marker_VisibleChanged | MapMarker | The marker that had the change | `Marker_VisibleChanged="(e) => MarkerVisibleChanged((MapMarker)e)"` |
| Marker_ZIndexChanged | MapMarker | The marker that had the change | `Marker_ZIndexChanged="(e) => MarkerZIndexChanged((MapMarker)e)"` |

### Polygon Events

| Event | Arg Type | Arg Description | Example |
|-------|----------|-----------------|---------|
| Polygon_Click | MapPolyMouseEvent | The polygon Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `Polygon_Click="(e) => PolygonClick((MapPolyMouseEvent)e)"` |
| Polygon_ContextMenu | MapPolyMouseEvent | The polygon Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `Polygon_ContextMenu="(e) => PolygonContextMenu((MapPolyMouseEvent)e)"` |
| Polygon_DBLClick | MapPolyMouseEvent | The polygon Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `Polygon_DBLClick="(e) => PolygonDBLClick((MapPolyMouseEvent)e)"` |
| Polygon_Drag | MapPolyMouseEvent | The polygon Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `Polygon_Drag="(e) => PolygonDrag((MapPolyMouseEvent)e)"` |
| Polygon_DragEnd | MapPolyMouseEvent | The polygon Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `Polygon_DragEnd="(e) => PolygonDragEnd((MapPolyMouseEvent)e)"` |
| Polygon_DragStart | MapPolyMouseEvent | The polygon Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `Polygon_DragStart="(e) => PolygonDragStart((MapPolyMouseEvent)e)"` |
| Polygon_MouseDown | MapPolyMouseEvent | The polygon Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `Polygon_MouseDown="(e) => PolygonMouseDown((MapPolyMouseEvent)e)"` |
| Polygon_MouseMove | MapPolyMouseEvent | The polygon Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `Polygon_MouseMove="(e) => PolygonMouseMove((MapPolyMouseEvent)e)"` |
| Polygon_MouseOut | MapPolyMouseEvent | The polygon Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `Polygon_MouseOut="(e) => PolygonMouseOut((MapPolyMouseEvent)e)"` |
| Polygon_MouseOver | MapPolyMouseEvent | The polygon Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `Polygon_MouseOver="(e) => PolygonMouseOver((MapPolyMouseEvent)e)"` |
| Polygon_MouseUp | MapPolyMouseEvent | The polygon Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `Polygon_MouseUp="(e) => PolygonMouseUp((MapPolyMouseEvent)e)"` |

### Polyline Events

| Event | Arg Type | Arg Description | Example |
|-------|----------|-----------------|---------|
| PolyLine_Click | MapPolyMouseEvent | The polyline Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `PolyLine_Click="(e) => PolyLineClick((MapPolyMouseEvent)e)"` |
| PolyLine_ContextMenu | MapPolyMouseEvent | The polyline Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `PolyLine_ContextMenu="(e) => PolyLineContextMenu((MapPolyMouseEvent)e)"` |
| PolyLine_DBLClick | MapPolyMouseEvent | The polyline Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `PolyLine_DBLClick="(e) => PolyLineDBLClick((MapPolyMouseEvent)e)"` |
| PolyLine_Drag | MapPolyMouseEvent | The polyline Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `PolyLine_Drag="(e) => PolyLineDrag((MapPolyMouseEvent)e)"` |
| PolyLine_DragEnd | MapPolyMouseEvent | The polyline Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `PolyLine_DragEnd="(e) => PolyLineDragEnd((MapPolyMouseEvent)e)"` |
| PolyLine_DragStart | MapPolyMouseEvent | The polyline Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `PolyLine_DragStart="(e) => PolyLineDragStart((MapPolyMouseEvent)e)"` |
| PolyLine_MouseDown | MapPolyMouseEvent | The polyline Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `PolyLine_MouseDown="(e) => PolyLineMouseDown((MapPolyMouseEvent)e)"` |
| PolyLine_MouseMove | MapPolyMouseEvent | The polyline Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `PolyLine_MouseMove="(e) => PolyLineMouseMove((MapPolyMouseEvent)e)"` |
| PolyLine_MouseOut | MapPolyMouseEvent | The polyline Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `PolyLine_MouseOut="(e) => PolyLineMouseOut((MapPolyMouseEvent)e)"` |
| PolyLine_MouseOver | MapPolyMouseEvent | The polyline Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `PolyLine_MouseOver="(e) => PolyLineMouseOver((MapPolyMouseEvent)e)"` |
| PolyLine_MouseUp | MapPolyMouseEvent | The polyline Id and the info found [here](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolyMouseEvent) | `PolyLine_MouseUp="(e) => PolyLineMouseUp((MapPolyMouseEvent)e)"` |

### Rectangle Events

| Event | Arg Type | Arg Description | Example |
|-------|----------|-----------------|---------|
| Rectangle_BoundsChanged | MapRectangle | The rectangle that was changed | `Rectangle_BoundsChanged="(e) => RectangleBoundsChanged((MapRectangle)e)"` |
| Rectangle_Click | MapElementMouseEvent | The rectangle Id and coordinates | `Rectangle_Click="(e) => RectangleClick((MapElementMouseEvent)e)"` |
| Rectangle_DoubleClick | MapElementMouseEvent | The rectangle Id and coordinates | `Rectangle_DoubleClick="(e) => RectangleDoubleClick((MapElementMouseEvent)e)"` |
| Rectangle_Drag | MapElementMouseEvent | The rectangle Id and coordinates | `Rectangle_Drag="(e) => RectangleDrag((MapElementMouseEvent)e)"` |
| Rectangle_DragEnd | MapElementMouseEvent | The rectangle Id and coordinates | `Rectangle_DragEnd="(e) => Rectangle_DragEnd((MapElementMouseEvent)e)"` |
| Rectangle_DragStart | MapElementMouseEvent | The rectangle Id and coordinates | `Rectangle_DragStart="(e) => RectangleDragStart((MapElementMouseEvent)e)"` |
| Rectangle_MouseDown | MapElementMouseEvent | The rectangle Id and coordinates | `Rectangle_MouseDown="(e) => RectangleMouseDown((MapElementMouseEvent)e)"` |
| Rectangle_MouseMove | MapElementMouseEvent | The rectangle Id and coordinates | `Rectangle_MouseMove="(e) => RectangleMouseMove((MapElementMouseEvent)e)"` |
| Rectangle_MouseOut | MapElementMouseEvent | The rectangle Id and coordinates | `Rectangle_MouseOut="(e) => RectangleMouseOut((MapElementMouseEvent)e)"` |
| Rectangle_MouseOver | MapElementMouseEvent | The rectangle Id and coordinates | `Rectangle_MouseOver="(e) => RectangleMouseOver((MapElementMouseEvent)e)"` |
| Rectangle_MouseUp | MapElementMouseEvent | The rectangle Id and coordinates | `Rectangle_MouseUp="(e) => RectangleMouseUp((MapElementMouseEvent)e)"` |
| Rectangle_ContextMenu | MapElementMouseEvent | The rectangle Id and coordinates | `Rectangle_ContextMenu="(e) => RectangleContextMenu((MapElementMouseEvent)e)"` |

### Circle Events

| Event | Arg Type | Arg Description | Example |
|-------|----------|-----------------|---------|
| Circle_CenterChanged | MapCircle | The circle that was changed | `Circle_CenterChanged="(e) => CircleCenterChanged((MapCircle)e)"` |
| Circle_RadiusChanged | MapCircle | The circle that was changed | `Circle_RadiusChanged="(e) => CircleRadiusChanged((MapCircle)e)"` |
| Circle_Click | MapElementMouseEvent | The circle Id and coordinates | `Circle_Click="(e) => Circle_Click((MapElementMouseEvent)e)"` |
| Circle_DoubleClick | MapElementMouseEvent | The circle Id and coordinates | `Circle_DoubleClick="(e) => Circle_DoubleClick((MapElementMouseEvent)e)"` |
| Circle_Drag | MapElementMouseEvent | The circle Id and coordinates | `Circle_Drag="(e) => Circle_Drag((MapElementMouseEvent)e)"` |
| Circle_DragEnd | MapElementMouseEvent | The circle Id and coordinates | `Circle_DragEnd="(e) => Circle_DragEnd((MapElementMouseEvent)e)"` |
| Circle_DragStart | MapElementMouseEvent | The circle Id and coordinates | `Circle_DragStart="(e) => CircleDragStart((MapElementMouseEvent)e)"` |
| Circle_MouseDown | MapElementMouseEvent | The circle Id and coordinates | `Circle_MouseDown="(e) => CircleMouseDown((MapElementMouseEvent)e)"` |
| Circle_MouseMove | MapElementMouseEvent | The circle Id and coordinates | `Circle_MouseMove="(e) => CircleMouseMove((MapElementMouseEvent)e)"` |
| Circle_MouseOut | MapElementMouseEvent | The circle Id and coordinates | `Circle_MouseOut="(e) => CircleMouseOut((MapElementMouseEvent)e)"` |
| Circle_MouseOver | MapElementMouseEvent | The circle Id and coordinates | `Circle_MouseOver="(e) => CircleMouseOver((MapElementMouseEvent)e)"` |
| Circle_MouseUp | MapElementMouseEvent | The circle Id and coordinates | `Circle_MouseUp="(e) => CircleMouseUp((MapElementMouseEvent)e)"` |
| Circle_RightClick | MapElementMouseEvent | The circle Id and coordinates | `Circle_ContextMenu="(e) => CircleContextMenu((MapElementMouseEvent)e)"` |

### Info Window Events

| Event | Arg Type | Arg Description | Example |
|-------|----------|-----------------|---------|
| InfoWindow_CloseClick | MapInfoWindow | The info window that was clicked | `InfoWindow_CloseClick="(e) => InfoWindowCloseClick((MapInfoWindow)e)"` |
| InfoWindow_ContentChanged | MapInfoWindow | The info window that was changed | `InfoWindow_ContentChanged="(e) => InfoWindowContentChanged((MapInfoWindow)e)"` |
| InfoWindow_DomReady | MapInfoWindow | The info window that was changed | `InfoWindow_DomReady="(e) => InfoWindowDomReady((MapInfoWindow)e)"` |
| InfoWindow_PositionChanged | MapInfoWindow | The info window that was changed | `InfoWindow_PositionChanged="(e) => InfoWindowPositionChanged((MapInfoWindow)e)"` |
| InfoWindow_ZIndexChanged | MapInfoWindow | The info window that was changed | `InfoWindow_ZIndexChanged="(e) => InfoWindowZIndexChanged((MapInfoWindow)e)"` |

