#!/usr/bin/env sh
# mac 使用本地 apache 运行程序

# 确保脚本抛出遇到的错误
set -e

# 打包
echo "开始打包"

npm run build

echo "打包完成"

# 移动到本地 apache  /Library/WebServer/Documents

echo "开始移动"

sudo cp -R ~/Study/novel/dist/ /Library/WebServer/Documents/dist/

echo "移动成功"

cd -

