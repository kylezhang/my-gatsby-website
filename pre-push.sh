#!/bin/bash  
  
# 检查是否处于git仓库中  
if [ ! -d ".git" ]; then  
    echo "错误：当前目录不是一个git仓库。"  
    exit 1  
fi  
  
# 确保没有未提交的更改  
if ! git diff-index --quiet HEAD --; then  
    echo "错误：在推送之前，您需要先提交本地的更改。"  
    exit 1  
fi  
  
# 切换到dev分支，拉取最新代码，提交并推送本地更改到dev分支  
git checkout dev  
git pull origin dev  
git add .  
git commit -m "Pushing local source changes to dev branch"  
git push origin dev  
  
# 切换到master分支，拉取最新代码  
git checkout master  
git pull origin master  
  
# 清理public文件夹（如果存在）  
if [ -d "public" ]; then  
    rm -rf public  
fi  
  
# 执行gatsby build命令来编译源文件到public文件夹  
gatsby build  
  
# 检查gatsby build是否成功，如果失败则退出脚本  
if [ $? -ne 0 ]; then  
    echo "错误：gatsby build命令执行失败。"  
    exit 1  
fi  
  
# 将编译后的public文件夹内容添加到Git  
git add public  
git commit -m "Pushing compiled public folder content to master branch"  
  
# 将public文件夹的更改推送到master分支  
git push origin master  
  
echo "推送完成。"