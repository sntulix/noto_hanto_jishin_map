#!/bin/sh

cd ../../

# clear road directory already existed.
if test -e road
then
	rm -rf road
fi

# download and unzip data.zip
#curl --fail -o data.zip https://www.mlit.go.jp/road/r6noto/data.zip
if test -e data.zip
then
  unzip -o data.zip
fi


# copy img directory to root from road directory.
cp -fpr road/r6noto/map/img ./


# download usage_guide
cd ..
curl -o usage_guide.png https://www.mlit.go.jp/road/r6noto/map/img/usage_guide.png
