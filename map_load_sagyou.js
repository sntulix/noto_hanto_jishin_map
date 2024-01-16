export default function map_load_sagyou(maplibregl, map) {
	const sagyou = {
	  "type": "FeatureCollection",
	  "features": [
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "県道162号内灘町西荒屋付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240105_sagyou_araya.jpg\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          136.667835,
	          36.678038,
	          2.1
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "国道8号上越市茶屋ヶ原付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240109_sagyou_chayagahara.jpg\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          138.105896,
	          37.172492,
	          5.4
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "国道249号輪島市稲舟町付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240110_sagyou_inabune1.jpg\"><img width=\"100%\" src=\"./img/sagyou/240110_sagyou_inabune2.jpg\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          136.93158,
	          37.397244,
	          22.4
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "(主)珠洲里線珠洲市若山町上山付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240110_sagyou_kamiyama.jpg\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          137.165712,
	          37.451461,
	          137
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "穴水町字山中",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240110_sagyou_yamanaka.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          137.016988,
	          37.236621,
	          78
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "志賀町富来七海",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240111_sagyou_togihitsumi.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          136.738889,
	          37.127669,
	          61.3
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "志賀町西海風無",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240111_sagyou_saikaikazanashi.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          136.687988,
	          37.139405,
	          19.2
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "県道40号輪島市町野町川西付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240111_sagyou_kawanishi.jpg\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          137.07468,
	          37.426757,
	          64
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "国道249号輪島市道の駅千枚田ポケットパーク付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240111_sagyou_semmaida.jpg\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          137.005014,
	          37.428441,
	          12.6
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "国道249号輪島市中屋トンネル",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240100_R249_nakayatunnel.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          136.821192,
	          37.331154,
	          311
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "深見海岸からの資機材陸揚げ",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240114_R249_fukamikaigan.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/494.png",
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
	          136.973771,
	          37.413054
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "立ち入り規制箇所へのヘリでの調査",
	        "啓開作業等": "<iframe width=\"930\" height=\"523\" src=\"https://www.youtube.com/embed/sbwjAE-3scg\" title=\"陸路から到達できない地点の被害状況を調査【#令和6年能登半島地震　被災状況調査】\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/570.png",
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
	          136.998108,
	          37.424091
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "国道249号輪島市門前町浦上の道路啓開作業",
	        "啓開作業等": "<iframe width=\"912\" height=\"513\" src=\"https://www.youtube.com/embed/gHBg1C3Sc8w\" title=\"国道249号輪島市門前町浦上の緊急復旧（道路啓開）作業【#令和6年能登半島地震　道路啓開】\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/538.png",
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
	          136.81099,
	          37.32159
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "大谷トンネル被害状況調査",
	        "啓開作業等": "<iframe width=\"912\" height=\"513\" src=\"https://www.youtube.com/embed/spJdQDF14Ec\" title=\"国道249号大谷トンネルの崩落状況を調査【#令和6年能登半島地震　緊急復旧】\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/563.png",
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
	          137.199191,
	          37.481921
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "国道249号輪島市縄又付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240110_R249_nawamata.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          136.830521,
	          37.341134
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "国道249号輪島市名舟付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240113_R249_nafune4.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          137.013429,
	          37.431145
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "国道249号輪島市渋田付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240106_R249_shibuta.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          137.035972,
	          37.436642
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "国道249号八世乃洞門新トンネル ",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240110_R249_haseno.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          137.086425,
	          37.465642
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "国道249号珠洲市仁江付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240108_R249_nie.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          137.106403,
	          37.480239
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "県道38号輪島市上山付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240110_K38_kamiyama2.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          136.794158,
	          37.342661
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "県道40号輪島市鈴屋付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240111_K40_suzuya.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          137.100123,
	          37.426345
	        ]
	      }
	    },
	    {
	      "type": "Feature",
	      "properties": {
	        "name": "県道285号輪島市馬緤付近",
	        "啓開作業等": "<img width=\"100%\" src=\"./img/sagyou/240112_K285_matsunagi.png\">",
	        "_markerType": "Icon",
	        "_iconUrl": "https://maps.gsi.go.jp/portal/sys/v4/symbols/482.png",
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
	          137.230148,
	          37.485694
	        ]
	      }
	    }
	  ]
	}
	// add markers to map
    sagyou.features.forEach((marker) => {
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