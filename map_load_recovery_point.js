export default function map_load_recovery_point(maplibregl, map) {
  fetch("road/r6noto/map/json/recovery_point.geojson")
  .then(function(response) {
    return response.text();
  })
  .then(function(data){
    const recovery_point = JSON.parse(data);

	// add markers to map
    recovery_point.features.forEach((marker) => {
        // create a DOM element for the marker
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url("${marker.properties._iconUrl}")`;
        el.style.width = `${marker.properties._iconSize[0]}px`;
        el.style.height = `${marker.properties._iconSize[1]}px`;
        // el.style.marginLeft = `-${marker.properties._iconAnchor[0]}px`;
        // el.style.marginTop = `-${marker.properties._iconAnchor[1]}px`;

        // create the popup
		var html = "";
		if (marker.properties.name!==undefined) {
		  html += "<div>" + marker.properties.name + "</div>";
		}
		if (marker.properties.路線名!==undefined) {
		  html += "<div>路線名：" + marker.properties.路線名 + "</div>";
		}
		if (marker.properties["地名（推定）"]!==undefined) {
		  html += "<div>地名（推定）：" + marker.properties["地名（推定）"] + "</div>";
		}
		const popup = new maplibregl.Popup({offset: 25}).setHTML(html);

		// create the marker
		new maplibregl.Marker({element: el})
		  .setLngLat(marker.geometry.coordinates)
		  .setPopup(popup) // sets a popup on this marker
		  .addTo(map);
    });
  });
}