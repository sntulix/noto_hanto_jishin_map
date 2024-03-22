#!/bin/sh

yymmdd=`date +%y%m%d`
#yymmdd=240318

cd ../../data

# daily 差分
sabun_basename=${yymmdd}data
zip_filename=${sabun_basename}.zip
echo https://www.mlit.go.jp/road/r6noto/${zip_filename}
curl --fail -o ${zip_filename} https://www.mlit.go.jp/road/r6noto/${zip_filename}

if [ $? -eq 22 ]
then
	exit
fi

if test -e ${zip_filename}
then
	unzip -o ${zip_filename} -d ${sabun_basename}
	cp -fpr ${sabun_basename}/img/* ../img/
	cp -r ${sabun_basename}/json/* ../road/r6noto/map/json/
	rm -rf ${sabun_basename}
fi

cd ..
curl -o usage_guide.png https://www.mlit.go.jp/road/r6noto/map/img/usage_guide.png
