define(["jquery"], function(){
    var slide = function(){
        $(function(){
                var inow = 0;
                var timer = null;
                var timer2 = null;
                function tab(){
                    $("#slide").css("width", `${$("#slide li").size() * 770}px`);
                    $(".dot a").attr("class", "");
                    $(".dot").find("a").eq(inow).attr("class", "active");
                    if(inow == $("#slide .dev").size() - 1){
                        $(".dot").find("a").eq(0).attr("class", "active");
                    }

                    $("#slide").stop().animate({
                        left: -770 * inow
                    }, 500,function(){
                        if(inow == $("#slide .dev").size() - 1){
                            // $(".dot").find("a").eq(0).attr("class", "active");
                            inow = 0;
                            $("#slide").css("left", 0);

                        }
                    })
                }
                $(".dot").find("a").eq(inow).attr("class", "active");

                function timerInner(){
                        // clearInterval(timer);
                        inow++;
                        document.title = inow;
                        tab();
                }
                clearInterval(timer);
                timer = setInterval(timerInner,2500);
                $(".dot").on("mouseenter", "a", function(e){

                    $(".dot a").attr("class", "");
                    $(this).attr("class", "active");
                    inow = $(this).index();
                    // alert(inow);
                    clearInterval(timer);
                    $("#slide").stop().animate({
                        left : -770 * inow
                    }, 500)


                    // e.preventDefault();
                })
                // $(".dot").on("mouseleave", "a", function(e){
                //     timer = setInterval(timerInner, 2500)

                //     // e.preventDefault();
                // })

                $(".banner-slide").mouseleave(function(){
                    timer = setInterval(timerInner, 2500);
                    return false;
                })
                $(".banner-slide").mouseenter(function(){
                    clearInterval(timer);
                    return false;
                })
                // $(".dot").on("mouseleave", "a", function(e){
                //     // clearInterval(timer);
                //     // setInterval(timerInner, 2500);
                //     // e.preventDefault();
                // })
                // $("#slide").hover(function(){
                //     clearInterval(timer);
                //     alert(1);
                // },function(){
                //     // alert(inow);
                //     clearInterval(timer);
                //     setInterval(timerInner, 2500);
                //     alert(2);

                // })
                // $(".dot").find("a").hover(function(){
                //     clearInterval(timer);
                //     // alert(1);
                //     alert($(this).index())
                //     // inow = $(this).index();
                //     // $(".dot a").attr("class", "");
                //     // $(".dot").find("a").eq($(this).index()).attr("class", "active");
                // })

        })

    }

    return {
        slide: slide
    }
})