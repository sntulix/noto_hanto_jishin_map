export default function map_load_emergency_restored_section(maplibregl, map) {
    fetch("road/r6noto/map/json/emergency_restored_section.geojson")
      .then(function(response) {
        return response.text();
      })
      .then(function(data){
        map.addSource('route', {
            'type': 'geojson',
            'data': JSON.parse(data)
        });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': ['get', '_color'],
                'line-opacity': ['get', '_opacity'],
                'line-width': ['get', '_weight']
            }
        });
    });

	map.on('mousemove', 'route', function() {
		map.getCanvas().style.cursor = 'pointer';
	});
	map.on('mouseleave', 'route', function() {
		map.getCanvas().style.cursor = '';
	});

    map.on('click', 'route', function(e) {
            var html = "";
            if (undefined!==e.features[0].properties.name) {
                html += "<div>" + e.features[0].properties.name + "</div>";
            } else {
                console.log("route.clilck()/e.features[0].properties.name/" + e.features[0].properties.name + "; properties:");
                console.log(e.features[0].properties);
            }
            if (undefined!==e.features[0].properties.総延長) {
                html += "<div>総延長：" + e.features[0].properties.総延長 + "</div>";
            }
            if (undefined!==e.features[0].properties.データ出典) {
                html += "<div>データ出典：" + e.features[0].properties.データ出典 + "</    div>";
            }
            new maplibregl.Popup()
                .setLngLat(e.lngLat) // ポップアップの位置を設定
                .setHTML(html)
                .addTo(map);
    });
}
