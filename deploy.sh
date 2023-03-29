# !/usr/bin/env sh.
set e

before="\033[32m"
rear="\033[0m"
address="origin"

sleep 1s

echo -e "$before ▶ 开始打包项目请稍后... $rear"

# 打包
npm run build

echo -e "$before ▶ 项目打包完成... $rear"

sleep 1s

# 开始上传

# exit the program
exit
