$('#commit-btn').click(() => {
    let nick_name = $('#nick-name');
    let email = $('#email');
    let new_message = $('#new-message');
    if (nick_name.val().trim().length === 0) {
        alert('请输入昵称！！！')
        return;
    }
    if (email.val().length === 0) {
        alert('请输入邮箱！！！')
        return;
    }
    if (new_message.val().length === 0) {
        alert('留言内容！！！')
        return;
    }
    let html =
        `<div class="media border-bottom mb-3">
                <img class="mr-3 img-thumbnail" width="60" src="./img/schnuffel.jpg" alt="Generic placeholder image">
                <div class="media-body">
                    <h5 class="mt-0">` + nick_name.val().trim() + `</h5>
                    <p>`+ new_message.val() +`</p>
                </div>
            </div>`
    $('.comments').prepend(html)
    nick_name.val('')
    email.val('')
    new_message.val('')
})