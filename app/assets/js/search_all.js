$('.searchBarArrow').click(function () {
    document.getElementsByClassName('searchBar_Found')[0].innerHTML = "";
    $('.searchBar_Found').css('overflow-y', 'scroll');
    let search_text = $('#searchBarInput').val();
    // console.log(search_text);
    if (search_text !== '') {
        search_work(search_text);
        search_person(search_text);
    } else {
        alert('請輸入關鍵字');
    }
});

//查詢展品
function search_work(search_text) {
    $.ajax({
        method: "POST",
        url: "./assets/php/front/search_all_work.php",
        data: {
            'search_text': search_text,
        },
        dataType: "text",
        success: function (response) {
            //更新html內容
            // console.log(response);
            document.getElementsByClassName('searchBar_Found')[0].insertAdjacentHTML('beforeend', response);


            $('.collection_search_a').parents('li').click(function () {
                // console.log($(this));
                let work_id = $(this).children('a').attr('data-id');
                // console.log(work_id);
                let url = "moon.html?work_id=" + work_id;
                window.location.href = url;

            });


            $('.work_search_a').parents('li').click(function () {
                // console.log($(this));
                let work_id = $(this).children('a').attr('data-id');
                // console.log(work_id);
                let url = "exhibition.html?work_id=" + work_id;
                window.location.href = url;
            });








        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};

//查詢高級展間
function search_person(search_text) {
    $.ajax({
        method: "POST",
        url: "./assets/php/front/search_all_person.php",
        data: {
            'search_text': search_text,
        },
        dataType: "text",
        success: function (response) {
            //更新html內容
            // console.log(response);
            document.getElementsByClassName('searchBar_Found')[0].insertAdjacentHTML('afterbegin', response);

            $('.personalRoom').parents('li').click(function () {
                let member_id = $(this).children('.personal_search_a').attr('data-id');
                // console.log(member_id);
                let url = "member_pre.html?advance_id=" + member_id;
                window.location.href = url;
            });
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
};

//點擊高級展間

// $('.searchBar_Found').on('click', 'personal_search_a', function () {
//     let member_id = $(this).attr('data-id');
//     console.log(member_id);
// });


