export default function map_onload(maplibregl, useGsiTerrainSource, map) {
    /* add Terrain */
    const gsiTerrainSource = useGsiTerrainSource(maplibregl.addProtocol);
    map.addSource('terrain', gsiTerrainSource);
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


    /* add 3D-Buildings */
    // map.addSource('openmaptiles', {
    //     url: `https://api.maptiler.com/tiles/v3/tiles.json?key=QvF1NsfIoRW0AGE6u8j7`,
    //     type: 'vector',
    // });
    // map.addLayer(
    //     {
    //         'id': '3d-buildings',
    //         'source': 'openmaptiles',
    //         'source-layer': 'building',
    //         'type': 'fill-extrusion',
    //         'minzoom': 8,
    //         'maxzoom': 17,
    //         'paint': {
    //             'fill-extrusion-color': [
    //                 'interpolate',
    //                 ['linear'],
    //                 ['get', 'render_height'], 0, 'yellow'
    //             ],
    //             'fill-extrusion-height': [
    //                 'interpolate',
    //                 ['linear'],
    //                 ['zoom'],
    //                 8, 0,
    //                 9, 0,
    //                 10, 0,
    //                 11, 0,
    //                 12, 0,
    //                 13, 0,
    //                 14, 0,
    //                 15, 0,
    //                 16, ['get', 'render_height']
    //             ],
    //             'fill-extrusion-base': ['case',
    //                 ['>=', ['get', 'zoom'], 16],
    //                 ['get', 'render_min_height'], 0
    //             ],
    //             'fill-extrusion-opacity': 1.0
    //         }
    //     },
    //     labelLayerId
    // );


    /* add noto airport */
    const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage =
            `url(https://www.ana.co.jp/guide/website/o-banner/offibana/images/asw01_s_sample.gif)`;
        el.style.width = `88px`;
        el.style.height = `31px`;

        el.addEventListener('click', () => {
            window.alert(marker.properties.message);
        });
        
        const marker = new maplibregl.Marker({element: el})
        .setLngLat([136.958982305556, 37.2927485833333])
        .setPopup(new maplibregl.Popup().setHTML("<div><a href='https://www.ana.co.jp/ja/jp/special-notice/000873.html?p1=domestic&p2=ja&p3=global' rel='noopener noreferrer' target='_blank'>令和6年能登半島地震に伴う運休および臨時便の設定について(2月7日更新） - ANA</a></div>"))
        .addTo(map);
}
