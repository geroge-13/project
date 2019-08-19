//所有页面的点击事件
var url = 'http://139.159.214.233:7778/api/';

$(".visitors").click(function() {
    $(".register").show();
    $(".main").hide();
})
$(".back").click(function() {
        $(".register").hide();
        $(".main").show();
    })
    //点击logo获取党日动态的轮播图片
$(".logo").click(function() {
    window.location = "./tang.html"
})
$(".back3").click(function() {
    $(".mien2").hide();
    $(".main").show();
})
$(".back5").click(function() {
    $("#content2").hide();
    $(".main").show();
})
$(".back6").click(function() {
    $(".sigle").hide();
    $(".main").show();
})
$(".back23").click(function() {
    $(".sigle2").hide();
    $(".sigle").show();
    $(".back6").show();
})
$(".close").click(function() {
        $("#allmap").hide();
        $(this).hide();
        $(".position span").show();
    })
    //风采集萃获取数据
$(".mien").click(function() {
        $(".main").hide();
        $(".mien2").show();
        var str = '';
        var er = '';
        var Arr = [];
        var cla = ['margin-left:0', 'margin-left:73%'];
        $.get('http://139.159.214.233:7778/api/fengcai', function(data) {
            if (data.length > cla.length) {
                var j = data.length / cla.length;
                for (var k = 0; k < j; k++) {
                    cla.push(cla[0], cla[1]);
                }
            }
            for (var i = 0; i < data.length; i++) {
                str += "<li class=v1 style=" + cla[i] + ">" + data[i].name + "</li>";
                Arr.push(data[i].message);
            }
            document.querySelector(".left").innerHTML = str;
            $(".left").on('click', 'li', function() {
                er = $(this).index();
                var name = '';
                var tit = '';
                tit = "<div class=title2>" + data[er].name + "</div>"
                for (var j = 0; j < Arr[er].length; j++) {
                    name += "<li><p class='member2'>" + Arr[er][j].title + "</p></li>";
                }
                document.querySelector(".title2").innerHTML = tit;
                document.querySelector(".member").innerHTML = name;
                $(".mien3").show();
                $(".mien2").hide();
            })
            $(".member").on('click', 'li', function() {
                san = $(this).index();
                var name = '';
                // for (var j = 0; j < Arr[san].length; j++) {
                name += "<div class='mim'><img src=" + Arr[er][san].img + ">" + Arr[er][san].content + "</div>";
                //p img 
                // }
                document.querySelector(".mien-cnt").innerHTML = name;
                $(".mien4").show();
                $(".back7").hide();
            })
        })
    })
    //三张清单的资源清单
$(".one").click(function() {
        $(".main").hide();
        $(".sigle").show();
        var str = '';
        var Arr = [];
        var one = $('.one p').text();
        // console.log(one)
        $.get(url + 'san', function(data) {
            for (var i = 0; i < data.length; i++) {
                str += "<li><p class='f-tit'>" + data[i].name + "</p></li>";
                Arr.push(data[i].message);
            }
            document.querySelector(".tab-tit").innerHTML = str;
            $('.tab-tit li:nth-child(1)').css("background", "#ff471a").siblings().css("background", "#cccccc");
            er = one;
            var word = '';
            for (var j = 0; j < Arr[er].length; j++) {
                word += "<li class='f1'><p class='f2'>" + Arr[er][j].title + "</p></li>";
            }
            document.querySelector(".demand").innerHTML = word;
            $(".sigle .tab-tit").on('click', 'li', function() {
                // $(".map5").hide();
                $(this).addClass("active").siblings().removeClass("active");　　　　
                // var index = $(this).index();　　　　
                $(this).css("background", "#ff471a").siblings().css("background", "#cccccc")
                er = $(this).index();
                var word = '';
                for (var j = 0; j < Arr[er].length; j++) {
                    word += "<li class='f1'><p class='f2'>" + Arr[er][j].title + "</p></li>";
                }
                document.querySelector(".demand").innerHTML = word;
                // $(".map6").show();
            });
            $(".demand ").on('click', 'li', function() {
                $(".back6").hide();
                var san = $(this).index();
                var word = '';
                word += Arr[er][san].content;
                document.querySelector(".sigle-cnt").innerHTML = word;
                $(".sigle2").show();
                // $("table").cellspacing("0");
                $("table").width("100%");
                $("table").css("border-width", "1px").css("border-color", "#f2f2f2")
                $("table td:nth-child(1)").width("23%")
                $("table td:nth-child(3)").width("23%")
            });
        })
    })
    //项目清单
