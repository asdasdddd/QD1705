define(["jquery", "jquery-cookie"],function($){
    var login = function(){
        $(function(){
            $(window).keyup(function(ev){
                if(ev.which == 27){
                    $("#loginDiv").css("display", "none");
                    $("#_overlay_").css("display", "none");
                }
            })
            function  login(){
                    if($.cookie($("#u").val())){
                        if($("#p").val() == (JSON.parse($.cookie($("#u").val()))).password){
                            alert('登陆成功');
                            $("#loginDiv").add($("#_overlay_")).css("display", "none");
                            $("#login-unlogin").html(`你好 , ${$("#u").val()}  <a href="javascript:;" id="btn_topbar_login_login">退出</a>`)
                            .css({
                                lineHeight: "28px",
                                maxWidth: "130px"
                            });
                            $("#loginP").html(`尊敬的VIP9用户, 您好! &nbsp;${$("#u").val()}
                                &nbsp;&nbsp;&nbsp;  <a style="color:lightgray;" href="javascript:;" id="btn_topbar_login_login">退出</a>`);
                            // alert($("#btn_topbar_login_login").html());
                        }else{
                            alert('请输入正确的密码')
                        }
                    }else{
                        alert("找不到该用户")
                    }

            }
            function unlogin(){
                $("#loginDiv").css("display", "block");
                $("#_overlay_").css("display", "block");
                //事件监听相同时间会叠加并非覆盖 如果想要覆盖先off一下click事件
                $("#login_button").off("click").click(login);
            }
            function unlogin2(){
                $("#login-unlogin").html(`您还未登录 , 请<a href="javascript:;" id="btn_topbar_unlogin_login">登录</a>`);
                $("#loginP").html(` 您还未登陆哦, <a href="javascript:;"  id="btn_topbar_unlogin_login" class="blue">立即登录</a><br/>购买超值商品!`);
            }
            //登陆登出处理同一按钮 用事件委托 否则改了样式后加的特效就么得了
            //事件委托对同样多个id都能起作用??????  id不唯一也可以?
            $("body").on("click", "#btn_topbar_unlogin_login", unlogin);
            $("body").on( "click", "#btn_topbar_login_login",unlogin2)
        })

    }

    return {
        login:login
    }
})