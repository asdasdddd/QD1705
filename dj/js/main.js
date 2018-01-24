console.log("载入成功");
require.config({
    paths:{
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "index": "index"
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

