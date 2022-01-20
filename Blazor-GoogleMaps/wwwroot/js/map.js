let maps = [];
let drawingManagers = [];
let markers = [];
let infoMarkers = [];
let polygons = [];
let polyLines = [];
let rectangles = [];
let circles = [];
let DotNetMapRefs = [];

function initMap(mapId, DNMapRef, mapOptions) {
    try {
        var map = new google.maps.Map(document.getElementById(mapId), mapOptions);

        maps[mapId] = map;

        var drawManager = new google.maps.drawing.DrawingManager({ map: map, drawingControl: false });

        drawingManagers[mapId] = drawManager;

        DotNetMapRefs[mapId] = DNMapRef;

        setDrawingManagerListeners(mapId, mapId);
    }
    catch (e) {
        console.log("Map Initialization Error: " + e);
    }
}

function startDrawing(mapId, drawingOptions) {
    var drawManager = drawingManagers[mapId];

    if (drawManager) {
        if (drawingOptions) {
            drawManager.setOptions(drawingOptions);
        }
        else {
            drawManager.setOptions({drawingControl: true});
        }
    }
    else {
        drawManager = new google.maps.drawing.DrawingManager(drawingOptions);
        drawingManagers[mapId] = drawManager;
    }
}

function endDrawing(mapId) {
    var drawManager = drawingManagers[mapId];

    if (drawManager) {
        drawManager.setOptions({ drawingMode: null, drawingControl: false });
    }
}

function setDrawingManagerListeners(MapId, drawingManagerId) {
    var dm = drawingManagers[drawingManagerId];
    var DNMapRef = DotNetMapRefs[MapId];
    
    if (dm) {
        dm.addListener("circlecomplete", async (circle) => {
            var guid = await DNMapRef.invokeMethodAsync("AddCircleFromDrawingManager");
            circles[guid] = circle;
            setCircleListeners(guid, MapId);
        });

        dm.addListener("markercomplete", async (circle) => {
            var guid = await DNMapRef.invokeMethodAsync("AddMarkerFromDrawingManager");
            markers[guid] = circle;
            setMarkerListeners(guid, MapId);
        });

        dm.addListener("polygoncomplete", async (circle) => {
            var guid = await DNMapRef.invokeMethodAsync("AddPolygonFromDrawingManager");
            polygons[guid] = circle;
            setPolygonListeners(guid, MapId);
        });

        dm.addListener("polylinecomplete", async (circle) => {
            var guid = await DNMapRef.invokeMethodAsync("AddPolylineFromDrawingManager");
            polyLines[guid] = circle;
            setPolyLineListeners(guid, MapId);
        });

        dm.addListener("rectanglecomplete", async (circle) => {
            var guid = await DNMapRef.invokeMethodAsync("AddRectangleFromDrawingManager");
            rectangles[guid] = circle;
            setRectangleListeners(guid, MapId);
        });
    }
}

//Add Marker
function addMapMarker(mapId, mapMarker) {
    var marker = new google.maps.Marker(mapMarker.options);
    var map = maps[mapId];

    if (map) {
        marker.setMap(map);
        markers[mapMarker.id] = marker;

        setMarkerListeners(mapMarker.id, mapId);
    }
}

//Update Marker
function updateMapMarker(markerId, markerOptions) {
    var marker = markers[markerId];
    if (marker) {
        marker.setOptions(markerOptions);
    }
}

//Add Info Window
function addInfoWindow(mapId, mapInfoWindow) {
    var infoWindow = new google.maps.InfoWindow(mapInfoWindow.options);
    var map = maps[mapId];

    if (map) {
        infoWindow.setMap(map);
        infoWindows[mapInfoWindow.id] = infoWindow;

        setInfoWindowListeners(mapInfoWindow.id, mapId);
    }
}

//Update Info Window
function updateInfoWindow(infoWindowId, infoWindowOptions) {
    var infoWindow = infoWindows[infoWindowId];
    if (infoWindow) {
        infoWindow.setOptions(infoWindowOptions);
    }
}

//Add Polygon
function addMapPolygon(mapId, mapPolygon) {
    var polygon = new google.maps.Polygon(mapPolygon.options);
    var map = maps[mapId];

    if (map) {
        polygon.setMap(map);
        polygons[mapPolygon.id] = polygon;

        setPolygonListeners(mapPolygon.id, mapId);
    }
}

//Update Polygon
function updateMapPolygon(polygonId, polygonOptions) {
    var polygon = polygons[polygonId];
    if (polygon) {
        polygon.setOptions(polygonOptions);
    }
}

//Add PolyLine
function addMapPolyLine(mapId, mapPolyLine) {
    var polyLine = new google.maps.Polygon(mapPolyLine.options);
    var map = maps[mapId];

    if (map) {
        polyLine.setMap(map);
        polyLines[mapPolyLine.id] = polyLine;

        setPolygonListeners(mapPolyLine.id, mapId);
    }
}

