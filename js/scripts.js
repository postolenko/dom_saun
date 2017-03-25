$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


    // ----------------

    var triangleShapeCount;
    var triangleShapeIndex;

    var widthTriangle;;

    // ------------------

    var descriptLeftCoor;
    var descriptIndex;

    // ------------------

    var mapHeight;
    var sendBoxHeight;

    // ------------------


    getTriangleSize(bodyWidth);

    getSendBoxPosition(bodyWidth);

    getSlideImgPosition(bodyWidth);


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

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

        // getDescriptPosition(descriptIndex);


    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({
            "padding-bottom" :  $(".footer").outerHeight(true) + "px",
            "padding-top" :  $(".header").outerHeight() + "px"
        });

    });


    // ------------------------------------------------------


    // $(function() {

    //     var descriptIndex = 0;

    //     $(".item-romb").each(function(){            

    //         $(".item-romb:eq("+ descriptIndex +") .descript").appendTo($(".services-descripts"));

    //         // $(".diamond-box:eq("+ descriptIndex +")").append("<div class='descript-coor'></div>");

    //         descriptIndex++;

    //     });

    //     getDescriptPosition(descriptIndex);

    // });


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

                console.log("dsdsd");

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



    function getDescriptPosition(descriptIndex) {

        var descriptLeftCoor;

        descriptIndex = 0;

        $(".item-romb").each(function(){            

            // $(".item-romb:eq("+ descriptIndex +") .descript").appendTo($(".services-descripts"));

            // $(".diamond-box:eq("+ descriptIndex +")").append("<div class='descript-coor'></div>");

            // console.log(descriptIndex);

            if( $(".diamond-box:eq("+ descriptIndex +") div").hasClass("descript-coor")) {                

                return true;

            } else {

                $(".diamond-box:eq("+ descriptIndex +")").append("<div class='descript-coor'></div>");

            }

            descriptLeftCoor = $(".descript-coor:eq("+ descriptIndex +")").offset().left;
            descriptTopCoor = $(".descript-coor:eq("+ descriptIndex +")").offset().top - $(".services-descripts .descript:eq("+ descriptIndex +")").height() + 4;

            // $(".services-descripts .descript:eq("+ descriptIndex +")").offset( { top:descriptTopCoor, left: descriptLeftCoor });

            // $(".services-descripts .descript:eq("+ descriptIndex +")").css({
            //                                                                 // "left" : descriptLeftCoor + "px"
            //                                                                 // "top" : descriptTopCoor + "px",
            //                                                                 // "margin-left" : -$(".services-descripts .descript:eq("+ descriptIndex +")").width() + "px"
            //                                                                 // "margin-top" : -$(".services-descripts .descript:eq("+ descriptIndex +")").width() + "px"
            //                                                             });

            // $(".services-descripts .descript:eq("+ descriptIndex +") p").css({"top" : -$(".services-descripts .descript:eq("+ descriptIndex +") p").outerHeight(true) + "px"});

            // console.log(descriptLeftCoor);

            // console.log(descriptIndex);

            descriptIndex++;

        });


    }


    // ------------------------------------------

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

            console.log("big-slider-slide   " + bodyWidth);

        } else {

            $(".slide-thumbnails .slide_photo").after($(".slide-thumbnails .col"));

            console.log("big-slider-slide after first col");

        }

    }


});





