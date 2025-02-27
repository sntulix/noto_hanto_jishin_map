# 令和六年 能登半島地震 3Dマップ

これはオープンソースな地理情報システムと、国土地理院や国土交通省などが提供するオープンデータを使った令和六年 能登半島地震の状況把握マイマップの習作です。
被災されている皆さまが一日も早く安心できることを心から祈ります。

## プレビュー

https://www.futuregadget.com/file/noto_hanto_jishin_map3d/

## スクリーンショット

![447989355_7652570874818543_4245890940101942119_n](https://github.com/user-attachments/assets/376de9e7-c714-42d8-88b1-bfaadaa98f31)
※現在は建物表示は停止しています。

## 操作方法
  - 3D化On/Off: 右上の3D地形表示(![3D地形表示](https://github.com/sntulix/noto_hanto_jishin_map3d/assets/616940/63ca84d1-5b69-41bc-bfad-8e77e51554e2)
)ボタンをクリックするとOn/Offが切り替わります。
  - 左右前後移動: マウス左ドラッグ
  - 角度変更: マウス右ドラッグ
  - ズーム変更: マウス中ホイール回転 
  - 現在地表示: 地図右の「現在地」(![現在地ボタン](https://github.com/sntulix/noto_hanto_jishin_map3d/assets/616940/de98409f-7ec9-4111-a494-00b393c77e42)
)ボタンを押すと、今いるところに表示が移動します。
  - 地点の住所表示：地図左下の「地点住所を表示」(![地点住所を表示ボタン](https://github.com/sntulix/noto_hanto_jishin_map3d/assets/616940/f31684fb-2f40-4294-911a-4ae751232657)
)ボタンを押すと、今見ているところの住所と緯度経度が表示されます。
  - 住所から地点を表示：地図左下に住所を入れての「入れた住所を表示」(![入れた住所を表示ボタン](https://github.com/sntulix/noto_hanto_jishin_map3d/assets/616940/d770171b-f4ef-4264-b908-ecfacc88c441)
)ボタンを押すと、その住所のところに表示が移動します。
  - アイコン写真: 工事の絵(![作業実施箇所](https://github.com/sntulix/noto_hanto_jishin_map3d/assets/616940/700ba8fe-f8b7-43d3-9bde-d72a9fa29254)
)や道の駅の絵(![道の駅](https://github.com/sntulix/noto_hanto_jishin_map3d/assets/616940/cf8539e9-5e36-4c6d-a2e6-7bf3b801fc21)
)をクリックすると情報や写真などが見れます。
  - 到達地点マーク: 黄色い四角(![沿岸部への到達点](https://github.com/sntulix/noto_hanto_jishin_map3d/assets/616940/3fac615a-3ede-46fe-a7e5-c5874f3e0800)
)や緑色の星(![国復旧業者作業箇所](https://github.com/sntulix/noto_hanto_jishin_map3d/assets/616940/d5c0c09b-4ec5-4f02-872d-dee8aa8284aa)
)をクリックすると情報や写真などが見れます。
  - 点線: 区間ごとの所要時間です。クリックすると時間が見れます。

## 利用ライブラリ・データ、参考
  - MapLibre GL JS
    - [MapLibre GL JS](https://maplibre.org)
    - [maplibre-gl-gsi-terrain（3D地形表示）](https://github.com/mug-jp/maplibre-gl-gsi-terrain)
  - [渡邉英徳 wtnv「珠州・輪島東フォトグラメトリ・マップ」](https://x.com/hwtnv/status/1742437585316982928?s=20)
  - [国土地理院 令和6年(2024年)能登半島地震に関する情報](https://www.gsi.go.jp/BOUSAI/20240101_noto_earthquake.html)
  - [国土交通省「道路復旧見える化マップ」](https://www.mlit.go.jp/road/r6noto/index2.html)
  - [国土地理院APIでお手軽ジオコーディング＆逆ジオコーディング - 芽萌丸](https://memo.appri.me/programming/gsi-geocoding-api)
  - [「現場のプロがわかりやすく教える位置情報エンジニア養成講座」 井口奏大 著](https://www.shuwasystem.co.jp/book/9784798068923.html)
  - maptiler, OpenStreetMap（建物データ）
    - https://www.maptiler.jp/
    - https://www.openstreetmap.org/

## ノート
  - データについて
    - 2024年1月31日正午分までのデータを取り込んでいます。
  - GPS現在地ボタンについて
    - スマートフォンの場合はFacebookアプリで開いたままだと、GPS現在地ボタンが使えませんので、URLをコピーしてブラウザから開いてください。
  - 3D建物について
    - ~~下の地図が見えるようにするため、ズームで地面に近づくと見えなくしています。~~
    - ~~地形の3D表示をOnにしていると見えなくなる建物があります。~~
    - ~~建物は遠くにある時は浮いて見えることがあります。~~
    - 個人的な事情で表示を外しています。
