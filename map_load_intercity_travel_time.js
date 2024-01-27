export default function map_load_intercity_travel_time(maplibregl, map) {
    fetch("road/r6noto/map/json/intercity_travel_time.geojson")
      .then(function(response) {
        return response.text();
      })
      .then(function(data){
        map.addSource('intercity_travel_time', {
            'type': 'geojson',
            'data': JSON.parse(data)
        });
		map.addLayer({
			'id': 'intercity_travel_time',
			'type': 'line',
			'source': 'intercity_travel_time',
			'layout': {
				'line-join': 'round',
				'line-cap': 'round'
			},
			'paint': {
				'line-color': ['get', '_color'],
				'line-opacity': ['get', '_opacity'],
				'line-width': ['get', '_weight'],
				'line-dasharray': [2, 2] // 点線のパターン（線の長さ、間隔）
			}
		});
    });

	map.on('mousemove', 'intercity_travel_time', function() {
		map.getCanvas().style.cursor = 'pointer';
	});
	map.on('mouseleave', 'intercity_travel_time', function() {
		map.getCanvas().style.cursor = '';
	});

	map.on('click', 'intercity_travel_time', function(e) {
			var html = "<div>" + e.features[0].properties.name + "</div>";
			if (undefined!==e.features[0].properties.所要時間) {
				html += "<div>所要時間：" + e.features[0].properties.所要時間 + "</div>";
			}
			new maplibregl.Popup()
				.setLngLat(e.lngLat) // ポップアップの位置を設定
				.setHTML(html)
				.addTo(map);
	});
}
