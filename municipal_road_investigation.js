export default function municipal_road_investigation(maplibregl, map) {
  fetch("road/r6noto/map/json/municipal_road_investigation.geojson")
  .then(function(response) {
    return response.text();
  })
  .then(function(data){
    const sagyou = JSON.parse(data);

	// add markers to map
    sagyou.features.forEach((marker) => {
        // create a DOM element for the marker
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url("${marker.properties._iconUrl}")`;
        el.style.backgroundSize = `${marker.properties._iconSize[0]}px ${marker.properties._iconSize[1]}px`;
        el.style.width = `${marker.properties._iconSize[0]}px`;
        el.style.height = `${marker.properties._iconSize[1]}px`;
        // el.style.marginLeft = `-${marker.properties._iconAnchor[0]}px`;
        // el.style.marginTop = `-${marker.properties._iconAnchor[1]}px`;

		// create the popup
		var html = "<div>" + marker.properties.name + "</div>";
		if (marker.properties.地区名!==undefined) {
			html += "<div>地区名：" + marker.properties.地区名 + "</div>";
		}
		if (marker.properties.現地調査班!==undefined) {
			html += "<div>現地調査班：" + marker.properties.現地調査班 + "</div>";
		}
		if (marker.properties.調査結果!==undefined) {
			html += "<div>調査結果：" + marker.properties.調査結果 + "</div>";
		}
		if (marker.properties.撮影日!==undefined) {
			html += "<div>撮影日：" + marker.properties.撮影日 + "</div>";
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