$(".twe").click(function() {
        $(".main").hide();
        $(".sigle").show();
        var str = '';
        var Arr = [];
        var one = $('.twe p').text();
        // console.log(one)
        $.get(url + 'san', function(data) {
            for (var i = 0; i < data.length; i++) {
                str += "<li><p class='f-tit'>" + data[i].name + "</p></li>";
                Arr.push(data[i].message);
            }
            document.querySelector(".tab-tit").innerHTML = str;
            $('.tab-tit li:nth-child(2)').css("background", "#ff471a").siblings().css("background", "#cccccc");
            er = one;
            var word = '';
            for (var j = 0; j < Arr[er].length; j++) {
                word += "<li class='f1'><p class='f2'>" + Arr[er][j].title + "</p></li>";
            }
            document.querySelector(".demand").innerHTML = word;

            $(".sigle .tab-tit").on('click', 'li', function() {
                // $(".map5").hide();
                $(this).addClass("active").siblings().removeClass("active");　　　　
                // var index = $(this).index();　　　　
                $(this).css("background", "#ff471a").siblings().css("background", "#cccccc")
                er = $(this).index();
                var word = '';
                for (var j = 0; j < Arr[er].length; j++) {
                    word += "<li class='f1'><p class='f2'>" + Arr[er][j].title + "</p></li>";
                }
                document.querySelector(".demand").innerHTML = word;
                // $(".map6").show();
            });
            $(".demand ").on('click', 'li', function() {
                $(".back6").hide();
                var san = $(this).index();
                var word = '';
                word += Arr[er][san].content;
                document.querySelector(".sigle-cnt").innerHTML = word;
                $(".sigle2").show();
                // $("table").cellspacing("0");
                $("table").width("100%");
                $("table").css("border-width", "1px").css("border-color", "#f2f2f2")
                $("table td:nth-child(1)").width("23%")
                $("table td:nth-child(3)").width("23%")
            });
        })
    })
    //需求清单
