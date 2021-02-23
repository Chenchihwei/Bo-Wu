let exhibition_content = document.getElementsByClassName('exhibition_content')[0];


function exhibition_content_open() {
    let not_none = exhibition_content.classList.contains("none");
    if (not_none) {
        exhibition_content.classList.remove("none");
        $('.main').addClass('gray');
        $('header').addClass('gray');
    } else { }
};

function exhibition_content_close() {
    exhibition_content.classList.add("none");
    $('.main').removeClass('gray');
    $('header').removeClass('gray');
};

document.addEventListener("click", function (e) {
    if (e.target.closest(".fa-times-circle")) {
        exhibition_content_close(e);
    } else if (e.target.closest('.pic1')) {
        exhibition_content_open(e);
    }
});