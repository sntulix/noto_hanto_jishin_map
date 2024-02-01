# 令和六年 能登半島地震 3Dマップ

これはOSSと国土地理院などのデータを使った令和六年 能登半島地震の状況把握マップの習作です。
被災されている皆さまが一日も早く安心できることを心から祈ります。

## プレビュー

https://www.futuregadget.com/file/noto_hanto_jishin_map3d/

## 操作方法
  - 3D化On/Off: 右上の山アイコンをクリックでOn/Off
  - 左右前後移動: マウス左ドラッグ
  - 角度変更: マウス右ドラッグ
  - ズーム変更: マウス中ホイール回転 
  - 現在地表示: 地図右の「十字丸」(![スクリーンショット 2024-02-01 9.05.14.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fbs%2Fvw3p1nyx4jz6y2xfy3v5mkfr0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_6slz7s%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-02-01%209.05.14.png))ボタン
  - 地点の住所表示：地図左下の「地点住所を表示」(![スクリーンショット 2024-02-01 9.05.40.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fbs%2Fvw3p1nyx4jz6y2xfy3v5mkfr0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_7pWZM1%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-02-01%209.05.40.png))ボタン
  - 住所から地点を表示：地図左下の「入れた住所を表示」(![スクリーンショット 2024-02-01 9.07.07.png](..%2F..%2F..%2FDesktop%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-02-01%209.07.07.png))ボタン
  - アイコン写真: 工事の絵(![スクリーンショット 2024-02-01 9.08.49.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fbs%2Fvw3p1nyx4jz6y2xfy3v5mkfr0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_g8nr0T%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-02-01%209.08.49.png))や道の駅の絵(![スクリーンショット 2024-02-01 9.09.42.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fbs%2Fvw3p1nyx4jz6y2xfy3v5mkfr0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_rWDRbM%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-02-01%209.09.42.png))をクリックすると情報や写真などが見れます。
  - 到達地点マーク: 黄色い四角(![スクリーンショット 2024-02-01 9.10.15.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fbs%2Fvw3p1nyx4jz6y2xfy3v5mkfr0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_PRjASD%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-02-01%209.10.15.png))や緑色の星(![スクリーンショット 2024-02-01 9.10.58.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fbs%2Fvw3p1nyx4jz6y2xfy3v5mkfr0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_8mzwsx%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-02-01%209.10.58.png))をクリックすると情報や写真などが見れます。
  - 点線: 区間ごとの所要時間です。クリックすると時間が見れます。

## 利用ライブラリ・データ、参考
  - MapLibre GL JS
    - https://maplibre.org
  - maplibre-gl-gsi-terrain
    - https://github.com/mug-jp/maplibre-gl-gsi-terrain
  - 「珠州・輪島東フォトグラメトリ・マップ
    - https://x.com/hwtnv/status/1742437585316982928?s=20
  - 国土地理院 令和6年(2024年)能登半島地震に関する情報
    - https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html
  - 国土地理院「道路復旧見える化マップ」
    - https://www.mlit.go.jp/road/r6noto/index2.html
  - 「現場のプロがわかりやすく教える位置情報エンジニア養成講座」
    - https://www.shuwasystem.co.jp/book/9784798068923.html
  - maptiler, OpenStreetMap（建物データ）
    - https://www.maptiler.jp/
    - https://www.openstreetmap.org/

## ノート
  - データについて
    - 2024年1月29日正午分までのデータを取り込んでいます。
  - 3D建物について
    - 下の地図が見えるようにするため、ズームで地面に近づくと見えなくしています。
    - 地形の3D表示をOnにしていると見えなくなる建物があります。
    - 建物は遠くにある時は浮いて見えることがあります。