$(".three").click(function() {
    $(".main").hide();
    $(".sigle").show();
    var str = '';
    var Arr = [];
    var one = $('.three p').text();
    // console.log(one)
    $.get(url + 'san', function(data) {
        for (var i = 0; i < data.length; i++) {
            str += "<li><p class='f-tit'>" + data[i].name + "</p></li>";
            Arr.push(data[i].message);
        }
        document.querySelector(".tab-tit").innerHTML = str;
        $('.tab-tit li:nth-child(3)').css("background", "#ff471a").siblings().css("background", "#cccccc");
        er = one;
        var word = '';
        for (var j = 0; j < Arr[er].length; j++) {
            word += "<li class='f1'><p class='f2'>" + Arr[er][j].title + "</p></li>";
        }
        document.querySelector(".demand").innerHTML = word;

        $(".sigle .tab-tit").on('click', 'li', function() {
            // $(".map5").hide();
            $(this).addClass("active").siblings().removeClass("active");　　　　
            // var index = $(this).index();　　　　
            $(this).css("background", "#ff471a").siblings().css("background", "#cccccc")
            er = $(this).index();
            var word = '';
            for (var j = 0; j < Arr[er].length; j++) {
                word += "<li class='f1'><p class='f2'>" + Arr[er][j].title + "</p></li>";
            }
            document.querySelector(".demand").innerHTML = word;
            // $(".map6").show();
        });
        $(".demand ").on('click', 'li', function() {
            $(".back6").hide();
            var san = $(this).index();
            var word = '';
            word += Arr[er][san].content;
            document.querySelector(".sigle-cnt").innerHTML = word;
            $(".sigle2").show();
            // $("table").cellspacing("0");
            $("table").width("100%");
            $("table").css("border-width", "1px").css("border-color", "#f2f2f2")
            $("table td:nth-child(1)").width("23%")
            $("table td:nth-child(3)").width("23%")
        });
    })
})
$(".back12").click(function() {
    $(".map3").show();
    $(".map5").hide();
    var str = '';
    var Arr = [];
    var cunstr = '';
    var six = '';
    var cunArr = [];
    $.get(url + 'hongbao', function(data) {

        for (var i = 0; i < data.length; i++) {
            if (i == 2) {
                str += "<li class='b2'><p class='f-tit'>村居企业类</p></li>";
                str += "<li class=b" + 3 + "><p class='f-tit'>" + data[2].name + "</p></li>";
            } else {
                str += "<li class=b" + i + "><p class='f-tit'>" + data[i].name + "</p></li>";
            }
            Arr.push(data[i].message);
        }
        document.querySelector(".village").innerHTML = str;

        $(".village").on('click', 'li', function() {
            $('.village').off('click', 'li');
            er = $(this).index();
            var tit = "";
            if (er == 3) {
                tit = "<div class='tit4'>" + data[2].name + "</div>"
            } else {
                tit = "<div class='tit4'>" + data[er].name + "</div>"
            }
            document.querySelector(".tit4").innerHTML = tit;
            if (er == 2) {
                $.get(url + 'hongcun', function(data) {
                    var san = 0;
                    for (var i = 0; i < data.length; i++) {
                        cunstr += "<li>" + data[i].name + "</li>";
                        // wu = $(this).index();
                        cunArr.push(data[i].message);
                        // six += "<li class='f3'><p class='f4'>" + data[i].message[0].title + "</p></li>";
                        // cunArr.push(data[i].message);
                    }
                    document.querySelector(".tabbox2").innerHTML = cunstr;
                    $(".tabbox2 li:nth-child(1)").css("background", "#ff471a").siblings().css("background", "#cccccc");
                    for (var k = 0; k < cunArr[0].length; k++) {
                        six += "<li class='f3'><p class='f4'>" + cunArr[0][k].title + "</p></li>";
                    }
                    document.querySelector(".village2").innerHTML = six;

                    $(".map4").show();
                    $(".map3").hide();
                    $(".map4 .tabbox2").on('click', 'li', function() {
                        $(this).addClass("active").siblings().removeClass("active");　　　　　
                        $(this).css("background", "#ff471a").siblings().css("background", "#cccccc")
                        san = $(this).index();
                        var word = '';
                        for (var j = 0; j < cunArr[san].length; j++) {
                            word += "<li class='f3'><p class='f4'>" + cunArr[san][j].title + "</p></li>";
                        }

                        document.querySelector(".village2").innerHTML = word;
                        $(".map6").hide();
                        // $("map4").show();
                    });
                    $(".map4 .qiye .village2").on('click', 'li', function() {
                        var si = $(this).index();
                        var word = '';
                        word += "<div>" + cunArr[san][si].content + "</div>";
                        document.querySelector(".map6 .map-cnt").innerHTML = word;
                        $(".map4").hide();
                        $(".map6").show();
                        $(".map-cnt p img").width('100%');
                        $(".map-cnt p img").height('80%');
                        // $(".map6 p span").css("font-size", "40px");

                        $(".back21").click(function() {
                            // console.log(cunArr[san][si].map_id);
                            $(".map6").hide();
                            $(".map4").show();
                        });
                        $(".back11").click(function() {
                            $(".map3").show();
                            $(".map4").hide();
                        });

                    })
                })
            } else {
                if (er == 3) {
                    er = 2;
                }
                var name = '';
                for (var j = 0; j < Arr[er].length; j++) {
                    name += "<li><p class='f5'>" + Arr[er][j].title + "</p></li>";
                }
                document.querySelector(".map5 .list-tit").innerHTML = name;
                $(".map5").show();
                $(".map3").hide();
            }

        });
        $(".map5 .list-tit").on('click', 'li', function() {
            $(".map5").hide();
            var san = $(this).index();
            var tit = "";
            if (er == 3) {
                tit = "<div class='tit5'>" + data[2].name + "</div>"
            } else {
                tit = "<div class='tit5'>" + data[er].name + "</div>"
            }
            document.querySelector(".tit5").innerHTML = tit;
            var word = '';
            word += "<div>" + Arr[er][san].content + "</div>";
            document.querySelector(".map-cnt2").innerHTML = word;
            $(".map7").show();
            $(".map-cnt2 p img").width('100%');
            $(".map-cnt2 p img").height('80%');
            // $(".map7 p span").css("font-size", "40px");

            $(".back29").click(function() {
                $(".map5").show();
                $(".map7").hide();
            });
            $(".back12").click(function() {
                $(".map3").show();
                $(".map5").hide();
            });
        });

    })
})
$(".left li").click(function() {
    $(".mien2").hide();
    $(".mien3").show();
})
$(".list-tit li").click(function() {
    $(".map5").hide();
    $(".map6").show();
})
$(".back7").click(function() {
    $(".mien3").hide();
    $(".mien2").show();
})
$(".position").click(function() {
    $(".position span").hide();
    $(".close").show();
    $("#allmap").show();
    $(".anchorBL img").hide();
})
$(".back9").click(function() {
    $(".secretary").hide();
    $(".work2").show();
})
$(".work-box li").click(function() {
    $(".work2").hide();
    $(".secretary").show();
})
$(".back8").click(function() {
    $(".work2").hide();
    $(".main").show();
})
$(".back11").click(function() {
    $(".map3").show();
    $(".map4").hide();
    var str = '';
    var Arr = [];
    var cunstr = '';
    var six = '';
    var cunArr = [];
    $.get(url + 'hongbao', function(data) {

        for (var i = 0; i < data.length; i++) {
            if (i == 2) {
                str += "<li class='b2'><p class='f-tit'>村居企业类</p></li>";
                str += "<li class=b" + 3 + "><p class='f-tit'>" + data[2].name + "</p></li>";
            } else {
                str += "<li class=b" + i + "><p class='f-tit'>" + data[i].name + "</p></li>";
            }
            Arr.push(data[i].message);
        }
        document.querySelector(".village").innerHTML = str;

        $(".village").on('click', 'li', function() {
            $('.village').off('click', 'li');
            er = $(this).index();
            var tit = "";
            if (er == 3) {
                tit = "<div class='tit4'>" + data[2].name + "</div>"
            } else {
                tit = "<div class='tit4'>" + data[er].name + "</div>"
            }
            document.querySelector(".tit4").innerHTML = tit;
            if (er == 2) {
                $.get(url + 'hongcun', function(data) {
                    var san = 0;
                    for (var i = 0; i < data.length; i++) {
                        cunstr += "<li>" + data[i].name + "</li>";
                        // wu = $(this).index();
                        cunArr.push(data[i].message);
                        // six += "<li class='f3'><p class='f4'>" + data[i].message[0].title + "</p></li>";
                        // cunArr.push(data[i].message);
                    }
                    document.querySelector(".tabbox2").innerHTML = cunstr;
                    $(".tabbox2 li:nth-child(1)").css("background", "#ff471a").siblings().css("background", "#cccccc");
                    for (var k = 0; k < cunArr[0].length; k++) {
                        six += "<li class='f3'><p class='f4'>" + cunArr[0][k].title + "</p></li>";
                    }
                    document.querySelector(".village2").innerHTML = six;

                    $(".map4").show();
                    $(".map3").hide();
                    $(".map4 .tabbox2").on('click', 'li', function() {
                        $(this).addClass("active").siblings().removeClass("active");　　　　　
                        $(this).css("background", "#ff471a").siblings().css("background", "#cccccc")
                        san = $(this).index();
                        var word = '';
                        for (var j = 0; j < cunArr[san].length; j++) {
                            word += "<li class='f3'><p class='f4'>" + cunArr[san][j].title + "</p></li>";
                        }

                        document.querySelector(".village2").innerHTML = word;
                        $(".map6").hide();
                        // $("map4").show();
                    });
                    $(".map4 .qiye .village2").on('click', 'li', function() {
                        var si = $(this).index();
                        var word = '';
                        word += "<div>" + cunArr[san][si].content + "</div>";
                        document.querySelector(".map6 .map-cnt").innerHTML = word;
                        $(".map4").hide();
                        $(".map6").show();
                        $(".map-cnt p img").width('100%');
                        $(".map-cnt p img").height('80%');
                        // $(".map6 p span").css("font-size", "40px");

                        $(".back21").click(function() {
                            // console.log(cunArr[san][si].map_id);
                            $(".map6").hide();
                            $(".map4").show();
                        });
                        $(".back11").click(function() {
                            $(".map3").show();
                            $(".map4").hide();
                        });

                    })
                })
            } else {
                if (er == 3) {
                    er = 2;
                }
                var name = '';
                for (var j = 0; j < Arr[er].length; j++) {
                    name += "<li><p class='f5'>" + Arr[er][j].title + "</p></li>";
                }
                document.querySelector(".map5 .list-tit").innerHTML = name;
                $(".map5").show();
                $(".map3").hide();
            }

        });
        $(".map5 .list-tit").on('click', 'li', function() {
            $(".map5").hide();
            var san = $(this).index();
            var tit = "";
            if (er == 3) {
                tit = "<div class='tit5'>" + data[2].name + "</div>"
            } else {
                tit = "<div class='tit5'>" + data[er].name + "</div>"
            }
            document.querySelector(".tit5").innerHTML = tit;
            var word = '';
            word += "<div>" + Arr[er][san].content + "</div>";
            document.querySelector(".map-cnt2").innerHTML = word;
            $(".map7").show();
            $(".map-cnt2 p img").width('100%');
            $(".map-cnt2 p img").height('80%');
            // $(".map7 p span").css("font-size", "40px");

            $(".back29").click(function() {
                $(".map5").show();
                $(".map7").hide();
            });
            $(".back12").click(function() {
                $(".map3").show();
                $(".map5").hide();
            });
        });

    })
})
$(".back10").click(function() {
    $(".map3").hide();
    $(".main").show();
})
$(".back13").click(function() {
    $(".culture2").hide();
    $(".main").show();
})
$(".back14").click(function() {
    $(".theme3").hide();
    $(".main").show();
})
$(".back15").click(function() {
    $(".theme4").hide();
    $(".theme3").show();
    $(".back14").show();
})
$(".back16").click(function() {
    $(".education3").hide();
    $(".main").show();
})
$(".back17").click(function() {
    $(".activity3").hide();
    $(".main").show();
})
$(".back21").click(function() {
    $(".map4").show();
    $(".map6").hide();
    var str = '';
    var Arr = [];
    var cunstr = '';
    var six = '';
    var cunArr = [];
    $.get(url + 'hongbao', function(data) {

        for (var i = 0; i < data.length; i++) {
            if (i == 2) {
                str += "<li class='b2'><p class='f-tit'>村居企业类</p></li>";
                str += "<li class=b" + 3 + "><p class='f-tit'>" + data[2].name + "</p></li>";
            } else {
                str += "<li class=b" + i + "><p class='f-tit'>" + data[i].name + "</p></li>";
            }
            Arr.push(data[i].message);
        }
        document.querySelector(".village").innerHTML = str;

        $(".village").on('click', 'li', function() {
            $('.village').off('click', 'li');
            er = $(this).index();
            var tit = "";
            if (er == 3) {
                tit = "<div class='tit4'>" + data[2].name + "</div>"
            } else {
                tit = "<div class='tit4'>" + data[er].name + "</div>"
            }
            document.querySelector(".tit4").innerHTML = tit;
            if (er == 2) {
                $.get(url + 'hongcun', function(data) {
                    var san = 0;
                    for (var i = 0; i < data.length; i++) {
                        cunstr += "<li>" + data[i].name + "</li>";
                        // wu = $(this).index();
                        cunArr.push(data[i].message);
                        // six += "<li class='f3'><p class='f4'>" + data[i].message[0].title + "</p></li>";
                        // cunArr.push(data[i].message);
                    }
                    document.querySelector(".tabbox2").innerHTML = cunstr;
                    $(".tabbox2 li:nth-child(1)").css("background", "#ff471a").siblings().css("background", "#cccccc");
                    for (var k = 0; k < cunArr[0].length; k++) {
                        six += "<li class='f3'><p class='f4'>" + cunArr[0][k].title + "</p></li>";
                    }
                    document.querySelector(".village2").innerHTML = six;

                    $(".map4").show();
                    $(".map3").hide();
                    $(".map4 .tabbox2").on('click', 'li', function() {
                        $(this).addClass("active").siblings().removeClass("active");　　　　　
                        $(this).css("background", "#ff471a").siblings().css("background", "#cccccc")
                        san = $(this).index();
                        var word = '';
                        for (var j = 0; j < cunArr[san].length; j++) {
                            word += "<li class='f3'><p class='f4'>" + cunArr[san][j].title + "</p></li>";
                        }

                        document.querySelector(".village2").innerHTML = word;
                        $(".map6").hide();
                        // $("map4").show();
                    });
                    $(".map4 .qiye .village2").on('click', 'li', function() {
                        var si = $(this).index();
                        var word = '';
                        word += "<div>" + cunArr[san][si].content + "</div>";
                        document.querySelector(".map6 .map-cnt").innerHTML = word;
                        $(".map4").hide();
                        $(".map6").show();
                        $(".map-cnt p img").width('100%');
                        $(".map-cnt p img").height('80%');
                        // $(".map6 p span").css("font-size", "40px");

                        $(".back21").click(function() {
                            // console.log(cunArr[san][si].map_id);
                            $(".map6").hide();
                            $(".map4").show();
                        });
                        $(".back11").click(function() {
                            $(".map3").show();
                            $(".map4").hide();
                        });

                    })
                })
            } else {
                if (er == 3) {
                    er = 2;
                }
                var name = '';
                for (var j = 0; j < Arr[er].length; j++) {
                    name += "<li><p class='f5'>" + Arr[er][j].title + "</p></li>";
                }
                document.querySelector(".map5 .list-tit").innerHTML = name;
                $(".map5").show();
                $(".map3").hide();
            }

        });
        $(".map5 .list-tit").on('click', 'li', function() {
            $(".map5").hide();
            var san = $(this).index();
            var tit = "";
            if (er == 3) {
                tit = "<div class='tit5'>" + data[2].name + "</div>"
            } else {
                tit = "<div class='tit5'>" + data[er].name + "</div>"
            }
            document.querySelector(".tit5").innerHTML = tit;
            var word = '';
            word += "<div>" + Arr[er][san].content + "</div>";
            document.querySelector(".map-cnt2").innerHTML = word;
            $(".map7").show();
            $(".map-cnt2 p img").width('100%');
            $(".map-cnt2 p img").height('80%');
            // $(".map7 p span").css("font-size", "40px");

            $(".back29").click(function() {
                $(".map5").show();
                $(".map7").hide();
            });
            $(".back12").click(function() {
                $(".map3").show();
                $(".map5").hide();
            });
        });

    })
})
$(".back18").click(function() {
    $(".rect3").hide();
    $(".main").show();
})
$(".back19").click(function() {
    $(".rect4").hide();
    $(".rect3").show();
})
$(".back20").click(function() {
    $(".play3").hide();
    $(".main").show();
    window.location.reload()
})
$(".back24").click(function() {
    $(".article").hide();
    $(".back9").show();
})
$(".back25").click(function() {
    $(".activity4").hide();
    $(".activity3").show();
})
$(".back26").click(function() {
    $(".mien4").hide();
    $(".mien3").show();
    $(".back7").show();
})
$(".back27").click(function() {
    $(".suggest2").hide();
    $(".main").show();
})
$(".suggest").click(function() {
        $(".main").hide();
        $(".suggest2").show();
    })
    // 视频点播的数据获取
