<?php
//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();
echo '<tr class="table-dark">
        <th></th>
        <th><p class="th_p">素材編號</p></th>
        <th>素材圖片</th>
        <th><p class="th_p">素材名稱</p></th>
        <th><p class="th_p">種類</p></th>
        <th><p class="th_p">上架狀態</p></th>
        <th></th>
    </tr>';

foreach($data as $index => $row){
    echo '<tr class="table-light"><td><input type="checkbox" class="work_checkbox"></td>';
    echo '<td><p class="work_id">'.$row["postcard_id"].'</p></td>';
    echo '<td><img src="'.$row["postcard_img_path"].'" alt=""></td>';
    echo '<td><p class="edit_p">'.$row["postcard_name"].'</p><input type="text" style="width:5vw;" class="edit_text none"></td>';    
    
    $postcard_category = $row["postcard_category"];
    switch ($postcard_category) {
        case "1":
            $postcard_category = '背景';
            break;
        case "2":
            $postcard_category = '圖樣';
            break;
        default:
            $postcard_category = '錯誤';
            break;
    };
    echo '<td><p class="select_p">'.$postcard_category.'</p><select class="edit_select none"><option value="1">背景</option><option value="2">圖樣</option></select></td>';    
    
    $exhibition = $row["postcard_exhibition"];
    switch ($exhibition) {
        case "1":
            $exhibition = '上架中';
            break;
        case "2":
            $exhibition = '下架中';
            break;
        default:
            $exhibition = '錯誤';
            break;
    };
    echo '<td><p class="exhibition_status">'.$exhibition.'</p></td>';
    echo "<td width='40'><a href='###' class='edit'>編輯</a><a href='###' class='save none'>儲存</a></td></tr>";
}
?>