//Update PolyLine
function updateMapPolyLine(polyLineId, polyLineOptions) {
    var polyLine = polyLines[polyLineId];
    if (polyLine) {
        polyLine.setOptions(polyLineOptions);
    }
}

//Add Rectangle
function addMapPolyLine(mapId, mapRectangle) {
    var rectangle = new google.maps.Rectangle(mapRectangle.options);
    var map = maps[mapId];

    if (map) {
        rectangle.setMap(map);
        rectangles[mapRectangle.id] = rectangle;

        setRectangleListeners(mapRectangle.id, mapId);
    }
}

//Update Rectangle
function updateMapPolyLine(rectangleId, rectangleOptions) {
    var rectangle = rectangles[rectangleId];
    if (rectangle) {
        rectangle.setOptions(rectangleOptions);
    }
}

//Add Circle
function addMapPolyLine(mapId, mapCircle) {
    var circle = new google.maps.Circle(mapCircle.options);
    var map = maps[mapId];

    if (map) {
        circle.setMap(map);
        circles[mapCircle.id] = circle;

        setCircleListeners(mapCircle.id, mapId);
    }
}

//Update Circle
function updateMapPolyLine(circleId, circleOptions) {
    var circle = circles[circleId];
    if (circle) {
        circle.setOptions(circleOptions);
    }
}

function setInfoWindowListeners(infoWindowId, MapId) {
    var infoWindow = infoWindows[infoWindowId];
    var DNMapRef = DotNetMapRefs[MapId];

    infoWindow.addListener("closeclick", () => { DNMapRef.invokeMethodAsync('InfoWindowCloseClicked', infoWindowId); });
    infoWindow.addListener("content_changed", () => { DNMapRef.invokeMethodAsync('InfoWindowContentChanged', infoWindowId); });
    infoWindow.addListener("domready", () => { DNMapRef.invokeMethodAsync('InfoWindowDomReady', infoWindowId); });
    infoWindow.addListener("position_changed", () => { DNMapRef.invokeMethodAsync('InfoWindowPositionChanged', infoWindowId); });
    infoWindow.addListener("zindex_changed", () => { DNMapRef.invokeMethodAsync('InfoWindowZIndexChanged', infoWindowId); });
}

function setCircleListeners(circleId, MapId) {
    var circle = circles[circleId];
    var DNMapRef = DotNetMapRefs[MapId];

    circle.addListener("center_changed", () => {

        DNMapRef.invokeMethodAsync('CircleBoundsChanged', circleId);
    });

    circle.addListener("radius_changed", () => {

        DNMapRef.invokeMethodAsync('CircleRadiusChanged', circleId);
    });

    circle.addListener("click", (mapsMouseEvent) => {

        DNMapRef.invokeMethodAsync('CircleClick', circleId, mapsMouseEvent.latLng);
    });

    circle.addListener("rightclick", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('CircleRightClick', circleId, mapsMouseEvent.latLng);
    });

    circle.addListener("dblclick", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('CircleDoubleClick', circleId, mapsMouseEvent.latLng);
    });

    circle.addListener("drag", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('CircleDrag', circleId, mapsMouseEvent.latLng);
    });

    circle.addListener("dragend", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('CircleDragEnd', circleId, mapsMouseEvent.latLng);
    });

    circle.addListener("dragstart", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('CircleDragStart', circleId, mapsMouseEvent.latLng);
    });

    circle.addListener("mousemove", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('CircleMouseMove', circleId, mapsMouseEvent.latLng);
    });

    circle.addListener("mousedown", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('CircleMouseDown', circleId, mapsMouseEvent.latLng);
    });

    circle.addListener("mouseout", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('CircleMouseOut', circleId, mapsMouseEvent.latLng);
    });

    circle.addListener("mouseover", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('CircleMouseOver', circleId, mapsMouseEvent.latLng);
    });

    circle.addListener("mouseup", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('CircleMouseUp', circleId, mapsMouseEvent.latLng);
    });
   } 