$(".play").click(function() {
    $(".main").hide();
    $(".play3").show();
    var str = '';
    var Arr = [];
    $.get(url + 'videos', function(data) {
        for (var i = 0; i < data.length; i++) {
            str += "<li><video src=" + data[i].video + " poster=" + data[i].img + "></video><div class='ufo'><p class='f4'>" + data[i].title + "</p></ufo></li>";
            Arr.push(data[i]);
        }
        document.querySelector(".vi").innerHTML = str;
        $("video").attr({ controls: "controls" })
            // $("video").attr({ poster: "img/UI_logo.png" })

    })

})
$(".rect-box li").click(function() {
    $(".rect3").hide();
    $(".rect4").show();
})

$(".anchorBL img").click(function() {
        $(this).hide();
    })
    //指尖矩阵的数据获取
$(".rect").click(function() {
        $(".main").hide();
        $(".rect3").show();
        var str = '';
        var Arr = [];
        var a = [0, 1]
        var c = ["0", "1", "2", "3"]
        $.get(url + 'zhijian', function(data) {
            if (data.length > c.length) {
                var j = data.length / c.length;
                for (var k = 0; k < j; k++) {
                    c.push(c[0], c[1], c[2], c[3]);
                }
            }
            for (var i = 0; i < data.length; i++) {

                str += "<li class=e" + c[i] + "><p class='f4'>" + data[i].title + "</p></li>";
                Arr.push(data[i]);

            }
            document.querySelector(".rect-box").innerHTML = str;
            $(".rect3 .rect-box").on('click', 'li', function() {
                // $('.tabbox2').off('click', 'li');
                san = $(this).index();
                var word = '';
                for (var j = 0; j < a.length; j++) {
                    word += "<div class=code" + j + "><img src=" + Arr[san].logo + "></div>"
                    if (j = 1) {
                        word += "<div class=code" + j + "><img src=" + Arr[san].er + "></div>"
                    }
                }

                document.querySelector(".rect-code").innerHTML = word;
                $(".rect3").hide();
                $(".rect4").show();
            });
        })
    })
    //工作室的数据获取
