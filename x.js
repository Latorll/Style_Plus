let mySwiper6 = new Swiper ('#swiper06', {
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    })
    const menu = document.querySelectorAll(".js-menu");

      function toggle() {
        const content = this.nextElementSibling;
        this.classList.toggle("is-active");
        content.classList.toggle("is-open");
      }

      for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener("click", toggle);
      }

    $(function(){
        var fadeIn = $('.fadein');
        $(window).on('scroll', function () {
        $(fadeIn).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 150) {
            $(this).addClass("scroll-in");
            }
        });
    });
    });
    const updateButton = () => {
        if ($(window).scrollTop() >= 300) {
          // 300px以上スクロールされた
          // ボタンを表示
        $('.back-to-top').fadeIn();
        } else {
          // ボタンを非表示
        $('.back-to-top').fadeOut();
        }
    };
      // スクロールされる度にupdateButtonを実行
        $(window).on('scroll', updateButton);
      // ボタンをクリックしたらページトップにスクロールする
        $('.back-to-top').on('click', (e) => {
        // ボタンのhrefに遷移しない
        e.preventDefault();
        // 600ミリ秒かけてトップに戻る
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
      // ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする
    updateButton();