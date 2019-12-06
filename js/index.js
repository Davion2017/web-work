// tab切换
$('#latest-articles').hover(() => {
    $('#latest-articles').addClass('span-active')
    $('#click-rank').removeClass('span-active')
    $('#latest-articles-tab').show()
    $('#click-rank-tab').hide()
})

$('#click-rank').hover(() => {
    $('#click-rank').addClass('span-active')
    $('#latest-articles').removeClass('span-active')
    $('#click-rank-tab').show()
    $('#latest-articles-tab').hide()
})

// let rightBox = $('main .right')
// const maxTop = rightBox.offset().top + 60
// $(window).scroll((e) => {
//     if ($(window).scrollTop() >= maxTop) {
//         rightBox.css()
//     } else {
//
//     }
// })