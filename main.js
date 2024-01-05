import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useGsiTerrainSource } from 'maplibre-gl-gsi-terrain';

const map = new maplibregl.Map({
    container: 'map', // container id
    center: [137.17879056930542, 37.482912484357], // starting position
    zoom: 13, // starting zoom
    minZoom: 5,
    maxZoom: 18,
    maxBounds: [122,20, 154, 50],
    style: {
        version: 8,
        sources: {
            地理院地図: {
                type: 'raster',
                tiles: ['https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a>',
                maxZoom: 18
            },
            能登半島空中写真_輪島東: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102noto_wazimahigashi_0102do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
                maxZoom: 18
            }
        },
        layers: [{
            id: '地理院地図',
            type: 'raster',
            source: '地理院地図',
            minzoom: 0,
            maxzoom: 18
        },
        {
            id: '能登半島空中写真_輪島東',
            type: 'raster',
            source: '能登半島空中写真_輪島東',
            minzoom: 0,
            maxzoom: 18
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
});