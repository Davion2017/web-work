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