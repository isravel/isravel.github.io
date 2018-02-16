//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(document).ready(function() {

    /**
     * This object controls the nav bar. Implement the add and remove
     * action over the elements of the nav bar that we want to change.
     *
     * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
     */
    var myNavBar = {

        flagAdd: true,

        elements: [],

        init: function(elements) {
            this.elements = elements;
        },

        add: function() {
            if (this.flagAdd) {
                for (var i = 0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },

        remove: function() {
            for (var i = 0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
            }
            this.flagAdd = true;
        }

    };

    /**
     * Init the object. Pass the object the array of elements
     * that we want to change when the scroll goes down
     */
    myNavBar.init([
        "header",
        "header-container",
        "brand"
    ]);

    /**
     * Function that manage the direction
     * of the scroll
     */
    function offSetManager() {

        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        if (yOffset < currYOffSet) {
            myNavBar.add();
            $('#logo-img').attr('src', 'img/logo.png');
        } else if (currYOffSet == yOffset) {
            myNavBar.remove();
            $('#logo-img').attr('src', 'img/logo-white.png');
        }

    }

    /**
     * bind to the document scroll detection
     */
    window.onscroll = function(e) {
        offSetManager();
    }

    /**
     * We have to do a first detectation of offset because the page
     * could be load with scroll down set.
     */
    offSetManager();
});


$(document).ready(function() {
    var owl = $('.owl-carousel1');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false
    });
    $('.arrow.left').click(function() {
        owl.prev();
    });

    $('.arrow.right').click(function() {
        owl.next();
    });
});
jQuery(function($) {

    $(window).load(function() {

        $('section .cut').each(function() {
            if ($(this).hasClass('cut-top'))
                $(this).css('border-right-width', $(this).parent().width() + "px");
            else if ($(this).hasClass('cut-bottom'))
                $(this).css('border-left-width', $(this).parent().width() + "px");
        });
    });
    var owl = $('.owl-carousel2');

    owl.owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        navText: ["&#xf3d2;", "&#xf3d3;"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    });
    $('.image-wrapper').hover(
        function() {
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function() {
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );
    $(".toggle").click(function() {
         $(".show-div").toggleClass( "inbl" );
    });
});

// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Isotope
