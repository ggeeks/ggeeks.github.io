(function (window, document, $, undefined) {
    'use strict';

    var doobJs = {
        i: function (e) {
            doobJs.d();
            doobJs.methods();
        },

        d: function (e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')

        },

        methods: function (e) {
            doobJs.smothScroll();
            doobJs.backToTopInit();
            doobJs.backToTopInit();
            doobJs.counterUpActivation();
            doobJs.wowActivation();
            doobJs.headerTopActivation();
            doobJs.headerSticky();
            doobJs.salActive();
            doobJs.popupMobileMenu();
            doobJs.masonryActivation();
            doobJs.magnigyPopup();
            doobJs.lightBoxJs();
            doobJs.slickSliderActivation();
            doobJs.radialProgress();
            doobJs.contactForm();
            doobJs.menuCurrentLink();
        },

        menuCurrentLink: function () {
            var currentPage = location.pathname.split("/"),
            current = currentPage[currentPage.length-1];
            $('.mainmenu li a').each(function(){
                var $this = $(this);
                if($this.attr('href') === current){
                    $this.addClass('active');
                    $this.parents('.has-menu-child-item').addClass('menu-item-open')
                }
            });
        },

        smothScroll: function () {
            $(document).on('click', '.smoth-animation', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 50
                }, 300);
            });
        },


        lightBoxJs: function () {
            lightGallery(document.getElementById('animated-lightbox'), {
                thumbnail: true,
                animateThumb: false,
                showThumbByDefault: false,
                cssEasing: 'linear'
            });

            lightGallery(document.getElementById('animated-lightbox2'), {
                thumbnail: true,
                animateThumb: false,
                showThumbByDefault: false,
                cssEasing: 'linear'
            });

            lightGallery(document.getElementById('animated-lightbox3'), {
                thumbnail: true,
                animateThumb: false,
                showThumbByDefault: false,
                cssEasing: 'linear'
            });
        },

        magnigyPopup: function () {
            $(document).on('ready', function () {
                $('.popup-video').magnificPopup({
                    type: 'iframe'
                });
            });
        },


        masonryActivation: function name(params) {
            $(window).load(function () {
                $('.masonary-wrapper-activation').imagesLoaded(function () {
                    // filter items on button click
                    $('.messonry-button').on('click', 'button', function () {
                        var filterValue = $(this).attr('data-filter');
                        $(this).siblings('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                        $grid.isotope({
                            filter: filterValue
                        });
                    });

                    // init Isotope
                    var $grid = $('.mesonry-list').isotope({
                        percentPosition: true,
                        transitionDuration: '0.7s',
                        layoutMode: 'masonry',
                        masonry: {
                            columnWidth: '.resizer',
                        }
                    });
                });
            })
        },


        popupMobileMenu: function (e) {

            $('.hamberger-button').on('click', function (e) {
                $('.popup-mobile-menu').addClass('active');
            });

            $('.close-menu').on('click', function (e) {
                $('.popup-mobile-menu').removeClass('active');
                $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .rn-megamenu').removeClass('active').slideUp('400');
                $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open')
            });

            $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu, .rn-megamenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open')
            })

            $('.popup-mobile-menu').on('click', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('active') && $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .rn-megamenu').removeClass('active').slideUp('400') && $('.popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open');
            });

        },

        slickSliderActivation: function () {
            $('.testimonial-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });
            $('.slider-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });

        },

        salActive: function () {
            sal({
                threshold: 1,
                once: true,
            });
        },

        backToTopInit: function () {
            var scrollTop = $('.rn-back-top');
            $(window).scroll(function () {
                var topPos = $(this).scrollTop();
                if (topPos > 150) {
                    $(scrollTop).css('opacity', '1');
                } else {
                    $(scrollTop).css('opacity', '0');
                }
            });
            $(scrollTop).on('click', function () {
                $('html, body').animate({
                    scrollTop: 0,
                    easingType: 'linear',
                }, 10);
                return false;
            });
        },

        headerSticky: function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.header-sticky').addClass('sticky')
                } else {
                    $('.header-sticky').removeClass('sticky')
                }
            })
        },

        counterUpActivation: function () {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        },

        wowActivation: function () {
            new WOW().init();
        },

        headerTopActivation: function () {
            $('.bgsection-activation').on('click', function () {
                $('.header-top-news').addClass('deactive')
            })
        },

        radialProgress: function () {
            $('.radial-progress').waypoint(function () {
                $('.radial-progress').easyPieChart({
                    lineWidth: 10,
                    scaleLength: 0,
                    rotate: 0,
                    trackColor: false,
                    lineCap: 'round',
                    size: 220
                });
            }, {
                triggerOnce: true,
                offset: 'bottom-in-view'
            });
        },


        contactForm: function () {
            $('.rwt-dynamic-form').on('submit', function (e) {
				e.preventDefault();
				var _self = $(this);
				var __selector = _self.closest('input,textarea');
				_self.closest('div').find('input,textarea').removeAttr('style');
				_self.find('.error-msg').remove();
				_self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
				var data = $(this).serialize();
				$.ajax({
					url: 'mail.php',
					type: "post",
					dataType: 'json',
					data: data,
					success: function (data) {
						_self.closest('div').find('button[type="submit"]').removeAttr('disabled');
						if (data.code == false) {
							_self.closest('div').find('[name="' + data.field + '"]');
							_self.find('.rn-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
						} else {
							$('.error-msg').hide();
							$('.form-group').removeClass('focused');
							_self.find('.rn-btn').after('<div class="success-msg"><p>' + data.success + '</p></div>');
							_self.closest('div').find('input,textarea').val('');

							setTimeout(function () {
								$('.success-msg').fadeOut('slow');
							}, 5000);
						}
					}
				});
			});
        },

    }
    doobJs.i();

    document.getElementById("year").innerHTML = (new Date()).getFullYear()
    // You can check changing year by changing year in your device settings and wait for some time 
    let y =  (new Date()).getFullYear()
    console.log(y)

})(window, document, jQuery)