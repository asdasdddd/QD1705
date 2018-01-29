define(["jquery","jquery-cookie"], function($){

    var main = function(){
        $(function(){
            $("#gameLi").hover(function(){
                $("#gameLinone").css({
                    "display": "block",
                    "zIndex": 20
                });
            },function(){
                $("#gameLinone").css("display", "none");
            });

            $("#navico_input").focus(function(){
                $(this).attr("value", "");
            });

            $("#navico_input").blur(function(){
                $(this).attr("value", "输入道具并进行搜索")
            });

            //新品上架 热门推荐的点击切换
            $(".plate-tit li").click(function(){
                $(".plate-tit li").attr("class", "");
                $(this).attr("class", "current");
                // alert($(this).index());
                $(".listbox").css("display","none");
                $(".listbox").eq($(this).index()).css("display","block");
            })
            $("#top").click(function(){
                $(window).scrollTop(0);
            })
            $("#u").focus(function(){
                $("#uin_tips").html("");
            })
            $("#p").focus(function(){
                $("#pwd_tips").html("");
            })

            $(".listbox").on("click", "dl", function(){
                // alert(333);
                var str = $(this).index();
                $.cookie("count", str, {
                    expires : 7
                })
            })

            $.ajax({
                url: "../data/banner.json",
                type: "GET",
                success: function(res){
                    // alert(res.length);
                    var html = "";
                    var text = "";
                    for(var i = 0; i < res.length; i++ ){
                        // alert(res[i].image);
                        html += `<li class="dev">
                                    <a target="_blank" href=""><img src="${res[i].img}" alt=""></a>
                                </li>`;
                        text +=`<a href="">${res[i].title}</a>`;
                        $(".dot").eq(i).html(text);
                        if(i == 0){
                            var more = html;
                            // alert(more);
                        }
                    }
                    // var morether = html;
                    $("#slide").html(html+more);
                    // alert(1);
                    // $("#slide").get(0).style.innerHTML += more;
                    $(".dot").html(text);
                    $(".dot").find("a").eq(0).attr("class", "active")
                }
            })
            $.ajax({
                url: "../data/newgoods.json",
                type: "GET",
                success: function(res){
                    // alert(res)
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html +=`<dl class="">
                                    <dt>
                                        <a href="buy.html">
                                            <img src="${res[i].image}" alt="">
                                        </a>
                                    </dt>
                                    <dd>
                                        <a href="" class="djname" target="_blank">
                                            <strong>${res[i].title}</strong>
                                        </a>
                                        <div class="bx_list_t1">
                                            Q币价:
                                            <span class="t2 fwb">    ${res[i].qb}</span>
                                            <span class="t2 fwb">Q币</span>
                                        </div>
                                        <div class="bx_list_t1">
                                            微信价:
                                            <span class="t2 fwb">    ¥</span>
                                            <span class="t2 fwb">${res[i].wechat}</span>
                                        </div>
                                        <div class="bxlist-t2 c">
                                            <a href="javascript:MT.buyGood(8753);" class="btn-green buy-now">立即购买</a>
                                            <span class=""></span>
                                        </div>
                                    </dd>
                                </dl>`
                        $(".listbox").eq(0).html(html);
                        // alert(res[i].title);
                        var obj = {
                            id : i,
                            title: res[i].title,
                            image : res[i].image,
                            qb: res[i].qb,
                            wechat: res[i].wechat
                        }
                        // var str1 = res[i].title;
                        var str2 = JSON.stringify(obj);
                        // alert(str2);
                        $.cookie(i, str2 ,{
                            raw : true,
                            expires: 7
                        });
                        // $.cookie()
                    }
                }
            })
            // alert(JSON.stringify([{"title":"猩红之月 烬","qb":"Q币价：79.00 Q币","wechat":75.05,"image":"../image/topgood1.jpg","count":"01"},{"title":"屠龙勇士 赵信","qb":"Q币价：79.00 Q币","wechat":75.05,"image":"../image/topgood2.jpg","count":"02"},{"title":"死亡绽放 卡兹克","qb":"Q币价：69.00 Q币","wechat":65.55,"image":"../image/topgood3.jpg","count":"03"},{"title":"泳池派对 德莱文","qb":"49.05 Q币","wechat":47.02,"image":"../image/topgood4.jpg","count":"04"}]));
            // alert(JSON.stringify([{"title":"胜利经验卡(10胜)","qb":"Q币价：29.00 Q币","wechat":27.55,"image":"../image/guessgood1.jpg","count":"01"},{"title":"双倍金币卡(3日)","qb":"Q币价：22.00 Q币","wechat":20.90,"image":"../image/guessgood2.jpg","count":"02"},{"title":"战地机甲 斯卡纳","qb":"Q币价：34.50 Q币","wechat":32.77,"image":"../image/guessgood3.jpg","count":"03"},{"title":"高丽风情 阿狸","qb":"10.00 Q币","wechat":9.50,"image":"../image/guessgood4.jpg","count":"04"}]));

// alert(JSON.stringify([{"title":"提波斯熊 毛绒玩偶 粉色限定款","price":"￥180.00","image":"../image/zbgood1.jpg"},{"title":"驯龙炮手 崔丝塔娜 手办","price":"￥150.00","image":"../image/zbgood2.jpg"},{"title":"源计划迷你手办套装","price":"￥220.00","image":"../image/zbgood3.jpg"},{"title":"提伯斯熊 毛绒玩偶","price":"￥180.00","image":"../image/zbgood4.jpg"}]));

            $.ajax({
                url: "../data/popgoods.json",
                type: "GET",
                success: function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html +=`<dl class="">
                                    <dt>
                                        <a href="javascript:;" target="_blank">
                                            <img src="${res[i].image}" alt="">
                                        </a>
                                    </dt>
                                    <dd>
                                        <a href="" class="djname" target="_blank">
                                            <strong>${res[i].title}</strong>
                                        </a>
                                        <div class="bx_list_t1">
                                            Q币价:
                                            <span class="t2 fwb">    ${res[i].qb}</span>
                                            <span class="t2 fwb">Q币</span>
                                        </div>
                                        <div class="bx_list_t1">
                                            微信价:
                                            <span class="t2 fwb">    ¥</span>
                                            <span class="t2 fwb">${res[i].wechat}</span>
                                        </div>
                                        <div class="bxlist-t2 c">
                                            <a href="javascript:MT.buyGood(8753);" class="btn-green buy-now">立即购买</a>
                                            <span class=""></span>
                                        </div>
                                    </dd>
                                </dl>`
                        $(".listbox").eq(1).html(html);
                    }
                    $(".listbox").eq(1).css("display", "none");
                }
            })

            $.ajax({
                url: "../data/topgoods.json",
                type: "GET",
                success: function(res){
                    // alert(res);
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html +=`<li>
                                    <a href="" class="rank-link clearfix" target="_blank">
                                        <div class="comico ico-rank">${res[i].count}</div>
                                        <div class="djimg fl"><img src=${res[i].image} target="_blank"></div>
                                        <div class="djinfo fr">
                                            <p class="djname">${res[i].title}</p>
                                            <p class="djprice">${res[i].qb}</p>
                                            <p class="djcpri">微信价: <strong>￥${res[i].wechat}</strong></p>
                                        </div>
                                    </a>
                                </li>`;


                    }
                    $("#blk_index_right_hotrank").html(html);
                    // $(".listbox").eq(1).css("display", "none");
                }
            })
            $.ajax({
                url: "../data/guessgoods.json",
                type: "GET",
                success: function(res){
                    // alert(res);
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html +=`<li>
                                    <a href="" class="rank-link clearfix" target="_blank">
                                        <div class="djimg fl"><img src=${res[i].image} target="_blank"></div>
                                        <div class="djinfo fr">
                                            <p class="djname">${res[i].title}</p>
                                            <p class="djprice">${res[i].qb}</p>
                                            <p class="djcpri">微信价: <strong>￥${res[i].wechat}</strong></p>
                                        </div>
                                    </a>
                                </li>`;


                    }
                    $("#blk_index_right_guess").html(html);
                    // $(".listbox").eq(1).css("display", "none");
                }
            })
            $.ajax({
                url: "../data/zbgoods.json",
                type: "GET",
                success: function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html +=`<li>
                                <a href="" target="_blank" class="pro-link">
                                    <div class="prodimg">
                                        <img src="${res[i].image}" alt="">
                                    </div>
                                    <div class="prodinfo clearfix">
                                        <p class="fl prodname">${res[i].title}</p>
                                        <p class="fr prodpri">${res[i].price}</p>
                                    </div>
                                </a>
                            </li>`;
                    }
                    $("#blk_index_zb_list").html(html);
                    // $(".listbox").eq(1).css("display", "none");
                }
            })

            $.ajax({
                url: "../data/act.json",
                type: "GET",
                success: function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html +=`<li>
                                    <div class="actbox">
                                        <a href="" class="linkfc" target="_blank">
                                            <div class="actimg">
                                                <div class="game-name">
                                                    <div class="namebg"></div>
                                                    <div class="name">${res[i].head}</div>
                                                </div>
                                                <div class="game-status">
                                                    火爆<br>进行中
                                                </div>
                                                <img src="${res[i].img}" alt="">
                                            </div>
                                        </a>
                                        <div class="tips">
                                            <div class="fl game-tit">${res[i].title}</div>
                                            <p class="time">活动时间：${res[i].time}</p>
                                            <div class="attention">
                                                <span class="like">点赞</span>
                                                <span><strong class="num">(${res[i].count})</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>`;
                    }
                    $("#blk_index_bottom_ad").html(html);
                    // $(".listbox").eq(1).css("display", "none");
                }
            })


        })
    }
    return {
        main: main
    }
})

          // alert(JSON.stringify([{
          //           title: "吸引新春 情满峡谷",
          //           img: "../image/actimg1.jpg",
          //           time: "2018-01-18~2018-02-19",
          //           count: "3011",
          //           head: "英雄联盟"
          //       },{
          //           title: "2018LPL战队全新队服重磅上线",
          //           img: "../image/actimg2.jpg",
          //           time: "2018-01-16~2018-01-22",
          //           count: "2018",
          //           head: "英雄联盟"
          //       },{
          //           title: "在售道具买一送一",
          //           img: "../image/actimg3.jpg",
          //           time: "2018-01-12~2018-04-12",
          //           count: "3286",
          //           head: "英雄联盟"
          //       }
          //       ]))
