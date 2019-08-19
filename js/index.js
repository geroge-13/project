$(function() {
    var $oLi = $("ol>li");
    var num
    $($oLi[num]).addClass("current").siblings().removeClass("current");
    $($oLi[0]).addClass("current");
    var btr = '';
    var Arr = [];
    $.get("http://139.159.214.233:7778/api/banner", function(data) {
        for (var i = 0; i < data.banner.length; i++) {
            btr += "<div class='gg'><img src=" + data.banner[i] + "></div>";
            // Arr.push(data[i]);
        }
        // console.log(data.banner[0])

        document.querySelector(".lunbo").innerHTML = btr;
    })
    $oLi.on("click", function() {
        //将活动的小按钮添加一个类
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(this).css("background", "#ff471a").siblings().css("background", "#cccccc");
        $(".lunbo>div").eq(index).addClass("active").siblings().removeClass("active");　
        $(".lunbo>div").eq(index).show().siblings().hide();
    });

    $.get("http://139.159.214.233:7778/api/members", function(data) {
        $('.visitors').append("<div class='nu'>访客人数<strong>" + "20" + data.sum + "</strong>人</div>");

    })

    var math = '';
    var str = '';
    var arr = [];
    var brr = [];
    var test = ['http://139.159.214.233:7778/uploads/activity/images/dynamic_pic.png']
    $.get('http://139.159.214.233:7778/api/dangjian', function(data) {
        for (var i = 0; i < data.length; i++) {
            // math += "<div class='a'>" + 0 + (i + 1) + "</div>"
            if (i < 9) {
                math += "<div class='a'>" + 0 + (i + 1) + "</div>"
            } else {
                math += "<div class='a'>" + (i + 1) + "</div>"
            }
            if (i == 0) {
                str += "<li class='active' value=" + i + ">" + "<p class='ee'>" + data[i].title + "<span>0</span></p>" + "</li>";
            } else {
                str += "<li value=" + i + ">" + "<p class='ee'>" + data[i].title + "<span>0</span></p>" + "</li>";
            }

            arr.push(data[i].content);
            if (data[i].img == null) {
                brr.push([test[0]]);
            } else {
                brr.push(data[i].img);
            }

        }
        // console.log(brr);

        // document.querySelector(".lisa").innerHTML = str;
        document.querySelector(".lisa").innerHTML = str;
        document.querySelector(".serial").innerHTML = math;
    });
    $(".lisa").on('click', 'li', function() {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        var word = '';
        for (i = 0; i < brr[index].length; i++) {
            word += "<div class='cc' ><img src=" + brr[index][i] + ">" + arr[index] + "</div>"
        }
        document.querySelector(".bbb").innerHTML = word;

        $(".bbb>div").eq(index).show().siblings().hide();
        $('#content2').show();
        $(".main").hide();
    });

    var aa = "";
    var bb = [];
    $.get('http://139.159.214.233:7778/api/fengcai', function(data) {
        for (var i = 0; i < data.length; i++) {
            if (i == 0) {
                aa += "<li class='active' value=" + i + ">" + "<p class='ee'>" + data[i].title + "</p>" + "</li>";
            } else {
                aa += "<li value=" + i + ">" + "<p class='ee'>" + data[i].title + "</p>" + "</li>";
            }
            bb.push(data[i].content);
        }
        // document.querySelector(".lisa").innerHTML = str;
        $('.person').append(aa);
    });
    $(".person").on('click', 'li', function() {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        var word = '';
        word += "<div class='cc' style='background: rgba(50,50,50,0.5);'>" + bb[index] + "</div>"
        $('#person2').append(word);
        $("#person2>div").eq(index).show().siblings().hide();
        $("#person2 img").height = "100%";
        $(".person").hide();
    });
});

$(function() {
    $('#tijiao').click(function() {
        var aa = setInterval(function() {
            $(".index").hide();
        }, 100)

        var name = $(".name").val();
        var phone = $(".phone").val();
        var sum = $(".sum").val();
        var leader = $(".leader").val();
        var unit = $(".unit").val();
        $.post("http://139.159.214.233:7778/api/members/create", { //注册接口
            name: name,
            phone: phone,
            sum: sum,
            unit: unit,
            leader: leader
        }, function(data) {
            if (data.error) {
                alert(data.error);
            } else {
                alert("提交成功")
                window.location.href = "tang.html"
            }
        });
    });


    $(function() {
        $(".content3").keyup(function() {
            var aa = $(this).val();
            var bb = aa.length;
            document.querySelector(".yy").innerHTML = bb + "/100";
        });
    })


    $(function() {
        $('#tijiao2').click(function() {
            var name = $(".name3").val();
            var phone = $(".phone3").val();
            var email = $(".email").val();
            var unit = $(".unit3").val();
            var content = $(".content3").val();
            // console.log(name, phone, email, unit, content);
            $.post("http://139.159.214.233:7778/api/advices/create", { //注册接口
                name: name,
                phone: phone,
                email: email,
                unit: unit,
                content: content
            }, function(data) {
                if (data.error) {
                    alert(data.error);
                } else {
                    // console.log(data)
                    alert("提交成功")
                    window.location.href = "tang.html"
                }
            });
        });
    });

    var str = "";
    var tem = '';
    //点击logo获取天气预报的图片
    $.get('https://www.tianqiapi.com/api/?version=v6&cityid=101191001', function(data) {
        str += "<img src= ./weather/" + data.wea_img + ".png>";
        tem = "<div class='tian'>" + "温度：" + data.tem + "℃" + "</div>"


        document.querySelector(".tian").innerHTML = tem
        document.querySelector(".weather").innerHTML = str;
    });


    $(document).ready(function() {
        var i = 0;
        var timer;

        $('.gg').eq(0).show().siblings('.gg').hide();

        showTime();

        function showTime() {
            timer = setInterval(function() {
                Show();
                i++;
                if (i == 3) {
                    i = 0;
                }
            }, 2000);
        }

        function Show() {
            $('.gg').eq(i).fadeIn(100).siblings('.gg').fadeOut(100);
            $('ol li').eq(i).addClass('active').siblings('ol li').removeClass('active');

        }

    });


    //邮箱正则表达式
    // function checkEmail(str) {
    //     var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    //     if (re.test(str)) {
    //         alert("ok");
    //     } else {
    //         alert("nope");
    //     }
    // }
});