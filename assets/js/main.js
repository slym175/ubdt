$(document).ready(function () {
    $('.id-menu-icon').click(function (e) {
        e.preventDefault();
        $('.menu').toggleClass('menu-opened');
    });

    $('.home-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        items: 1,
        responsive:{
            
        }
    })

    $('select.juridical-form-control#sokyhieu').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Số/Ký hiệu",
    });

    $('select.juridical-form-control#ngaybanhanh').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Ngày ban hành",
    });

    $('.catalog-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            }
        }
    })
});