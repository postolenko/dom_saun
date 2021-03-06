$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


    // ----------------

    var triangleShapeCount;
    var triangleShapeIndex;

    var widthTriangle;

    // ------------------

    var descriptLeftCoor;
    var descriptIndex;

    // ------------------

    var topCoorRomb;

    // ------------------

    var mapHeight;
    var sendBoxHeight;

    // ------------------


    getTriangleSize(bodyWidth);

    getSendBoxPosition(bodyWidth);

    getSlideImgPosition(bodyWidth);

    getRombParameters();

    getDescriptPosition(descriptIndex);


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({
            "padding-bottom" :  $(".footer").outerHeight(true) + "px",
            "padding-top" :  $(".header").outerHeight() + "px"
        });

        // ----------------------------------------------------------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // ----------------------------------------------------------------------------

        $(".resp-nav").css({
            "top" : $(".header").outerHeight() + "px",
            "height" : $(window).height() - $(".header").outerHeight() + "px"
        });

        // ----------------------------------------------------------------------------

        getTriangleSize(bodyWidth);

        getSendBoxPosition(bodyWidth);

        getSlideImgPosition(bodyWidth);

        getDescriptPosition(descriptIndex);

        getRombParameters();


    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({
            "padding-bottom" :  $(".footer").outerHeight(true) + "px",
            "padding-top" :  $(".header").outerHeight() + "px"
        });

    });


    // ------------------------------------------------------

    $(function() {

        $(".resp-nav").css({
            "top" : $(".header").outerHeight() + "px",
            "height" : $(window).height() - $(".header").outerHeight() + "px"
        });

    });

    // ------------------------------------------------------

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".resp-nav").is(":visible") ) {

                $(this).removeClass("active");

                $(".resp-nav").fadeOut(300);

            } else if( $(".resp-nav").is(":hidden") ){

                $(this).addClass("active");

                $(".resp-nav").fadeIn(300);

            }

        });

    });

    // ------------------------------------------------------

    $(".scroll-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });

    // ------------------------------------------------------

    // Navigation scroll

        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {

                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 900);                        

                        return false;
                    }
                }
            });
        });

    // ----------------------------------------------------------------


        function getTriangleSize() {

            triangleShapeCount = $(".sect-shape").length - 1;

            triangleShapeIndex = 0;

            if( bodyWidth <= parseInt( $(".row").css("min-width") ) ) {

                bodyWidth = parseInt( $(".row").css("min-width") );

            }

            widthTriangle = bodyWidth / 2;

            for( triangleShapeIndex = 0; triangleShapeIndex <= triangleShapeCount; triangleShapeIndex++ ) {


                if( $(".sect-shape:eq("+ triangleShapeIndex +")").hasClass("shape-bottom-tr") ) {

                    $(".sect-shape:eq("+ triangleShapeIndex +").shape-bottom-tr .bottom-tr").css({
                        "border-right-width": widthTriangle + "px",
                        "border-left-width": widthTriangle + "px"
                    });

                } else {

                    $(".sect-shape:eq("+ triangleShapeIndex +") .left_tr").css({
                        "border-right-width": widthTriangle + "px"
                    });

                    $(".sect-shape:eq("+ triangleShapeIndex +") .right_tr").css({
                        "border-left-width": widthTriangle + "px"
                    });

                }

            }

        }

    // ----------------------------------------


    function getDescriptPosition(descriptIndex) {

        descriptLeftCoor;

        descriptIndex = 0;

        $(".item-romb").each(function(){ 

            descriptLeftCoor = $(".coor:eq("+ descriptIndex +")").offset().left;

            if( $(".item-romb:eq("+ descriptIndex +") .descript").hasClass("bottom-position") ) {

                descriptTopCoor = $(".coor:eq("+ descriptIndex +")").offset().top;

            } else {   

                descriptTopCoor = $(".coor:eq("+ descriptIndex +")").offset().top - $(".item-romb:eq("+ descriptIndex +") .descript").height();

            }

            $(".item-romb:eq("+ descriptIndex +") .descript").offset({left: descriptLeftCoor, top: descriptTopCoor});

            descriptIndex++;

        });

    }

    // -----------------------------------------

    function getRombParameters() {

        $(".item-romb").css({

            "height" : $(".item-romb").width() + "px"

        });

        if( bodyWidth > 600 ) {

            $(".item-romb:odd").css({

                "top" : $(".item-romb").width() / 2 - ( $(".item-romb").width() * .06 ) + "px"

            });

            $(".item-romb:even").css({

                "top" : 0

            });

        } else {

            descriptIndex = 0;

            $(".item-romb").each(function(){

                descriptIndex++;

                topCoorRomb = ( $(".item-romb").width() - ( $(".item-romb").width() * .2 ) ) * descriptIndex;

                $(".item-romb:eq("+ descriptIndex +")").css({

                    "top" : topCoorRomb + "px"

                });

            });

        }

    }


    // -----------------------------------------

    function getSendBoxPosition(bodyWidth) {        

        if( bodyWidth > 600 ) {

            mapHeight = $(".map-box").height();
            sendBoxHeight = $(".send-box").outerHeight(true);         

            $(".send-box").css({
                "top" : ( mapHeight - sendBoxHeight ) / 2 + "px"
            });

        }

    }

    // ------------------------------------------

    function getSlideImgPosition(bodyWidth) {

        if( bodyWidth <= 600 ) {

            $(".slide-thumbnails .slide_photo").prependTo($(".slide-thumbnails"));

        } else {

            $(".slide-thumbnails .slide_photo").after($(".slide-thumbnails .col"));

        }

    }


});





