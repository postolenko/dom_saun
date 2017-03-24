$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


    // ----------------

    var triangleShapeCount;
    var triangleShapeIndex;

    var widthTriangle;;

    // ----------------


    getTriangleSize();

    getSendBoxPosition();


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ----------------------------------------------------------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // ----------------------------------------------------------------------------

        getTriangleSize(bodyWidth);

        getSendBoxPosition();

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

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

                // $(".sect-shape:eq("+ triangleShapeIndex +").shape-bottom-tr .left_tr").css({
                //     "border-left-width": widthTriangle + "px"
                // });

                // $(".sect-shape:eq("+ triangleShapeIndex +").shape-bottom-tr .right_tr").css({
                //     "border-right-width": widthTriangle + "px"
                // });

                console.log(triangleShapeIndex);

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


    function getSendBoxPosition() {

        var mapHeight = $(".map-box").height();
        var sendBoxHeight = $(".send-box").outerHeight(true);

        $(".send-box").css({
            "top" : ( mapHeight - sendBoxHeight ) / 2 + "px"
        });

    }


});





