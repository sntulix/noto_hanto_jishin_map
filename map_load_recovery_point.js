export default function map_load_recovery_point(maplibregl, map) {
	const recovery_point = {
	  "type": "FeatureCollection",
	  "features": [
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "到達地点（国道249号）",
	        "路線名": "国道249号",
	        "地名（推定）": "珠洲市○○",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/319.png",
	        "_iconSize": [
	          30,
	          30
	        ],
	        "_iconAnchor": [
	          15,
	          15
	        ]
	      },
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          137.107431,
	          37.481804
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "到達地点（石川県道40号）",
	        "路線名": "石川県道40号（珠洲里線）",
	        "地名（推定）": "輪島市○○",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/319.png",
	        "_iconSize": [
	          30,
	          30
	        ],
	        "_iconAnchor": [
	          15,
	          15
	        ]
	      },
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          137.123496,
	          37.433878
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "到達地点（石川県道40号）",
	        "路線名": "石川県道40号（珠洲里線）",
	        "地名（推定）": "輪島市町野町○○",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/319.png",
	        "_iconSize": [
	          30,
	          30
	        ],
	        "_iconAnchor": [
	          15,
	          15
	        ]
	      },
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          137.10744,
	          37.43147
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "到達地点（国道249号）",
	        "路線名": "国道249号",
	        "地名（推定）": "輪島市○○",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/319.png",
	        "_iconSize": [
	          30,
	          30
	        ],
	        "_iconAnchor": [
	          15,
	          15
	        ]
	      },
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          137.031687,
	          37.434081
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "到達地点（国道249号）",
	        "路線名": "国道249号",
	        "地名（推定）": "輪島市○○",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/319.png",
	        "_iconSize": [
	          30,
	          30
	        ],
	        "_iconAnchor": [
	          15,
	          15
	        ]
	      },
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          137.008005,
	          37.429819
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "到達地点（国道249号）",
	        "路線名": "国道249号",
	        "地名（推定）": "輪島市○○",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/319.png",
	        "_iconSize": [
	          30,
	          30
	        ],
	        "_iconAnchor": [
	          15,
	          15
	        ]
	      },
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          136.943252,
	          37.400724
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "到達地点（石川県道285号）",
	        "路線名": "石川県道285号（高屋井田線）",
	        "地名（推定）": "珠洲市○○",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/319.png",
	        "_iconSize": [
	          30,
	          30
	        ],
	        "_iconAnchor": [
	          15,
	          15
	        ]
	      },
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          137.228765,
	          37.505839
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "到達地点（国道249号）",
	        "路線名": "国道249号",
	        "地名（推定）": "輪島市○○",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/319.png",
	        "_iconSize": [
	          30,
	          30
	        ],
	        "_iconAnchor": [
	          15,
	          15
	        ]
	      },
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          136.829844,
	          37.340818
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "到達地点（国道249号）",
	        "路線名": "国道249号",
	        "地名（推定）": "輪島市門前町○○",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/319.png",
	        "_iconSize": [
	          30,
	          30
	        ],
	        "_iconAnchor": [
	          15,
	          15
	        ]
	      },
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          136.819499,
	          37.326768
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "到達地点（石川県道38号）",
	        "路線名": "石川県道38号（輪島浦上線）",
	        "地名（推定）": "輪島市○○",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/319.png",
	        "_iconSize": [
	          30,
	          30
	        ],
	        "_iconAnchor": [
	          15,
	          15
	        ]
	      },
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          136.796406,
	          37.347596
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "到達地点（国道249号）",
	        "路線名": "国道249号",
	        "地名（推定）": "輪島市○○",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/319.png",
	        "_iconSize": [
	          30,
	          30
	        ],
	        "_iconAnchor": [
	          15,
	          15
	        ]
	      },
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          136.963407,
	          37.410538
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "到達地点（国道249号）",
	        "路線名": "国道249号",
	        "地名（推定）": "輪島市○○",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/319.png",
	        "_iconSize": [
	          30,
	          30
	        ],
	        "_iconAnchor": [
	          15,
	          15
	        ]
	      },
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          137.086518,
	          37.465624
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "沿岸部への到達地点８（輪島市七浦）",
	        "_markerType": "Icon",
	        "_iconUrl": "https://www.jartic-ri2maps.org/symbols/087.png",
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
	          136.749616,
	          37.343379
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "沿岸部への到達地点１（輪島）",
	        "_markerType": "Icon",
	        "_iconUrl": "https://www.jartic-ri2maps.org/symbols/087.png",
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
	          136.904647,
	          37.39367
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "沿岸部への到達地点９（海上より：輪島市深江町）",
	        "_markerType": "Icon",
	        "_iconUrl": "https://www.jartic-ri2maps.org/symbols/087.png",
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
	          136.973612,
	          37.41305
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "沿岸部への到達地点２（輪島市名舟町）",
	        "_markerType": "Icon",
	        "_iconUrl": "https://www.jartic-ri2maps.org/symbols/087.png",
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
	          137.027911,
	          37.432273
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "沿岸部への到達地点３（輪島市町野町）",
	        "_markerType": "Icon",
	        "_iconUrl": "https://www.jartic-ri2maps.org/symbols/087.png",
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
	          137.07294,
	          37.452972
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "沿岸部への到達地点７（海上より：輪島市町野町）",
	        "_markerType": "Icon",
	        "_iconUrl": "https://www.jartic-ri2maps.org/symbols/087.png",
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
	          137.068691,
	          37.458508
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "沿岸部への到達地点６（珠洲市大谷町）",
	        "_markerType": "Icon",
	        "_iconUrl": "https://www.jartic-ri2maps.org/symbols/087.png",
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
	          137.17437,
	          37.500908
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "沿岸部への到達地点４（珠洲市笹波町）",
	        "_markerType": "Icon",
	        "_iconUrl": "https://www.jartic-ri2maps.org/symbols/087.png",
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
	          137.224506,
	          37.51473
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "沿岸部への到達地点５（珠洲市三崎町）",
	        "_markerType": "Icon",
	        "_iconUrl": "https://www.jartic-ri2maps.org/symbols/087.png",
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
	          137.339594,
	          37.484598
	        ]
	      }
	    }
	  ]
	}
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

        el.addEventListener('click', () => {
            window.alert(marker.properties.name);
        });

        // add marker to map
        new maplibregl.Marker({element: el})
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });
}