function setRectangleListeners(rectangleId, MapId) {
    var rectangle = rectangles[rectangleId];
    var DNMapRef = DotNetMapRefs[MapId];

    rectangle.addListener("bounds_changed", (me) => {

        DNMapRef.invokeMethodAsync('RectangleBoundsChanged', rectangleId);
    });

    rectangle.addListener("click", (mapsMouseEvent) => {

        DNMapRef.invokeMethodAsync('RectangleClick', rectangleId, mapsMouseEvent.latLng);
    });

    rectangle.addListener("contextmenu", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('RectangleContextMenu', rectangleId, mapsMouseEvent.latLng);
    });

    rectangle.addListener("dblclick", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('RectangleDoubleClick', rectangleId, mapsMouseEvent.latLng);
    });

    rectangle.addListener("drag", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('RectangleDrag', rectangleId, mapsMouseEvent.latLng);
    });

    rectangle.addListener("dragend", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('RectangleDragEnd', rectangleId, mapsMouseEvent.latLng);
    });

    rectangle.addListener("dragstart", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('RectangleDragStart', rectangleId, mapsMouseEvent.latLng);
    });

    rectangle.addListener("mousemove", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('RectangleMouseMove', rectangleId, mapsMouseEvent.latLng);
    });

    rectangle.addListener("mousedown", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('RectangleMouseDown', rectangleId, mapsMouseEvent.latLng);
    });

    rectangle.addListener("mouseout", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('RectangleMouseOut', rectangleId, mapsMouseEvent.latLng);
    });

    rectangle.addListener("mouseover", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('RectangleMouseOver', rectangleId, mapsMouseEvent.latLng);
    });

    rectangle.addListener("mouseup", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('RectangleMouseUp', rectangleId, mapsMouseEvent.latLng);
    });
}

