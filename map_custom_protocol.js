/*
 * 複数のタイルソースを一つに見せるためのプロトコル
 */
export default function map_custom_protocol(maplibregl) {
    async function merge_tile_pixel2canvas(canvas, source_imageBitmap) {
            const context = canvas.getContext('2d');
            context.drawImage(source_imageBitmap, 0, 0);

            // 透過処理のロジック
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < imageData.data.length; i += 4) {
                if (imageData.data[i] === 255 && imageData.data[i + 1] === 255 && imageData.data[i + 2] === 255) { // 白色を探す
                    imageData.data[i + 3] = 0; // 透明にする
                }
            }
            context.putImageData(imageData, 0, 0);
    }


    async function fetch_tile(tile_servers_url, dummy_tile_url, callback) {
        // タイル座標を元にタイルURLBASEテーブルからタイルURLを取得
        let xyz = dummy_tile_url.substring(0, dummy_tile_url.length - 4).split("/");
        let z = xyz[3], x = xyz[4], y = xyz[5];
        let tile_key = `${z}/${x}/${y}`;
        if (window.tile_baseurl_table[tile_key]!==undefined) {
            // 複数のタイルソースからタイルを取得、タイル画像のピクセルをマージするためのキャンバスを作成
            const canvas = document.createElement('canvas');
            for (let i = 0; i < window.tile_baseurl_table[tile_key].length; i++) {
                let baseurl = tile_servers_url[window.tile_baseurl_table[tile_key][i]];
                let tile_url = `${baseurl}${z}/${x}/${y}.png`;
                console.log(tile_url);

                try {
                    // タイルを取得
                    let response = await fetch(tile_url);
                    if (response.ok) {
                        let arrayBuffer = await response.arrayBuffer();
                        const source_imageBitmap = await createImageBitmap(new Blob([arrayBuffer], { type: 'image/png' }));
                        if (i === 0) {
                            canvas.width = source_imageBitmap.width;
                            canvas.height = source_imageBitmap.height;
                        }
                        await merge_tile_pixel2canvas(canvas, source_imageBitmap);
                    }
                } catch (error) {
                    // エラー処理はここで行うか、またはループの外で全ての試行が失敗したことを通知する
                    callback(new Error('Failed to fetch tile.'));
                }
            }
            // ピクセルをマージしたキャンバスの内容を Data URL に変換し、それを ArrayBuffer に変換して返す
            const dataURL = canvas.toDataURL('image/png');
            const dataResponse = await fetch(dataURL); // Data URL を fetch で取得
            const data = await dataResponse.arrayBuffer(); // ArrayBuffer を取得
            callback(null, data, null, null);
            return; // タイルの取得に成功したら処理を終了
        }
        // 全てのタイルサーバーからの取得を試みた後、タイルが見つからなかった場合の処理
        callback(new Error('No tile found for the given URL in tile table. (' + tile_key + ')' ));
    }


    maplibregl.addProtocol('custom', async (params, callback) => {
        let url = params.url.replace('custom://', 'https://'); // 実際のタイルURLに置き換える
        // console.log(url);
		fetch_tile(window.tile_servers_url, url, callback);
    });
}
