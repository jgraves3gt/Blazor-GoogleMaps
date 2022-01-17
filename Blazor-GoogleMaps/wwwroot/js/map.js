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

function setMapClickListener(MapId, DNMapRef) {
    var map = maps[MapId];

    map.addListener("click", (mapsMouseEvent) => {
        //console.log("From JS - Lat:" + mapsMouseEvent.latLng.lat() + " | Lon:" + mapsMouseEvent.latLng.lng());
        DNMapRef.invokeMethodAsync('MapClicked', mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
    });

    map.addListener("dblclick", (mapsMouseEvent) => {
        //console.log("From JS - Lat:" + mapsMouseEvent.latLng.lat() + " | Lon:" + mapsMouseEvent.latLng.lng());
        DNMapRef.invokeMethodAsync('MapDoubleClicked', mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
    });

    map.addListener("rightclick", (mapsMouseEvent) => {
        //console.log("From JS, Right Clicked - Lat:" + mapsMouseEvent.latLng.lat() + " | Lon:" + mapsMouseEvent.latLng.lng());
        DNMapRef.invokeMethodAsync('MapRightClicked', mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
    });
}