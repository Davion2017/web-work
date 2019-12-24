const base_url = 'http://122.51.230.94:8888'

let new_scroll_position = 0
let last_scroll_position
let header = $('header')
$(window).scroll(function (e) {
    last_scroll_position = window.scrollY
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        header.addClass('sliderUp')
        header.removeClass('sliderDown')
    } else if (new_scroll_position > last_scroll_position) {
        header.removeClass('sliderUp')
        header.addClass('sliderDown')
    }
})

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