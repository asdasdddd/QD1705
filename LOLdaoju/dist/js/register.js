define(["jquery","jquery-cookie"],function($){
    var register = function(){
        let i = 1;
        setInterval(function(){
            i++;
            $("#picSlide").css("backgroundImage",`url(../image/registerpic${i}.jpg)`);
            if(i == 3){
                i = 1
            }
        },3000);
        $("#blur1").focus(function(){
            $(".unameEr").stop().animate({
                height: 0
            }, 100);
            $(".input-ok").eq(0).css("display","none")
            $("#blur1").blur(function(){
                if($(this).val() == ""){
                    $(".unameEr").css({
                        display: "block",
                        height: 0
                    }).stop().animate({
                        height:  "18px"
                    }, 100)
                }else if(/\w{1,24}/.test($(this).val())){
                    $(".input-ok").eq(0).css("display","block")
                }
            })

        });
        $("#blur2").focus(function(){
             $(".psdEr1").add($(".psdEr2")).add($(".psdEr3")).add($(".psdEr4")).stop().animate({
                    height: 0
                }, 35);
             $(".input-ok").eq(1).css("display","none");
            $(this).blur(function(){
                if(/\s+/.test($(this).val())){
                    $(".psdEr4").css({
                        display: "block",
                        height: 0
                    }).stop().animate({
                        height: "18"
                    }, 100)
                }else if($(this).val() == ""){
                     $(".psdEr1").css({
                        display: "block",
                        height: 0
                    }).stop().animate({
                        height: "18"
                    }, 100)
                }else if($(this).get(0).value.length < 8 || $(this).get(0).value.length > 16){
                    $(".psdEr2").css({
                        display: "block",
                        height: 0
                    }).stop().animate({
                        height: "18"
                    }, 100)
                }else if(!/\D+\d+/.test($(this).val())){
                     $(".psdEr3").css({
                        display: "block",
                        height: 0
                    }).stop().animate({
                        height: "18"
                    }, 100)
                }else{
                    $(".input-ok").eq(1).css("display","block")
                }
            })
        });
        $("#blur3").focus(function(){
            $(".input-ok").eq(2).css("display","none");
            $(".phoneEr1").add($(".phoneEr2")).stop().animate({
                    height: 0
                }, 35);
            $(this).blur(function(){
                if($(this).val() == ""){
                    $(".phoneEr1").css({
                        display: "block",
                        height: 0
                    }).stop().animate({
                        height: "18"
                    }, 100)
                }else if(!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test($(this).val())){
                    $(".phoneEr2").css({
                        display: "block",
                        height: 0
                    }).stop().animate({
                        height: "18"
                    }, 100)
                }else{
                    $(".input-ok").eq(2).css("display","block")
                }
            })
        });
        $("#submit").click(function(){
            // return false;   不会触发提交事件
            if($("#blur1").val() == ""){
                $(".unameEr").css({
                    display: "block",
                    height: 0
                }).stop().animate({
                    height:  "18px"
                }, 100);
                return false;

            }else if(/\s+/.test($("#blur2").val())){
            $(".psdEr4").css({
                display: "block",
                height: 0
            }).stop().animate({
                height: "18"
            }, 100);
            return false;

            }else if($("#blur2").val() == ""){
                 $(".psdEr1").css({
                    display: "block",
                    height: 0
                }).stop().animate({
                    height: "18"
                }, 100);
                return false;

            }else if($("#blur2").get(0).value.length < 8 || $("#blur2").get(0).value.length > 16){
                $(".psdEr2").css({
                    display: "block",
                    height: 0
                }).stop().animate({
                    height: "18"
                }, 100);
                return false;

            }else if(!/\D+\d+/.test($("#blur2").val())){
                 $(".psdEr3").css({
                    display: "block",
                    height: 0
                }).stop().animate({
                    height: "18"
                }, 100);
                return false;

            }else if($("#blur3").val() == ""){
                $(".phoneEr1").css({
                    display: "block",
                    height: 0
                }).stop().animate({
                    height: "18"
                }, 100);
                return false;

            }else if(!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test($("#blur3").val())){
                $(".phoneEr2").css({
                    display: "block",
                    height: 0
                }).stop().animate({
                    height: "18"
                }, 100);
                return false;
            }else{
                var obj ={
                    "password" : $('#blur2').val(),
                    "phone": $('#blur3').val()
                };
                // alert(JSON.stringify(obj));
                var str1 = $('#blur1').val();
                var str2 = JSON.stringify(obj);
                $.cookie(str1, str2 , {
                    raw : true,
                    expires: 7
                });
                alert("恭喜你,注册成功");
                // alert($(".mainnav .right li").eq(0).html());
                // return false;


            }


        });
}

    return {
        register:register
    }
})