$(".studio").click(function() {
        $(".main").hide();
        $(".work2").show();
        var str = '';
        var Arr = [];
        $.get(url + 'gongzuoshi', function(data) {
            for (var i = 0; i < data.length; i++) {
                str += "<li class=a" + i + "><p class='work-f'>" + data[i].name + "</p></li>";
                Arr.push(data[i].message);
            }
            document.querySelector(".work-box").innerHTML = str;
            $(".work2 .work-box").on('click', 'li', function() {
                // $('.tabbox2').off('click', 'li');
                san = $(this).index();
                var word = '';
                var tit = '';
                tit = "<div class=work-tit>" + data[san].name + "</div>"
                for (var j = 0; j < Arr[san].length; j++) {
                    word += "<li><p class='work-f2'>" + Arr[san][j].title + "</p></li>";
                }

                document.querySelector(".work-name").innerHTML = word;
                document.querySelector(".work-tit").innerHTML = tit;
                $(".work2").hide();
                $(".secretary").show();
            });
            $(".secretary .work-name").on('click', 'li', function() {
                // $('.tabbox2').off('click', 'li');
                si = $(this).index();
                var word = '';
                // for (var i = 0; i < Arr[si].length; i++) {
                word += Arr[san][si].content;
                // }

                document.querySelector(".sigle2-cnt").innerHTML = word;
                // $(".secretary").hide();
                $(".back9").hide();
                $(".article").show();
                $(".sigle2-cnt img").width("100%");
                $(".sigle2-cnt img").height("100%");
                // $(".sigle2-cnt p span").css("font-size", "13px")
                $(".sigle2-cnt p ").css("line-height", "18px")
                $(".sigle2-cnt p span").css("color", "#e6e6e6")
                $(".sigle2-cnt p ").css("opacity", "0.8")
                    // $(".sigle2-cnt p:nth-child(3) span").css("opacity", "0.7")
            });
        })
    })
    //洪堡地图的数据获取
