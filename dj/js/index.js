define(["jquery"], function($){

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
            })
            $.ajax({
                url: "../data/banner.json",
                type: "GET",
                success: function(res){
                    // alert(res.length)
                    var html = "";
                    var text = "";
                    for(var i = 0; i < res.length; i++ ){
                        html += `<li class="dev">
                                    <a target="_blank" href=""><img src="${res[i].image}" alt=""></a>
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
                                                <a href="" target="_blank">
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
                        $(".listbox").html(html);
                    }
                }
            })
        })
    }
    return {
        main: main
    }
})

          // alert(JSON.stringify([{
                //     title: "英雄联盟周边喜迎新春",
                //     img: "../image/banner_pic1.jpg"
                // },
                // {
                //     title: "迎接赛季优惠券限时领",
                //     img: "../image/banner_pic2.jpg"
                // },
                // {
                //     title: "英雄联盟神秘莲花之令",
                //     img: "../image/banner_pic1.jpg"
                // },
                // {
                //     title: "英雄联盟买一送一",
                //     img: "../image/banner_pic1.jpg"
                // }]))
