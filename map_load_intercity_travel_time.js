export default function map_load_intercity_travel_time(maplibregl, map) {
	map.addSource('intercity_travel_time', {
		'type': 'geojson',
		'data': {
			"type": "FeatureCollection",
			"features": [
			{
				"type": "Feature",
				"properties": {
				"name": "金沢市（今町）",
				"_markerType": "Icon",
				"_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/088.png",
				"_iconSize": [
					40,
					40
				],
				"_iconAnchor": [
					20,
					20
				]
				},
				"geometry": {
				"type": "Point",
				"coordinates": [
					136.700692,
					36.629305
				]
				}
			},
			{
				"type": "Feature",
				"properties": {
				"name": "珠洲市",
				"_markerType": "Icon",
				"_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/088.png",
				"_iconSize": [
					40,
					40
				],
				"_iconAnchor": [
					20,
					20
				]
				},
				"geometry": {
				"type": "Point",
				"coordinates": [
					137.260723,
					37.436925,
					0
				]
				}
			},
			{
				"type": "Feature",
				"properties": {
				"name": "七尾市（徳田大津）",
				"_markerType": "Icon",
				"_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/088.png",
				"_iconSize": [
					40,
					40
				],
				"_iconAnchor": [
					20,
					20
				]
				},
				"geometry": {
				"type": "Point",
				"coordinates": [
					136.832856,
					37.063366,
					0
				]
				}
			},
			{
				"type": "Feature",
				"properties": {
				"name": "穴水町",
				"_markerType": "Icon",
				"_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/088.png",
				"_iconSize": [
					40,
					40
				],
				"_iconAnchor": [
					20,
					20
				]
				},
				"geometry": {
				"type": "Point",
				"coordinates": [
					136.899219,
					37.24379,
					0
				]
				}
			},
			{
				"type": "Feature",
				"geometry": {
				"type": "LineString",
				"coordinates": [
					[
					136.832855,
					37.063372,
					0
					],
					[
					136.899176,
					37.243722,
					0
					]
				]
				},
				"properties": {
				"name": "七尾市(徳田大津)～穴水町間の所要時間",
				"所要時間": "<img width=\"100%\" src=\"./img/intercity_travel_time/240124nanao-anamizu.jpg\">",
				"_color": "#0000ff",
				"_opacity": 1,
				"_weight": 10,
				"_dashArray": "40,20",
				"_stroke": true
				}
			},
			{
				"type": "Feature",
				"geometry": {
				"type": "LineString",
				"coordinates": [
					[
					136.899208,
					37.243773,
					0
					],
					[
					137.260721,
					37.436946,
					0
					]
				]
				},
				"properties": {
				"name": "穴水町～珠洲市間の所要時間",
				"所要時間": "<img width=\"100%\" src=\"./img/intercity_travel_time/240124anamizu-suzu.jpg\">",
				"_color": "#0000ff",
				"_opacity": 1,
				"_weight": 10,
				"_dashArray": [
					40,
					20
				],
				"_stroke": true
				}
			},
			{
				"type": "Feature",
				"properties": {
				"name": "金沢市(今町)～七尾市（徳田大津）間の所要時間",
				"所要時間": "<img width=\"100%\" src=\"./img/intercity_travel_time/240124kanazawa-nanao.png\">",
				"_color": "#0000ff",
				"_opacity": 1,
				"_weight": 10,
				"_dashArray": "40,20"
				},
				"geometry": {
				"type": "LineString",
				"coordinates": [
					[
					136.832614,
					37.062711
					],
					[
					136.700757,
					36.629598
					]
				]
				}
			},
			{
				"type": "Feature",
				"properties": {
				"name": "輪島市",
				"_markerType": "Icon",
				"_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/088.png",
				"_iconSize": [
					40,
					40
				],
				"_iconAnchor": [
					20,
					20
				]
				},
				"geometry": {
				"type": "Point",
				"coordinates": [
					136.899315,
					37.390183,
					0
				]
				}
			},
			{
				"type": "Feature",
				"geometry": {
				"type": "LineString",
				"coordinates": [
					[
					136.899176,
					37.243824,
					0
					],
					[
					136.899326,
					37.390209,
					0
					]
				]
				},
				"properties": {
				"name": "穴水町～輪島市間の所要時間",
				"所要時間": "<img width=\"100%\" src=\"./img/intercity_travel_time/240124anamizu-wajima.jpg\">",
				"_color": "#0000ff",
				"_opacity": 1,
				"_weight": 10,
				"_dashArray": [
					40,
					20
				],
				"_stroke": true
				}
			},
			{
				"type": "Feature",
				"properties": {
				"name": "能登町",
				"_markerType": "Icon",
				"_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/088.png",
				"_iconSize": [
					40,
					40
				],
				"_iconAnchor": [
					20,
					20
				]
				},
				"geometry": {
				"type": "Point",
				"coordinates": [
					137.14758,
					37.30994
				]
				}
			},
			{
				"type": "Feature",
				"properties": {
				"name": "穴水町から能登町までの所要時間",
				"所要時間": "<img width=\"100%\" src=\"./img/intercity_travel_time/240124anamizu-noto.jpg\">",
				"_color": "#0000ff",
				"_opacity": 1,
				"_weight": 10,
				"_dashArray": "40,20"
				},
				"geometry": {
				"type": "LineString",
				"coordinates": [
					[
					136.899219,
					37.243858
					],
					[
					137.147575,
					37.309944
					]
				]
				}
			}
			]
		}
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
