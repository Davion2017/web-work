$('#register-btn').click(() => {
    let username = $('#username');
    let password = $('#password');
    let repassword = $('#repassword');
    let phone = $('#phone');
    let email = $('#email');
    let question = $('#question');
    let answer = $('#answer');
    let msg_box = $('#msg-box');
    let msg = $('#msg');
    msg_box.show().addClass('alert-danger')
    if (username.val().trim() === '') {
        msg.text('用户名不能为空')
        username.focus()
        return;
    }
    if (password.val().length < 8) {
        msg.text('密码长度不能小于8位')
        password.focus()
        return;
    }
    if (password.val() !== repassword.val()) {
        msg.text('两次密码输入不一致')
        password.focus()
        return;
    }
    const reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/)
    if (!reg.test(password.val())) {
        msg.text('密码需包含字母和数字')
        password.focus()
        return;
    }
    if (phone.val().length === 0) {
        msg.text('手机号不能为空')
        phone.focus()
        return;
    }
    const phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/
    if (!phoneReg.test(phone.val())) {
        msg.text('手机号格式不正确')
        phone.focus()
        return;
    }
    if (email.val().trim() === '') {
        msg.text('邮箱不能为空')
        email.focus()
        return;
    }
    const emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (!emailReg.test(email.val())) {
        msg.text('邮箱格式不正确')
        email.focus()
        return;
    }
    if (question.val().trim() === '') {
        msg.text('问题不能为空')
        question.focus()
        return;
    }
    if (answer.val().trim() === '') {
        msg.text('答案不能为空')
        answer.focus()
        return;
    }
    $.ajax({
        url: base_url + '/user/register.do',
        method: 'POST',
        data: {
            username: username.val(),
            password: password.val(),
            phone: phone.val(),
            email: email.val(),
            question: question.val(),
            answer: answer.val()
        },
        success: res => {
            if (res.status !== 0) {
                $('#msg').text(res.msg)
            } else {
                $('#msg-box').removeClass('alert-danger').addClass('alert-success')
                $('#msg').text('注册成功')
            }
            username.val('')
            password.val('')
            repassword.val('')
            phone.val('')
            email.val('')
            question.val('')
            answer.val('')
        }
    })
})