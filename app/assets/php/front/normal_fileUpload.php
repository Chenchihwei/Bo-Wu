<?php

header('Access-Control-Allow-Origin: *');

//上傳成功或失敗
if ($_FILES['file']['error'] == 0) {
    // 要是沒有資料夾"image"的話我要創建資料夾
    if (!is_dir('image')) {
        mkdir('image');
    }

    // 會員編號(我先寫死)
    $member_id = 1;

    // 時間
    $date = date('Ymdhis');

    // 抓一下原本檔案是png還jpg
    $extension = pathinfo(explode(",", $_FILES['file']['name'])[0], PATHINFO_EXTENSION);

    // 前面這些組成最後我要存下來的檔名
    $filename = $member_id . "_" . $date . '.' . $extension;

    // 檢查檔案是否已經存在
    if (file_exists('image/' . $filename)) {
        echo '檔案已存在';
    } else {

        // 原本的檔案
        $file = $_FILES['file']["tmp_name"];
        
        //我組成的檔案路徑與檔案名稱
        $dest = 'image/' . $filename;

        // 將檔案移至指定位置
        move_uploaded_file($file, $dest);
        
        //看一下這個就是我現在檔案的路徑
				$img_path = './assets/php/front/image/'. $filename;
        echo  $img_path;
    }
} else {
    echo '錯誤代碼：' . $_FILES['file']['error'] . '<br/>';
}
