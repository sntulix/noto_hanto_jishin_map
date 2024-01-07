import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useGsiTerrainSource } from 'maplibre-gl-gsi-terrain';

const map = new maplibregl.Map({
    container: 'map', // container id
    center: [137.17879056930542, 37.482912484357], // starting position
    zoom: 10, // starting zoom
    minZoom: 8,
    maxZoom: 22,
    maxBounds: [122,20, 154, 50],
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
                tiles: ['https://maps.gsi.go.jp/xyz/20240102_noto_wazimanaka_0105do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            },
            能登半島空中写真_穴水: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102_noto_anamizu_0105do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            },
            能登半島空中写真_七尾: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102_noto_nanao_0105do/{z}/{x}/{y}.png'],
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
        },
        {
            id: '能登半島空中写真_珠洲_20240105',
            type: 'raster',
            source: '能登半島空中写真_珠洲_20240105',
        },
        {
            id: '能登半島空中写真_輪島中',
            type: 'raster',
            source: '能登半島空中写真_輪島中',
        },
        {
            id: '能登半島空中写真_輪島東',
            type: 'raster',
            source: '能登半島空中写真_輪島東',
        },
        {
            id: '能登半島空中写真_穴水',
            type: 'raster',
            source: '能登半島空中写真_穴水',
        },
        {
            id: '能登半島空中写真_七尾',
            type: 'raster',
            source: '能登半島空中写真_七尾',
        }],
    },
});

// Add zoom and rotation controls to the map.
map.addControl(new maplibregl.NavigationControl());

map.on('load', () => {
    const gsiTerrainSource = useGsiTerrainSource(maplibregl.addProtocol);
    map.addSource('terrain', gsiTerrainSource);

    // map.addLayer(
    //     {
    //         id: 'hillshade',
    //         source: 'terrain',
    //         type: 'hillshade',
    //         paint: {
    //             'hillshade-illumination-anchor': 'map',
    //             'hillshade-exaggeration': 0.2,
    //         },
    //     },
    // );

    map.addControl(
        new maplibregl.TerrainControl({
            source: 'terrain',
            exaggreation: 1
        }),
    );

    const layers = map.getStyle().layers;

    let labelLayerId;
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addSource('openmaptiles', {
        url: `https://api.maptiler.com/tiles/v3/tiles.json?key=QvF1NsfIoRW0AGE6u8j7`,
        type: 'vector',
    });
    map.addLayer(
        {
            'id': '3d-buildings',
            'source': 'openmaptiles',
            'source-layer': 'building',
            'type': 'fill-extrusion',
            'minzoom': 8,
            'maxzoom': 17,
            'paint': {
                'fill-extrusion-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'render_height'], 0, 'yellow'
                ],
                'fill-extrusion-height': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    16,
                    ['get', 'render_height']
                ],
                'fill-extrusion-base': ['case',
                    ['>=', ['get', 'zoom'], 16],
                    ['get', 'render_min_height'], 0
                ],
                'fill-extrusion-opacity': 1.0
            }
        },
        labelLayerId
    );

});