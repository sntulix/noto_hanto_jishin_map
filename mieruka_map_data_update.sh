#!/bin/sh
#
# for sakura server
#

yymmdd=`date +%y%m%d`

cd /home/futuregadget/www/file/noto_hanto_jishin_map3d

if ! test -d data
then
	mkdir data
fi
cd data

# data.zip
# curl --fail -o data.zip https://www.mlit.go.jp/road/r6noto/data.zip
#
# if [ $? -eq 22 ]
# then
# 	rm data.zip
# 	exit
# fi
#
# if test -e data.zip
# then
# 	rm -rf road
# 	cp -fpr road/r6noto/map/img ../
# fi

# daily 差分
sabun_basename=${yymmdd}data
zip_filename=${sabun_basename}.zip
curl --fail -o ${zip_filename} https://www.mlit.go.jp/road/r6noto/${zip_filename}

if [ $? -eq 22 ]
then
	exit
fi

if test -e ${zip_filename}
then
	unzip -o ${zip_filename} -d ${sabun_basename}
	cp -fpr ${sabun_basename}/img/* ../img/
	cp -f ${sabun_basename}/json/* ../road/r6noto/map/json/
	rm -rf ${sabun_basename}
fi

cd ..
curl -o usage_guide.png https://www.mlit.go.jp/road/r6noto/map/img/usage_guide.png
