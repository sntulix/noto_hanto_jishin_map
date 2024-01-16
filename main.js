import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useGsiTerrainSource } from 'maplibre-gl-gsi-terrain';
import map_onload from './map_onload';

/*
 * 穴水地区 空中写真(2024/01/11) を透過処理するためのプロトコル
 */
maplibregl.addProtocol('custom', async (params, callback) => {
    const url = params.url.replace('custom://', 'https://'); // 実際のタイルURLに置き換える

    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const imageBitmap = await createImageBitmap(new Blob([arrayBuffer], { type: 'image/png' }));

        const canvas = document.createElement('canvas');
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;
        const context = canvas.getContext('2d');
        context.drawImage(imageBitmap, 0, 0);

        // 透過処理のロジック
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
            if (imageData.data[i] === 255 && imageData.data[i + 1] === 255 && imageData.data[i + 2] === 255) { // 白色を探す
                imageData.data[i + 3] = 0; // 透明にする
            }
        }
        context.putImageData(imageData, 0, 0);

        const dataURL = canvas.toDataURL('image/png');
        const dataResponse = await fetch(dataURL); // Data URL を fetch で取得
        const data = await dataResponse.arrayBuffer(); // ArrayBuffer を取得

        callback(null, data, null, null);

    } catch (err) {
        callback(err);
    }
});


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
            能登半島空中写真_輪島西: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102noto_wazimanishi_0111do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            },
            能登半島空中写真_穴水_20240105: {
                type: 'raster',
                tiles: ['https://maps.gsi.go.jp/xyz/20240102_noto_anamizu_0105do/{z}/{x}/{y}.png'],
                attribution: '&copy; <a href="https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html?fbclid=IwAR2g3dvoK3GeS33I3X4F_W5REdGVFEWkLjOt3_cODQot5X4iUO_mmzxcFm8#2">地理院タイル 令和6年(2024年)能登半島地震に関する情報</a>',
            },
            能登半島空中写真_穴水_20240111: {
                type: 'raster',
                tiles: ['custom://maps.gsi.go.jp/xyz/20240102noto_anamizu_0111do/{z}/{x}/{y}.png'],
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
                id: '能登半島空中写真_輪島西',
                type: 'raster',
                source: '能登半島空中写真_輪島西',
                paint: {
                    'raster-opacity': 0.9
                }
            },
        {
            id: '能登半島空中写真_穴水_20240105',
            type: 'raster',
            source: '能登半島空中写真_穴水_20240105',
            paint: {
                'raster-opacity': 0.9
            }
        },
        {
            id: '能登半島空中写真_穴水_20240111',
            type: 'raster',
            source: '能登半島空中写真_穴水_20240111',
            paint: {
                'raster-opacity': 0.9
            }
        },
        {
            id: '能登半島空中写真_七尾',
            type: 'raster',
            source: '能登半島空中写真_七尾',
            paint: {
                'raster-opacity': 0.9
            }
        }],
    },
});

// Add zoom and rotation controls to the map.
map.addControl(new maplibregl.NavigationControl());

map.on('load', () => {
    map_onload(maplibregl, useGsiTerrainSource, map);
});
