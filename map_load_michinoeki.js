export default function map_load_michinoeki(maplibregl, map) {
  fetch("road/r6noto/map/json/michinoeki.geojson")
  .then(function(response) {
    return response.text();
  })
  .then(function(data){
    const michinoeki = JSON.parse(data);

  	// add markers to map
    michinoeki.features.forEach((marker) => {
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
  	if (marker.properties.道の駅の状況!== undefined) {
  		html += "<div>道の駅の状況：" + marker.properties.道の駅の状況 + "</div>";
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