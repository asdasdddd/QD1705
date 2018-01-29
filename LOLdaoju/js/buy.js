define(["jquery","jquery-cookie"], function($){
    var buy = function(){
            sc_sum();
            var i = $.cookie("count");
            // alert(i);

            //动态添加商品信息
            $.ajax({
                url: "../data/buynewgoods.json",
                type: "GET" ,
                success: function(res){

                    var html = `<div class="goods-img fl">
                                <div class="goods-img-bg pr">
                                    <img class="goods-djimg" src="${res[i].image}" alt="${res[i].title}">
                                    <div id="btn_detail_jzoom_img" class="comico btn-goods-zoom pa">
                                        查看大图
                                    </div>
                                </div>
                                <ul class="goods-action">
                                    <li>
                                        <a id="btn_detail_weibo_collect" class="comico btn-goods-fav collect-btn" href="javascript:;">收藏商品</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="goodsbuy-box fl">
                                <h2 class="goods-name clearfix">
                                    <span class="fl name">${res[i].title}</span>
                                </h2>
                                <div class="comico goods-bg">
                                    <dl>
                                        <dt class=" pt10">Q币价:</dt>
                                        <dd class="txt-line pt10">
                                            <span>${res[i].qb}</span>
                                            <span>Q币</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt class="fl">微信价:</dt>
                                        <dd class="fl">
                                            <span class="goods-price orange">￥${res[i].wechat}</span>
                                        </dd>
                                    </dl>
                                </div>
                                <dl class="pt18">
                                    <dt>期限:</dt>
                                    <dd id="use_date">永久</dd>
                                </dl>
                                <span id="blk_detail_main_onsale" class="clearfix">
                                    <a id="btn_detail_main_addcart" class="fl btnico btn-goods-cart btn-com clearfix" href="javascript:;">
                                        加入购物车
                                    </a>
                                    <a id="btn_detail_main_grant" class="fl btnico btn-goods-handsel btn-blue" href="javascript:;">赠送</a>
                                </span>
                            </div>`;
                    $("#blk_detail_info").html(html);
                }
            });

            //动态添加猜你喜欢
            $.ajax({
                url: "../data/guessgoods.json",
                type: "GET",
                success: function(res){
                    // alert(res);
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html +=`<li>
                                    <a href="" class="rank-link clearfix" target="_self">
                                        <div class="djimg fl">
                                            <img src=${res[i].image} alt="胜利经验卡(10胜)" width="76" height="76">
                                        </div>
                                        <div class="djinfo fr">
                                            <p class="djname">${res[i].title}</p>
                                            <p class="djprice">${res[i].qb}</p>
                                            <p class="djcpri" style="font-size:12px;">
                                                微信价:
                                                <strong>￥${res[i].wechat}</strong>
                                            </p>
                                        </div>
                                    </a>
                                </li>`;


                    }
                    $("#blk_detail_left_recommend").html(html);
                    // $(".listbox").eq(1).css("display", "none");
                }
            });
            $("#blk_detail_info").on("click", "#btn_detail_main_addcart", function(){
                // console.log(1);
                //给当前界面商品设置id值与cookie里的名相对应
                addCookie();
                // alert($.cookie("goods"));
                //阻止冒泡
                sc_sum();
                return false;
            });

            $(".shoppingcar a").attr("href", "sc.html");
            //计算购物车数字
            function sc_sum(){
                var arr = eval($.cookie("goods"));
                var sum = 0 ;
                for(var i in arr){
                    sum += arr[i].num;
                }
                $(".shoppingcar a i").html(`(${sum})`);
            }

            //添加购物车cookie 将该物品与购物车内li内容连接
            function addCookie(){
                var id = $.cookie("count");
                // alert(id);
                var first = $.cookie("goods") == null ? true : false;
                if(first){
                    // alert("第一次添加");
                    // alert(i);
                    //第一次添加
                    $.cookie("goods", "[{id:" + id + ", num:1}]", {
                        expires: 7
                    })
                    alert("添加购物车成功");
                }else{
                    // 判断之前是否添加过该商品
                    // 用eval转换字符串

                    // 取出原来商品转成数组
                    var str = $.cookie("goods");
                    console.log(str);
                    var arr = eval(str);
                    var same = false; //代表没有相同商品

                    //遍历所有对象 判断
                    for(var i in arr){
                        //之前添加过该商品 将num加一
                        if(arr[i].id == id){
                            arr[i].num++;
                            //将加完的数据再转回字符串存入cookie 结束
                            var cookieStr = JSON.stringify(arr);
                            $.cookie("goods", cookieStr, {
                                expires: 7
                            })
                            //有相同商品,否则到结束都是false未添加过该商品
                            same = true;
                            break;
                        }
                    }
                    //判断是否有相同的商品
                    //same 为 false 未添加过 需要把该商品push进去
                    if(!same){
                        var obj = {
                            id: id,
                            num: 1
                        };
                        arr.push(obj);
                        var cookieStr = JSON.stringify(arr);
                        $.cookie("goods", cookieStr, {
                            expires: 7
                        })
                        alert("添加购物车成功");
                    }
                }
            }

    }



    return {
        buy: buy
    }
})