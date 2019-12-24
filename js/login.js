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
})