$(document).ready(function() {
    $("#log").click(() => {
        location.assign('login');
    })
    $("#log-admin").click(() => {
        location.assign('login-admin');
    })
    $("#reg").click(() => {
        location.assign('register');
    })
    $('#baoloi').click(() => {
        Swal.fire({
            title: 'Xin chào!',
            text: 'Bạn đang tìm cách để báo lỗi website. Bấm OK để liên lạc với tôi qua Facebook!',
            showCancelButton: true,
            confirmButtonText: 'OK',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                window.open('https://www.facebook.com/dangcap2004');
            },
            allowOutsideClick: true
        })
    })
})