function setPolyLineListeners(polyLineId, MapId) {
    var polyLine = polyLines[polyLineId];
    var DNMapRef = DotNetMapRefs[MapId];

    polyLine.addListener("click", (me) => {

        DNMapRef.invokeMethodAsync('PolyLineClick', {
            edge: me.edge ? me.edge : null,
            PolyId: polyLineId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polyLine.addListener("contextmenu", () => {
        DNMapRef.invokeMethodAsync('PolyLineContextMenu', {
            edge: me.edge ? me.edge : null,
            PolyId: polyLineId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });
    polyLine.addListener("dblclick", () => {
        DNMapRef.invokeMethodAsync('PolyLineDoubleClick', {
            edge: me.edge ? me.edge : null,
            PolyId: polyLineId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polyLine.addListener("drag", () => {
        DNMapRef.invokeMethodAsync('PolyLineDrag', {
            edge: me.edge ? me.edge : null,
            PolyId: polyLineId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polyLine.addListener("dragend", () => {
        DNMapRef.invokeMethodAsync('PolyLineDragEnd', {
            edge: me.edge ? me.edge : null,
            PolyId: polyLineId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polyLine.addListener("dragstart", () => {
        DNMapRef.invokeMethodAsync('PolyLineDragStart', {
            edge: me.edge ? me.edge : null,
            PolyId: polyLineId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polyLine.addListener("mousemove", () => {
        DNMapRef.invokeMethodAsync('PolyLineMouseMove', {
            edge: me.edge ? me.edge : null,
            PolyId: polyLineId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polyLine.addListener("mousedown", () => {
        DNMapRef.invokeMethodAsync('PolyLineMouseDown', {
            edge: me.edge ? me.edge : null,
            PolyId: polyLineId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polyLine.addListener("mouseout", () => {
        DNMapRef.invokeMethodAsync('PolyLineMouseOut', {
            edge: me.edge ? me.edge : null,
            PolyId: polyLineId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polyLine.addListener("mouseover", () => {
        DNMapRef.invokeMethodAsync('PolyLineMouseOver', {
            edge: me.edge ? me.edge : null,
            PolyId: polyLineId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polyLine.addListener("mouseup", () => {
        DNMapRef.invokeMethodAsync('PolyLineMouseUp', {
            edge: me.edge ? me.edge : null,
            PolyId: polyLineId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });
}

function setPolygonListeners(polygonId, MapId) {
    var polygon = polygons[polygonId];
    var DNMapRef = DotNetMapRefs[MapId];

    polygon.addListener("click", (me) => {
        
        DNMapRef.invokeMethodAsync('PolygonClick', {
            edge: me.edge ? me.edge : null,
            PolyId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("contextmenu", () => {
        DNMapRef.invokeMethodAsync('PolygonContextMenu', {
            edge: me.edge ? me.edge : null,
            PolyId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });
    polygon.addListener("dblclick", () => {
        DNMapRef.invokeMethodAsync('PolygonDoubleClick', {
            edge: me.edge ? me.edge : null,
            PolyId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("drag", () => {
        DNMapRef.invokeMethodAsync('PolygonDrag', {
            edge: me.edge ? me.edge : null,
            PolyId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("dragend", () => {
        DNMapRef.invokeMethodAsync('PolygonDragEnd', {
            edge: me.edge ? me.edge : null,
            PolyId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("dragstart", () => {
        DNMapRef.invokeMethodAsync('PolygonDragStart', {
            edge: me.edge ? me.edge : null,
            PolyId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("mousemove", () => {
        DNMapRef.invokeMethodAsync('PolygonMouseMove', {
            edge: me.edge ? me.edge : null,
            PolyId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("mousedown", () => {
        DNMapRef.invokeMethodAsync('PolygonMouseDown', {
            edge: me.edge ? me.edge : null,
            PolyId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("mouseout", () => {
        DNMapRef.invokeMethodAsync('PolygonMouseOut', {
            edge: me.edge ? me.edge : null,
            PolyId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("mouseover", () => {
        DNMapRef.invokeMethodAsync('PolygonMouseOver', {
            edge: me.edge ? me.edge : null,
            PolyId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("mouseup", () => {
        DNMapRef.invokeMethodAsync('PolygonMouseUp', {
            edge: me.edge ? me.edge : null,
            PolyId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });
}

function setMarkerListeners(markerId, MapId) {
    var marker = markers[markerId];
    var DNMapRef = DotNetMapRefs[MapId];

    marker.addListener("animation_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerAnimationChanged', markerId);
    });

    marker.addListener("click", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MarkerClick', markerId, mapsMouseEvent.latLng);
    });

    marker.addListener("clickable_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerClickableChanged', markerId);
    });

    marker.addListener("contextmenu", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MarkerContextMenu', markerId, mapsMouseEvent.latLng);
    });

    marker.addListener("cursor_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerCursorChanged', markerId);
    });

    marker.addListener("dblclick", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MarkerDoubleClick', markerId, mapsMouseEvent.latLng);
    });

    marker.addListener("drag", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MarkerDrag', markerId, mapsMouseEvent.latLng);
    });

    marker.addListener("dragend", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MarkerDragEnd', markerId, mapsMouseEvent.latLng);
    });

    marker.addListener("draggable_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerDraggableChanged', markerId);
    });

    marker.addListener("dragstart", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MarkerDragStart', markerId, mapsMouseEvent.latLng);
    });

    marker.addListener("flat_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerFlatChanged', markerId);
    });

    marker.addListener("icon_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerIconChanged', markerId);
    });

    marker.addListener("mousedown", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MarkerMouseDown', markerId, mapsMouseEvent.latLng);
    });

    marker.addListener("mouseout", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MarkerMouseOut', markerId, mapsMouseEvent.latLng);
    });

    marker.addListener("mouseover", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MarkerMouseOver', markerId, mapsMouseEvent.latLng);
    });

    marker.addListener("mouseup", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MarkerMouseUp', markerId, mapsMouseEvent.latLng);
    });

    marker.addListener("position_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerPositionChanged', markerId);
    });

    marker.addListener("shape_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerShapeChanged', markerId);
    });

    marker.addListener("title_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerTitleChanged', markerId);
    });

    marker.addListener("visible_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerVisibleChanged', markerId);
    });

    marker.addListener("zindex_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerZIndexChanged', markerId);
    });
}


function setMapEventListeners(MapId) {
    var map = maps[MapId];
    var DNMapRef = DotNetMapRefs[MapId];

    map.addListener("click", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MapClicked', mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
    });

    map.addListener("dblclick", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MapDoubleClicked', mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
    });

    map.addListener("rightclick", (mapsMouseEvent) => {
        console.log("Right Clicked From JS");
        DNMapRef.invokeMethodAsync('MapRightClicked', mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
    });

    map.addListener("mousemove", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MapMouseMove', mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
    });

    map.addListener("mouseout", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MapMouseOut', mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
    });

    map.addListener("mouseover", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MapMouseOver', mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
    });

    map.addListener("center_changed", () => {
        DNMapRef.invokeMethodAsync('MapCenterChanged');
    });

    map.addListener("drag", () => {
        DNMapRef.invokeMethodAsync('MapDrag');
    });

    map.addListener("dragend", () => {
        DNMapRef.invokeMethodAsync('MapDragEnd');
    });

    map.addListener("dragstart", () => {
        DNMapRef.invokeMethodAsync('MapDragStart');
    });

    map.addListener("heading_changed", () => {
        DNMapRef.invokeMethodAsync('MapHeadingChanged');
    });

    map.addListener("idle", () => {
        DNMapRef.invokeMethodAsync('MapIdle');
    });

    map.addListener("maptypeid_changed", () => {
        DNMapRef.invokeMethodAsync('MapMapTypeIdChanged');
    });

    map.addListener("projection_changed", () => {
        DNMapRef.invokeMethodAsync('MapProjectionChanged');
    });

    map.addListener("resize", () => {
        DNMapRef.invokeMethodAsync('MapResize');
    });

    map.addListener("bounds_changed", () => {
        DNMapRef.invokeMethodAsync('MapBoundsChanged');
    });

    map.addListener("tilesloaded", () => {
        DNMapRef.invokeMethodAsync('MapTilesLoaded');
    });

    map.addListener("tilt_changed", () => {
        DNMapRef.invokeMethodAsync('MapTiltChanged');
    });

    map.addListener("zoom_changed", () => {
        DNMapRef.invokeMethodAsync('MapZoomChanged');
    });
}