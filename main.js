import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useGsiTerrainSource } from 'maplibre-gl-gsi-terrain';
import map_custom_protocol from './map_custom_protocol';
import map_onload from './map_onload';
import map_load_emergency_restored_section from './map_load_emergency_restored_section';
import map_load_recovery_point from './map_load_recovery_point';
import map_load_sagyou from './map_load_sagyou';
import map_load_michinoeki from "./map_load_michinoeki.js";
import map_load_intercity_travel_time from "./map_load_intercity_travel_time.js";

/* 穴水地区 空中写真(2024/01/11) を透過処理するためのプロトコル追加 */
map_custom_protocol(maplibregl);

const map = new maplibregl.Map({
    container: 'map', // container id
    center: [136.959343, 37.291262], // starting position
    zoom: 9.5, // starting zoom
    minZoom: 8,
    maxZoom: 22,
    maxBounds: [122,20, 154, 50],
    maxPitch: 65,
    style: {
        version: 8,
        sources: {
            地理院地図: {
                type: 'raster',
                tiles: ['https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a>',
            },
            能登半島空中写真_輪島東: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102noto_wazimahigashi_0102do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            },
            能登半島空中写真_珠洲_20240102: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102noto_suzu_0102do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            },
            能登半島空中写真_珠洲_20240105: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102_noto_suzu_0105do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            },
            能登半島空中写真_輪島中: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102noto_wazimanaka_0111do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            },
            能登半島空中写真_輪島西_20240111: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102noto_wazimanishi_0111do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            },
            能登半島空中写真_輪島西_20240117: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102noto_wazimanishi_0117do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            },
            能登半島空中写真_穴水_20240117: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102noto_anamizu_0117do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            },
            能登半島空中写真_七尾_20240105: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102_noto_nanao_0105do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            },
            能登半島空中写真_七尾_20240117: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102noto_nanao_0117do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            }
        },
        layers: [{
            id: '地理院地図',
            type: 'raster',
            source: '地理院地図',
        },
        {
            id: '能登半島空中写真_珠洲_20240102',
            type: 'raster',
            source: '能登半島空中写真_珠洲_20240102',
            paint: {
                'raster-opacity': 0.9
            }
        },
        {
            id: '能登半島空中写真_珠洲_20240105',
            type: 'raster',
            source: '能登半島空中写真_珠洲_20240105',
            paint: {
                'raster-opacity': 0.9
            }
        },
        {
            id: '能登半島空中写真_輪島中',
            type: 'raster',
            source: '能登半島空中写真_輪島中',
            paint: {
                'raster-opacity': 0.9
            }
        },
        {
            id: '能登半島空中写真_輪島東',
            type: 'raster',
            source: '能登半島空中写真_輪島東',
            paint: {
                'raster-opacity': 0.9
            }
        },
        {
            id: '能登半島空中写真_輪島西_20240111',
            type: 'raster',
            source: '能登半島空中写真_輪島西_20240111',
            paint: {
                'raster-opacity': 0.9
            }
        },
        {
            id: '能登半島空中写真_輪島西_20240117',
            type: 'raster',
            source: '能登半島空中写真_輪島西_20240117',
            paint: {
                'raster-opacity': 0.9
            }
        },
        {
            id: '能登半島空中写真_穴水_20240117',
            type: 'raster',
            source: '能登半島空中写真_穴水_20240117',
            paint: {
                'raster-opacity': 0.9
            }
        },
        {
            id: '能登半島空中写真_七尾_20240105',
            type: 'raster',
            source: '能登半島空中写真_七尾_20240105',
            paint: {
                'raster-opacity': 0.9
            }
        },
        {
            id: '能登半島空中写真_七尾_20240117',
            type: 'raster',
            source: '能登半島空中写真_七尾_20240117',
            paint: {
                'raster-opacity': 0.9
            }
        }],
    },
});

// Add zoom and rotation controls to the map.
map.addControl(new maplibregl.NavigationControl());

// Add geolocate control to the map.
    map.addControl(
        new maplibregl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );

map.on('load', () => {
    map_onload(maplibregl, useGsiTerrainSource, map);
    map_load_emergency_restored_section(maplibregl, map);
    map_load_recovery_point(maplibregl, map);
    map_load_sagyou(maplibregl, map);
    map_load_michinoeki(maplibregl, map);
    map_load_intercity_travel_time(maplibregl, map);
});

document.getElementById("getAddressButton")
.addEventListener("click", function(e) {
    // マップの中央点を取得
    var center = map.getCenter();

    // 緯度と経度を取得
    var latitude = center.lat;
    var longitude = center.lng;

    // 緯度と経度を表示（または使用）
    var url = "https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress?lat="+latitude+"&lon="+longitude;
    fetch(url)
    .then(function(response) {
        return response.text();
    })
    .then(function(data){
        if (-1!=data.indexOf('muniCd')) {
            var json = JSON.parse(data);
            var miniCD_str = GSI.MUNI_ARRAY[json.results.muniCd].split(',');
            var address = miniCD_str[1]+ miniCD_str[3] + ' ' + json.results.lv01Nm
            + "\n(緯度" + latitude.toFixed(6)  + " 経度" + longitude.toFixed(6) + ")";
            alert(address);
        } else {
            alert("住所データがない地点です");
        }
    });
}, false);

function moveToAddress() {
    let geocoding_api_url = "https://msearch.gsi.go.jp/address-search/AddressSearch?q=";
    let address = document.getElementById("geocoding_address_box").value;
    if (""==address) {
        alert("住所を入力してください");
        return;
    }
    fetch(geocoding_api_url + address)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            var json = JSON.parse(data);
            if (0===json.length) {
                alert("住所が見つかりませんでした");
                return;
            }
            map.flyTo({
                center: json[0].geometry.coordinates,
                zoom: 18
            });
        });
}
document.getElementById("getGeocodingButton")
.addEventListener("click", function(e) {
    moveToAddress();
}, false);
document.getElementById("geocoding_address_box")
.addEventListener("keypress", function(e) {
    if (e.code==="Enter") {
        moveToAddress();
    }
}, false);