$(".map").click(function() {
        $(".main").hide();
        $(".map3").show();
        var str = '';
        var Arr = [];
        var cunstr = '';
        var six = '';
        var cunArr = [];
        $.get(url + 'hongbao', function(data) {

            for (var i = 0; i < data.length; i++) {
                if (i == 2) {
                    str += "<li class='b2'><p class='f-tit'>村居企业类</p></li>";
                    str += "<li class=b" + 3 + "><p class='f-tit'>" + data[2].name + "</p></li>";
                } else {
                    str += "<li class=b" + i + "><p class='f-tit'>" + data[i].name + "</p></li>";
                }
                Arr.push(data[i].message);
            }
            document.querySelector(".village").innerHTML = str;

            $(".village").on('click', 'li', function() {
                $('.village').off('click', 'li');
                er = $(this).index();
                var tit = "";
                if (er == 3) {
                    tit = "<div class='tit4'>" + data[2].name + "</div>"
                } else {
                    tit = "<div class='tit4'>" + data[er].name + "</div>"
                }
                document.querySelector(".tit4").innerHTML = tit;
                if (er == 2) {
                    $.get(url + 'hongcun', function(data) {
                        var san = 0;
                        for (var i = 0; i < data.length; i++) {
                            cunstr += "<li>" + data[i].name + "</li>";
                            cunArr.push(data[i].message);

                        }
                        document.querySelector(".tabbox2").innerHTML = cunstr;
                        $(".tabbox2 li:nth-child(1)").css("background", "#ff471a").siblings().css("background", "#cccccc");
                        for (var k = 0; k < cunArr[0].length; k++) {
                            six += "<li class='f3'><p class='f4'>" + cunArr[0][k].title + "</p></li>";
                        }
                        document.querySelector(".village2").innerHTML = six;

                        $(".map4").show();
                        $(".map3").hide();
                        $(".map4 .tabbox2").on('click', 'li', function() {
                            $(this).addClass("active").siblings().removeClass("active");　　　　　
                            $(this).css("background", "#ff471a").siblings().css("background", "#cccccc")
                            san = $(this).index();
                            var word = '';
                            for (var j = 0; j < cunArr[san].length; j++) {
                                word += "<li class='f3'><p class='f4'>" + cunArr[san][j].title + "</p></li>";
                            }

                            document.querySelector(".village2").innerHTML = word;
                            $(".map6").hide();
                            // $("map4").show();
                        });
                        $(".map4 .qiye .village2").on('click', 'li', function() {
                            var si = $(this).index();
                            var word = '';
                            word += "<div>" + cunArr[san][si].content + "</div>";
                            document.querySelector(".map6 .map-cnt").innerHTML = word;
                            $(".map4").hide();
                            $(".map6").show();
                            $(".map-cnt p img").width('100%');
                            $(".map-cnt p img").height('80%');
                            // $(".map6 p span").css("font-size", "40px");

                            $(".back21").click(function() {
                                // console.log(cunArr[san][si].map_id);
                                $(".map6").hide();
                                $(".map4").show();
                            });
                            $(".back11").click(function() {
                                $(".map3").show();
                                $(".map4").hide();
                            });

                        })
                    })
                } else {
                    if (er == 3) {
                        er = 2;
                    }
                    var name = '';
                    for (var j = 0; j < Arr[er].length; j++) {
                        name += "<li><p class='f5'>" + Arr[er][j].title + "</p></li>";
                    }
                    document.querySelector(".map5 .list-tit").innerHTML = name;
                    $(".map5").show();
                    $(".map3").hide();
                }

            });
            $(".map5 .list-tit").on('click', 'li', function() {
                $(".map5").hide();
                var san = $(this).index();
                if (er == 3) {
                    tit = "<div class='tit5'>" + data[2].name + "</div>"
                } else {
                    tit = "<div class='tit5'>" + data[er].name + "</div>"
                }
                document.querySelector(".tit5").innerHTML = tit;
                var word = '';
                word += "<div>" + Arr[er][san].content + "</div>";
                document.querySelector(".map-cnt2").innerHTML = word;
                $(".map7").show();
                $(".map-cnt2 p img").width('100%');
                $(".map-cnt2 p img").height('80%');
                // $(".map7 p span").css("font-size", "40px");

                $(".back29").click(function() {
                    $(".map5").show();
                    $(".map7").hide();
                });
                $(".back12").click(function() {
                    $(".map3").show();
                    $(".map5").hide();
                });
            });

        })
    })
    //活动预告的数据获取
