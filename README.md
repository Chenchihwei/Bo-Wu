# Bo-Wu
Tibame-work

## Username
| 名字 | username |
| ----- | --------------- |
| 智威: | chenchihwei |
| 育寧: | b8211142002 |
| 松輝: | yuria1215 |
| 上瑞: | joshtinhan |
| 力揚: | weiyi-li00 |
| 惠真: | j23063519 |

## 共同規定
* 大家只需要上傳就好，整合交給我

| 1.因為上傳空資料夾，在github不會顯示，所以我先放上一個test.html在各位裡面你們之後一定要刪除

| 2.大家檔案名稱不要一樣

| 3.我在img、js、mysql、php、scss都放了各位的以學號命名的資料夾，之後各位就在自己的資料夾做更動

| 4.class、id名稱以駝峰式命名

| 5.git只放程式和圖片影片等相關檔案，不放文件EX:.pdf、.ppt等等

| 6.php放在lovefood底下的資料夾就好

| 7.scss目前按照老師的樣子規劃

| 8.現在大家只能自己用自己的分支然後，git checkout dev至dev分支裡面，在用git merge 自己分支名稱，最後用dev這個分支push上去，所以自己本身的分支不能push上去喔，github只能有master及dev這兩個分支

## Git上傳步驟
1. git add .:把所有資料傳去站存區 小貼心:新增、修改、刪除都可以用
2. git commit --m "提示":把資料傳去本地端 注意:提式一定要輸入
3. git push:把資料傳去雲端"GITHUB"

## Git把雲端上的資料同步到電腦上
1. git pull:下載遠端資料並合併 

* 小貼心:這可以應用在當你不小心把你桌機的東西刪掉時，而雲端還有備份可以下載回來

## Git複製遠端數據庫
1. git clone https://... :複製遠端數據庫 

* 小貼心:這是共同使用某個雲端資料庫時使用，把雲端數據庫下載至本地端
* 注意:這個要用之前請跟大家說一下，這個只有第一次需要使用之後用不到，因為怕你們叫下來改的東西是main的分支

## Git command

|  git 命令  |  說明  |
| ------ | ------ |
|  git pull | 拉下檔案至本地 |
| git push | 推上檔案至遠端 |
| git add \<file> | 推至暫存區 |git 
| git add . | 全部推至暫存區 |
| git commit --m "內容" | 推進本地端 |
| git checkout \<branch> | 切換分支 |
| git merge \<branch> | 合併分支 |
| git status | 顯示修改檔案清單 |
| git log | 顯示提交記錄 |
| git clone \<url>| 複製整份至本地端 |
| q| 離開|


更多教學 => <https://backlog.com/git-tutorial/tw/>


## Shell command

|   Linux 命令  |  Windows 命令  | 說明 |
| ------ | ------ | ------- |
|  pwd | cd | 顯示當前目錄 |
|  ls -al | dir |  顯示目前目錄下的檔案與子目錄列表 |
|  mkdir \<file> | md \<file> | 建立子目錄 \<file> |
|  rm -r \<file> | rd \<file> | 刪除子目錄 \<file> |
|  cd \<file> | cd \<file> | 切換至子目錄 \<file> |
|  cd .. | cd .. | 切換至上一層目錄 |
|  cat file/more | type file | 顯示檔案內容 |
|  clear | cls | 清除螢幕 |


## npm i 會遇到bootstrap的glyphicons路徑問題

1. 去node_modules/bootstrap-sass/assets/stylesheets/bootstrap_variables.scss 
將原本的這一行修改為
$icon-font-path: if($bootstrap-sass-asset-helper, "bootstrap/", "../../node_modules/bootstrap-sass/assets/fonts/bootstrap/") !default;
