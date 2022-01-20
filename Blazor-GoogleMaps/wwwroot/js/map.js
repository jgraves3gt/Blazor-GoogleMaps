let maps = [];
let markers = [];
let polygons = [];
let DotNetMapRefs = [];

function initMap(mapId, DNMapRef, mapOptions) {
    try {
        var map = new google.maps.Map(document.getElementById(mapId), mapOptions);

        maps[mapId] = map;

        DotNetMapRefs[mapId] = DNMapRef;
    }
    catch (e) {
        console.log("Map Initialization Error: " + e);
    }
}



function addMapMarker(mapId, mapMarker) {
    var marker = new google.maps.Marker(mapMarker.options);
    var map = maps[mapId];

    if (map) {
        marker.setMap(map);
        markers[mapMarker.id] = marker;
    }
}

function updateMapMarker(markerId, markerOptions) {
    var marker = markers[markerId];
    if (marker) {
        marker.setOptions(markerOptions);
    }
}

function addMapPolygon(mapId, mapPolygon) {
    var polygon = new google.maps.Polygon(mapPolygon.options);
    var map = maps[mapId];

    if (map) {
        polygon.setMap(map);
        polygons[mapPolygon.id] = polygon;
    }
}

function updateMapPolygon(polygonId, polygonOptions) {
    var marker = markers[polygonId];
    if (marker) {
        marker.setOptions(polygonOptions);
    }
}

function setPolygonListeners(polygonId, MapId) {
    var polygon = markers[polygonId];
    var DNMapRef = DotNetMapRefs[MapId];

    polygon.addListener("click", (me) => {
        
        DNMapRef.invokeMethodAsync('PolygonClick', {
            edge: me.edge ? me.edge : null,
            PolygonId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("contextmenu", () => {
        DNMapRef.invokeMethodAsync('PolygonContextMenu', {
            edge: me.edge ? me.edge : null,
            PolygonId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });
    polygon.addListener("dblclick", () => {
        DNMapRef.invokeMethodAsync('PolygonDoubleClick', {
            edge: me.edge ? me.edge : null,
            PolygonId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("drag", () => {
        DNMapRef.invokeMethodAsync('PolygonDrag', {
            edge: me.edge ? me.edge : null,
            PolygonId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("dragend", () => {
        DNMapRef.invokeMethodAsync('PolygonDragEnd', {
            edge: me.edge ? me.edge : null,
            PolygonId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("dragstart", () => {
        DNMapRef.invokeMethodAsync('PolygonDragStart', {
            edge: me.edge ? me.edge : null,
            PolygonId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("mousemove", () => {
        DNMapRef.invokeMethodAsync('PolygonMouseMove', {
            edge: me.edge ? me.edge : null,
            PolygonId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("mousedown", () => {
        DNMapRef.invokeMethodAsync('PolygonMouseDown', {
            edge: me.edge ? me.edge : null,
            PolygonId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("mouseout", () => {
        DNMapRef.invokeMethodAsync('PolygonMouseOut', {
            edge: me.edge ? me.edge : null,
            PolygonId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("mouseover", () => {
        DNMapRef.invokeMethodAsync('PolygonMouseOver', {
            edge: me.edge ? me.edge : null,
            PolygonId: polygonId,
            path: me.path ? me.path : null,
            vertex: me.vertex ? me.vertex : null
        });
    });

    polygon.addListener("mouseup", () => {
        DNMapRef.invokeMethodAsync('PolygonMouseUp', {
            edge: me.edge ? me.edge : null,
            PolygonId: polygonId,
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

    marker.addListener("click", () => {
        DNMapRef.invokeMethodAsync('MarkerClick', markerId);
    });

    marker.addListener("clickable_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerClickableChanged', markerId);
    });

    marker.addListener("contextmenu", () => {
        DNMapRef.invokeMethodAsync('MarkerContextMenu', markerId);
    });

    marker.addListener("cursor_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerCursorChanged', markerId);
    });

    marker.addListener("dblclick", () => {
        DNMapRef.invokeMethodAsync('MarkerDoubleClick', markerId);
    });

    marker.addListener("drag", () => {
        DNMapRef.invokeMethodAsync('MarkerDrag', markerId);
    });

    marker.addListener("dragend", () => {
        DNMapRef.invokeMethodAsync('MarkerDragEnd', markerId);
    });

    marker.addListener("draggable_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerDraggableChanged', markerId);
    });

    marker.addListener("dragstart", () => {
        DNMapRef.invokeMethodAsync('MarkerDragStart', markerId);
    });

    marker.addListener("flat_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerFlatChanged', markerId);
    });

    marker.addListener("icon_changed", () => {
        DNMapRef.invokeMethodAsync('MarkerIconChanged', markerId);
    });

    marker.addListener("mousedown", () => {
        DNMapRef.invokeMethodAsync('MarkerMouseDown', markerId);
    });

    marker.addListener("mouseout", () => {
        DNMapRef.invokeMethodAsync('MarkerMouseOut', markerId);
    });

    marker.addListener("mouseover", () => {
        DNMapRef.invokeMethodAsync('MarkerMouseOver', markerId);
    });

    marker.addListener("mouseup", () => {
        DNMapRef.invokeMethodAsync('MarkerMouseUp', markerId);
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