$(".activity").click(function() {
        $(".main").hide();
        $(".activity3").show();
        var str = '';
        var tip = '';
        var Arr = [];
        g = ['0', '1', '2', '3', '4'];
        $.get(url + 'huodong', function(data) {
            if (data.length > g.length) {
                var j = data.length / g.length;
                for (var k = 0; k < j; k++) {
                    g.push(g[0], g[1], g[2], g[3], g[4]);
                }
            }
            if (data.length == 0) {
                tip = "当前月份暂无活动"
                document.querySelector(".pp").innerHTML = tip;
            } else {
                $(".pp").hide();
            }
            // document.querySelector(".act-box").innerHTML = tip;
            for (var i = 0; i < data.length; i++) {
                if (i < 9) {
                    str += "<li class=act-a" + g[i] + "><p class='act-f1'>" + 0 + (i + 1) + "</p><div class='q'><p class='act-f2'>" + data[i].title + "</p><p>" + data[i].small + "</p></div></li>";
                } else {
                    str += "<li class=act-a" + g[i] + "><p class='act-f1'>" + (i + 1) + "</p><div class='q'><p class='act-f2'>" + data[i].title + "</p><p>" + data[i].small + "</p></div></li>";
                }
                Arr.push(data[i]);
            }
            document.querySelector(".act-box").innerHTML = str;
            $(".activity3 .act-box").on('click', 'li', function() {
                $(".activity3").hide();
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                var san = $(this).index();
                var word = '';
                word += Arr[san].content;
                document.querySelector(".act-cnt").innerHTML = word;
                $(".activity4").show();
                $(".act-cnt img").width("100%");
                $(".act-cnt img").height("100%");
            });
        })
    })
    //主题党日的数据获取
$(".theme").click(function() {
    $(".main").hide();
    $(".theme3").show();
    var str = '';
    var er = '';
    var Arr = [];
    var cla = ['c1', 'c2', 'c3'];
    $.get('http://139.159.214.233:7778/api/branches', function(data) {
        if (data.length > cla.length) {
            var j = data.length / cla.length;
            for (var k = 0; k < j; k++) {
                cla.push(cla[0], cla[1], cla[2]);
            }
        }
        for (var i = 0; i < data.length; i++) {
            str += "<li class=" + cla[i] + "><p class='num2'>" + data[i].id + "</p><p class='str'>" + data[i].name + "</p><p class='day'>主题党日</p></li>";
            Arr.push(data[i].message);
        }
        document.querySelector(".theme-list").innerHTML = str;
    });
    $(".theme-list").on('click', 'li', function() {
        er = $(this).index();
        localStorage.setItem('sum', Arr[er].length);
        var name = '';
        for (var j = 0; j < Arr[er].length; j++) {
            name += "<div><img src=" + Arr[er][j].image + "><p class='f7'>" + Arr[er][j].title + "</p> </div>";
            //p img 
        }
        document.querySelector(".inner").innerHTML = name;
        $(".back14").hide();
        $(".theme4").show();
    });
})
$(".theme-list li").click(function() {
    $(".theme3").hide();
    $(".theme4").show();
})
$(".b0").click(function() {
    $(".map3").hide();
    $(".map5").show();
})
$(".b1").click(function() {
    let site = "区域站点类";
    $(".map3").hide();
    $(".map5").show();
    document.querySelector(".map-tit").innerHTML = site;
})
$(".b2").click(function() {
    let site = "网格类";
    $(".map3").hide();
    $(".map5").show();
    document.querySelector(".map-tit").innerHTML = site;
})
$(".b3").click(function() {
        let site = "村居企业类";
        $(".map3").hide();
        $(".map4").show();
        document.querySelector(".map-tit").innerHTML = site;
        $("ul .active").css("background", "#ff471a");
    })
    //文明践行的数据获取
