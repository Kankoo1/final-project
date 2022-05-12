const swiper = new Swiper('.swiper', { autoplay: {
    delay: 3000,
    disableOnInteraction: false,
}, loop: true,

pagination: {
el: '.swiper-pagination',
clickable: true,
},

navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});
function clicked() {
    var response = prompt('E.Signature', "Full Name");
    if (confirm("Press Confirm!")) {
        response = alert(`Success Message! Dear ${response}, Your form is successsfully submitted at  ${Date()}. Please, Expect feedback within the coming three business days!`)
    } else {
        response = alert(`Dear ${response} We are sorry that your submission is not Successfull!`);
    }
    }