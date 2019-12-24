$('#login-btn').click(() => {
    let username = $('#username').val().trim()
    let password = $('#password').val()
    $('#msg-box').show().addClass('alert-danger')
    if (username === '' || username.length === 0) {
        $('#msg').text('用户名不允许为空')
        $('#username').focus()
        return;
    }
    if (password === '' || password.length === 0) {
        $('#msg').text('密码不允许为空')
        $('#password').focus()
        return;
    }
    $.ajax({
        url: base_url + '/user/login.do',
        method: 'POST',
        data: {
            username: username,
            password: password
        },
        success: res => {
            if (res.status !== 0) {
                $('#msg').text(res.msg)
            } else {
                $('#msg-box').removeClass('alert-danger').addClass('alert-success')
                $('#msg').text('欢迎登录: ' + res.data.username)
            }
        }
    })
})