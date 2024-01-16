export default function map_custom_protocol(maplibregl) {
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
}
