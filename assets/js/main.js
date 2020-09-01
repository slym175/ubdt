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
        autoHeight: true,
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

    $('select.juridical-form-control#tinh').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Tỉnh/Thành phố",
    });

    $('select.juridical-form-control#nam').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Năm xuất bản",
    });

    $('select.juridical-form-control#dientich').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Diện tích",
    });

    $('select.juridical-form-control#loaibieudo').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Loại biểu đồ",
    });

    $('.catalog-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        responsive:{
            0: {
                items:1
            },
            500: {
                items:2
            },
            768: {
                items: 3
            }
        }
    })

    $('.statistical-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        responsive:{
            0: {
                items:1
            },
            500: {
                items:2
            },
            768: {
                items: 3
            }
        }
    })
});