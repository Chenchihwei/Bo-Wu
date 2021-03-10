let exhibition_content = document.getElementsByClassName('exhibition_content')[0];


function exhibition_content_open() {
    let not_none = exhibition_content.classList.contains("none");
    if (not_none) {
        exhibition_content.classList.remove("none");
        $('.exhibition_cover').removeClass('none');
    } else { }
};

function exhibition_content_close() {
    exhibition_content.classList.add("none");
    $('.exhibition_cover').addClass('none');
};

document.addEventListener("click", function (e) {
    if (e.target.closest(".fa-times-circle")) {
        exhibition_content_close(e);
    } else if (e.target.closest('.exb_pic')) {
        exhibition_content_open(e);
    }
});