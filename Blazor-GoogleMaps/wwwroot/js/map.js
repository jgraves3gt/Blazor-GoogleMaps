let maps = [];

function initMap(mapId, lat, lon) {
    try {
        var map = new google.maps.Map(document.getElementById(mapId), {
            center: { lat: lat, lng: lon },
            zoom: 8,
            mapId: 'dd7254a7eea796d1'
        });

        maps[mapId] = map;
        
    }
    catch (e) {
        console.log("Map Initialization Error: " + e);
    }
}

function addMapMarker(mapId, marker) {

}

function setMapClickListener(MapId, DNMapRef) {
    var map = maps[MapId];

    map.addListener("click", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MapClicked', mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
    });

    map.addListener("dblclick", (mapsMouseEvent) => {
        DNMapRef.invokeMethodAsync('MapDoubleClicked', mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
    });

    map.addListener("rightclick", (mapsMouseEvent) => {
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