$(".civilization").click(function() {
        $(".culture2").show();
        $(".main").hide();
        var str = '';
        var Arr = '';
        $.get(url + 'wenming', function(data) {
            // for (var i = 0; i < data.length; i++) {
            str = data[0].title;
            Arr += data[0].content;
            // }
            document.querySelector(".clt-cnt").innerHTML = str;
            document.querySelector(".clt-cnt").innerHTML = Arr;
            $("table td").css('border', '1px solid #404040');
            $("table td  span strong").removeAttr("font-size");
        })
    })
    //誓词教育的数据获取
$(".education").click(function() {
    $(".education3").show();
    $(".main").hide();
    var str = '';
    var Arr = [];
    $.get(url + 'shici', function(data) {
        for (var i = 0; i < data.length; i++) {
            str += "<li><p> " + data[i].title + "</p></li>";
            Arr.push(data[i]);
            name = "<div class='active' style='background-image:url(./img/UI_bor_1.png'><p class='abc'>" + data[0].content + "<p></div>";
            // document.querySelector(".education-aa").innerHTML = name;
        }
        document.querySelector(".education-tab").innerHTML = str;
        document.querySelector(".education-aa").innerHTML = name;
        $(".education-tab li:nth-child(1)").css("background-image", "url(./img/UI_btn_gray.png)").siblings().css("background-image", "url(./img/UI_btn_gray.png)");
        $(".education-tab").on('click', 'li', function() {
            $(this).addClass("active").siblings().removeClass("active");　　　　
            var index = $(this).index();　　　　
            $(this).css("background-image", "url(./img/UI_btn_green.png)").siblings().css("background-image", "url(./img/UI_btn_gray.png)");
            $(this).parent().siblings().children().eq(index).addClass("active").siblings().removeClass("active");
            $(".education-aa>div").eq(index).addClass("active").siblings().removeClass("active");　
            $(".education-aa>div").eq(index).show().siblings().hide();
            er = $(this).index();
            var name = '';
            if (er == 0) {
                name += "<div class='active' style='background-image:url(./img/UI_bor_1.png' ><p class='abc'>" + Arr[er].content + "<p></div>";

            } else {
                name += "<div class='active' style='background-image:url(./img/UI_bor_1.png' ><p class='abc'>" + Arr[er].content + "<p></div>";
            }
            document.querySelector(".education-aa").innerHTML = name;　
            if (index) {
                $(".education-aa>div").eq(index).css("background-image", "url(./img/UI_bor_1.png)")

            }

        });
    })
})

//三张清单选项卡
$(function() {　　
    $(".matter>div.active").show();
    $(".tabbox li").click(function() {　　
        $(this).addClass("active").siblings().removeClass("active");　　　　
        var index = $(this).index();　　　　
        $(this).css("background", "#ff471a").siblings().css("background", "#cccccc");
        $(this).parent().siblings().children().eq(index).addClass("active").siblings().removeClass("active");
        $(".matter>div").eq(index).show().siblings().hide();　　
    });

    //红堡地图的村居企业类选项卡
    $(".qiye>div.active").show();
    // $(".active").show();
    $(".mapbox li").click(function() {　　
        $(this).addClass("active").siblings().removeClass("active");　　　　
        var index = $(this).index();　　　　
        $(this).css("background", "#ff471a").siblings().css("background", "#cccccc");
        $(this).parent().siblings().children().eq(index).addClass("active").siblings().removeClass("active");
        $(".qiye>div").eq(index).show().siblings().hide();　　
    });

    //主题党日轮播图
    var num = 0;
    $(".next").click(function() {
        if (num < localStorage.getItem('sum') - 1) {
            num++;
        } else {
            num = 0;
        }
        var move = num * -289 + "px";
        $(".inner").animate({ "marginLeft": move }, 500);
    })

    $(".prev").click(function() {
            if (num > 0) {
                num = num - 1;
            } else {
                num = localStorage.getItem('sum') - 1;
            }
            var movePx = num * -289 + "px";
            $(".inner").animate({ "marginLeft": movePx }, 500);
        })
        //誓词教育
    $(".education-cnt>div").hide();
    $(".education-cnt .active").show();
    $(".education-tab li").click(function() {　　
        $(this).addClass("active").siblings().removeClass("active");　　　　
        var index = $(this).index();　　　　
        $(this).css("background-image", "url(./img/green.png)").siblings().css("background-image", "url(./img/gray.png)");
        $(this).parent().siblings().children().eq(index).addClass("active").siblings().removeClass("active");
        $(".education-aa>div").eq(index).addClass("active").siblings().removeClass("active");　
        $(".education-aa>div").eq(index).show().siblings().hide();
        if (index) {
            $(".education-aa>div").eq(index).css("background-image", "url(./img/UI_bor_2.png)")
                // console.log("huantu")
        }

    });


});