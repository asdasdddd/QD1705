define(["jquery", "jquery-cookie"], function($){
    var sc = function(){
        $(function(){
            sc_msg();
            // alert(1);
            //没有商品时添加li
            emptyLi();
            //删除时 需要将cookie与表面li同时删掉
             $("ul").on("click", "#delete", function(){
                $(this).parent().parent().parent().remove();
                var arr = eval($.cookie("goods"));

                //通过点击删除时 找到title名 进行两个cookie的连接
                var title = $(this).parent().parent().find("a").eq(0).html()
                // alert($(this).parent().parent().find("a").eq(0).html());
                for(var i in arr){
                    var obj = JSON.parse($.cookie(arr[i].id));
                    // alert(obj.title);
                    if(obj.title == title){
                        // alert(title);
                        arr.splice(i, 1);
                        var str = JSON.stringify(arr);
                        $.cookie("goods", str);
                        break;
                        // console.log(arr[i])
                        // alert(i)
                        // arr[i].
                    }


                }
                paySum();
                emptyLi()
             } )

             $("ul").on("click", ".add", function(){
                // add按钮对应的li ↓↓↓
                // $(this).parent().parent().parent().remove();
                var arr = eval($.cookie("goods"));
                var title = $(this).parent().parent().find("a").eq(0).html()
                console.log(arr);
                for(var i in arr){
                    var obj = JSON.parse($.cookie(arr[i].id));
                    if(obj.title == title){
                        // alert(title);
                        arr[i].num ++;
                        var str = JSON.stringify(arr);
                        $.cookie("goods", str);
                        sc_msg();
                        console.log(arr);
                        break;

                        // alert(i)
                        // arr[i].
                    }
                }
                paySum()
             })

             $("ul").on("click", ".reduce", function(){
                // add按钮对应的li ↓↓↓
                // $(this).parent().parent().parent().remove();
                var arr = eval($.cookie("goods"));
                var title = $(this).parent().parent().find("a").eq(0).html()
                // console.log(arr);
                for(var i in arr){
                    var obj = JSON.parse($.cookie(arr[i].id));
                    if(obj.title == title){
                        if(arr[i].num == 1){
                            alert("不能再减了");
                            break;
                        }
                        // alert(title);
                        arr[i].num --;
                        var str = JSON.stringify(arr);
                        $.cookie("goods", str);
                        sc_msg();
                        // console.log(arr);
                        break;

                        // alert(i)
                        // arr[i].
                    }
                }
                paySum()
             })

             $(".payRed2").click(function(){
                $(".picNone").css("display", "block");
             })
             $(window).keyup(function(ev){
                if(ev.which == 27){
                    $(".picNone").css("display", "none");
                    // $("#_overlay_").css("display", "none");
                }
            })

            //  if(!($("ul li"))){
            //     $("ul").html(emptyHtml);
            // }
            function emptyLi(){
                var emptyHtml = `<p class="empty">您的购物车还没有道具，赶快去挑选几个吧 <a href="index.html">我要买买买 !</a></p>`;
                if($(".sc_ul li").size() == 0){
                    $(".sc_ul").html(emptyHtml);
                }
            }
            //计算总价格
            function paySum(){
                // alert($("ul li i").html());
                //遍历所有的价格
                var sum = "00.00";
                if("ul li"){
                    sum = parseInt(sum);
                    $("ul li i").each(function(i, elem){
                        // alert();
                        sum += parseInt($(elem).html()) ;
                    })
                    sum = sum + ".00";
                }else{
                    sum = "00.00";
                }

                $(".payRed").html(sum);
            }
            paySum();
            //加载的cookie里的商品放到ul里
            function sc_msg(){
                var arr = eval($.cookie("goods"));
                // alert(arr);
                var html = ``;
                if(arr){
                    for(var i in arr){
                        console.log(arr);
                        var obj = JSON.parse($.cookie(arr[i].id));
                        //取id对应下标的数据
                         //id也是cookie名字 (arr[i].id);
                        // cookie id的值 即商品信息($.cookie(arr[i].id))
                        console.log(JSON.parse($.cookie(arr[i].id)));
                        html += `<li>
                            <p>
                                <span>
                                    <img src="${obj.image}" alt="">
                                    <a href="">${obj.title}</a>
                                </span>
                                <span>皮肤</span>
                                <span>${obj.qb}.00QB</span>
                                <span>永久</span>
                                <span style="">
                                    <a href="javascript:;" class="reduce">-</a> <input type="text" value="${arr[i].num}"> <a href="javascript:;" class="add">+</a>
                                </span>
                                <span>无优惠</span>
                                <span><i>${obj.qb * arr[i].num}</i>.00Q币</span>
                                <span><a class="blue" href="">关注</a><a class="blue" id="delete" href="javascript:;">删除</a></span>
                            </p>
                        </li>`;
                    }
                }

                $(".sc_ul").html(html);

            }

        })

    }










    return {
        sc : sc
    }
})