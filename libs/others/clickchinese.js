var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("♥倩宝最多才♥", "♥倩宝最美丽♥", "♥倩宝最可爱♥", "♥倩宝最乖巧♥", "♥倩宝最温柔♥", "♥倩宝最体贴♥", "♥倩宝最端庄♥", "♥倩宝最贤淑♥", "♥倩宝最开朗♥", "♥倩宝最优雅♥", "♥倩宝最善良♥", "♥倩宝最文静♥");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": randomRgbaColor()
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            1500,
            function () {
                $i.remove();
            });
    });
});
function randomRgbaColor() { //随机生成RGBA颜色
    var r = Math.floor(Math.random() * 256); //随机生成256以内r值
    var g = Math.floor(Math.random() * 256); //随机生成256以内g值
    var b = Math.floor(Math.random() * 256); //随机生成256以内b值
    var alpha = Math.random(); //随机生成1以内a值
    return `rgb(${r},${g},${b},${alpha})`; //返回rgba(r,g,b,a)格式颜色
}