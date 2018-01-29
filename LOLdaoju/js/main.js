console.log("载入成功");
require.config({
    paths:{
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "index": "index",
        "buy": "buy"
    },
    shim: {
        "jquery-cookie": ["jquery"],
    }
})

require(["index"], function(index){
    console.log(index.main());
})

require(["slide"], function(slide){
    console.log(slide.slide());
})
require(["login"], function(login){
    console.log(login.login());
})
require(["register"], function(register){
    console.log(register.register());
})
require(["buy"], function(buy){
    console.log(buy.buy());
})
require(["sc"], function(sc){
    console.log(sc.sc());
})
