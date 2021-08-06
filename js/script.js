$(function () {
  // var aryData = [];
  // var api = ['SCD3', 'MLD1', 'SCD7', 'FBD15', 'FDD1'];
  // for (let i = 0; i < api.length; i++) {
  //   $.ajax({
  //     type: "GET",
  //     dataType: "json",
  //     async: false,
  //     url: "https://fubonliferwdtest.moneydj.com/w/djjson/cb/cbDataJson.djjson?A=" + api[i] + "",
  //     // url: "https://invest.fubonlife.com.tw/w/djjson/cb/cbDataJson.djjson?A=" + api[i] + "",
  //     error: function (xhr) {
  //       alert("Ajax request 發生錯誤", xhr);
  //     },
  //     success: function (res) {
  //       // console.log(res)
  //       apiData(res);
  //     }
  //   })
  // }

  // function apiData(res) {
  //   //{ "ResultSet" : { "ExpireTime" : "2021/5/10 下午 07:00:00", "StatusCode" : "200", "Result" : [ {"ID":"ACD2", "Date":"2019/02/11", "Nav":"9.8200", "3M":"1.30", "1Y":"-0.86", "CTD":"12.52" } ]}}
  //   aryData.push(res);
  //   let apiName, title, title1, title2, mark;
  //   let dom = "";
  //   let domAry = [];
  //   for (let j = 0; j < aryData.length; j++) {
  //     var number = parseInt(j) + 1;
  //     // api
  //     if (api[j] == 'SCD3') {
  //       apiName = 'SCD3';
  //       pdfName = 'SCD3';
  //       title = '富邦人壽委託施羅德投信';
  //       title1 = '享得利';
  //       title2 = '全權委託投資帳戶-G級別';
  //       mark = '# 股債平衡';
  //     } else if (api[j] == 'MLD1') {
  //       apiName = 'MLD1';
  //       pdfName = 'MLD1';
  //       title = '富邦人壽委託貝萊德投信';
  //       title1 = '享倍利月提解';
  //       title2 = '全權委託投資帳戶';
  //       mark = '# 100%ETF';
  //     } else if (api[j] == 'SCD7') {
  //       apiName = 'SCD3';
  //       pdfName = 'SCD7';
  //       title = '富邦人壽委託施羅德投信';
  //       title1 = '享得利';
  //       title2 = '全權委託投資帳戶-G1級別';
  //       mark = '# 股債平衡';
  //     } else if (api[j] == 'FBD15') {
  //       apiName = 'FBD15';
  //       pdfName = 'FBD15';
  //       title = '富邦人壽委託富邦投信';
  //       title1 = '享富利';
  //       title2 = '全權委託投資帳戶';
  //       mark = '# 動態配置';
  //     } else if (api[j] == 'FDD1') {
  //       apiName = 'FDD1';
  //       pdfName = 'FDD1';
  //       title = '富邦人壽委託富達投信';
  //       title1 = '享優利';
  //       title2 = '全權委託投資帳戶';
  //       mark = '# ESG評級風控強化';
  //     }
  //     // 1Y 
  //     if(!(aryData[j].ResultSet.Result[0]["1Y"])) {
  //       var y = "Coming soon";
  //     } else if (aryData[j].ResultSet.Result[0]["1Y"] != "N/A") {
  //       var y = aryData[j].ResultSet.Result[0]["1Y"] + "%";
  //     } else {
  //       var y = aryData[j].ResultSet.Result[0]["1Y"];
  //     }
  //     // 3M
  //     if (!(aryData[j].ResultSet.Result[0]["3M"])){
  //       var mmm = "Coming soon";
  //     }else if (aryData[j].ResultSet.Result[0]["3M"] != "N/A") {
  //       var mmm = aryData[j].ResultSet.Result[0]["3M"] + "%";
  //     } else {
  //       var mmm = aryData[j].ResultSet.Result[0]["3M"];
  //     }
  //     // CTD
  //     if (!(aryData[j].ResultSet.Result[0]["CTD"])) {
  //       var ctd = "Coming soon";
  //     }else if (aryData[j].ResultSet.Result[0]["CTD"] != "N/A") {
  //       var ctd = aryData[j].ResultSet.Result[0]["CTD"] + "%";
  //     } else {
  //       var ctd = aryData[j].ResultSet.Result[0]["CTD"];
  //     }
  //     //Date
  //     if(!(aryData[j].ResultSet.Result[0]["Date"])) {
  //       var date = "Coming soon"
  //     } else {
  //       var date = aryData[j].ResultSet.Result[0]["Date"]
  //     }
  //     //Nav
  //     if(!(aryData[j].ResultSet.Result[0]["Nav"])) {
  //       var nav = "Coming soon"
  //     } else {
  //       var nav = aryData[j].ResultSet.Result[0]["Nav"]
  //     }
  //     dom += '<div>';
  //     dom += '<div class="md1_model targets' + number + '">';
  //     dom += '<p>' + mark + '</p>';
  //     dom += '<p>' + title + '</p>';
  //     dom += '<p>' + title1 + '<br>' + title2 + '</p>';
  //     dom += '<p>(全權委託帳戶之資產撥回機制來源可能為本金)</p>';
  //     dom += '<table>';
  //     dom += '<tr style="border-bottom: 1px solid #9FA0A0;">';
  //     dom += '<td class="tableBlack">淨值日期</td>';
  //     dom += '<td colspan="2" class="tableBlue">' + date + '</td>';
  //     dom += '</tr>';
  //     dom += '<tr style="border-bottom: 1px solid #9FA0A0;">';
  //     dom += '<td class="tableBlack">淨值</td>';
  //     dom += '<td colspan="2" class="tableBlue">' + nav + '</td>';
  //     dom += '</tr>';
  //     dom += '<tr>';
  //     dom += '<td class="tableGray"></td>';
  //     dom += '<td class="tableGray">3個月</td>';
  //     dom += '<td class="tableBlue">' + mmm + '</td>';
  //     dom += '</tr>';
  //     dom += '<tr>';
  //     dom += '<td class="tableBlack">績效(含息)</td>';
  //     dom += '<td class="tableGray">1年</td>';
  //     dom += '<td class="tableBlue">' + y + '</td>';
  //     dom += '</tr>';
  //     dom += '<tr>';
  //     dom += '<td class="tableGray"></td>';
  //     dom += '<td class="tableGray">成立以來</td>';
  //     dom += '<td class="tableBlue">' + ctd + '</td>';
  //     dom += '</tr>';
  //     dom += '</table>';
  //     dom += '<div class="md1_btn">';
  //     dom += '<div id="md2" class="md1Btn md1Btn1"><a href="https://invest.fubonlife.com.tw/w/CustMap/CustFundIDMap.djhtm?A=' + pdfName + '&DownFile=1" target="_blank">查看月報</a></div>';
  //     dom += '<div class="md1Btn md1Btn2"><a href="https://invest.fubonlife.com.tw/life/hot/prod_' + apiName + '/page_01-1.html"  target="_blank">帳戶介紹</a></div>';
  //     dom += '</div>';
  //     dom += '</div>';
  //     dom += '</div>';
  //   }
  //   domAry.push(dom);
  //   // console.log(domAry);

  //   $("#md1_slick").empty();
  //   $("#md1_slick").append(domAry);
  // }

  var $window = $(window);
  var $goTopBtn = $("#goTop");

  // gotop
  $goTopBtn.on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    });
    return false;
  });

  // Reserve talent
  var mm = window.matchMedia("(max-width: 1200px)");
  mm.addListener(resizeWidth);
  $(window).load(function () {
    resizeWidth(mm);
  });

  function resizeWidth(pMatchMedia) {
    if (pMatchMedia.matches) {
      //小於768時執行的js
      // changePhotoMaxShirt();
      open();
      close();
      goTopScroll();
      // navClick();
      mbNavLi();
    } else {
      //大於768時執行的js
      // changePhotoMaxLong();
      goTopScroll();
    }
  }

  function goTopScroll() {
    // scroll
    $window
      .on("scroll", function () {
        if ($window.scrollTop() > 0) {
          $goTopBtn.stop().animate({
            bottom: "75px"
          });
          $("header").addClass("onFixed");
        } else {
          $goTopBtn.stop().animate({
            bottom: "-80px"
          });
          $("header").removeClass("onFixed");
        }
      })
      .scroll();
  }

  function open() {
    $(".h_open").click(function () {
      $("header nav ul").css("display", "block");
    })
  }

  function close() {
    $(".h_close").click(function () {
      $("header nav ul").css("display", "none");
    })
  }

  function mbNavLi() {
    $("#nav_title>li").on("click", function () {
      if ($(this).find($("li")).length >= 2) {
        $(this).find($("li")).css({
          width: "100%"
        });
      }
    });
  }

  // header跳轉
  $("nav ul a").on("click", function () {
    var go = $(this).attr("href");
    if ($(go).offset() != undefined) {
      $("html")
        .stop()
        .animate({
            scrollTop: $(go).offset().top - 80
          },
          1000
        );
    }
    return false;
  });

  // md1
  $(".md1Btn1").hover(function () {
    $(this).css("background", "linear-gradient(to right, #4f67cb,#58d8e5)");
  }, function () {
    $(".md1Btn1").css("background", "linear-gradient(to right, #465dc2,#3accdd)");
  });

  $(".md1Btn2").hover(function () {
    $(this).css("background-color", "#bfbfc0");
  }, function () {
    $(".md1Btn2").css("background-color", "#C9CACA");
  });
  // md1 END

  // md2
  $(".md2Btn").hover(function () {
    $(this).css("background", "linear-gradient(to right, #008fc7,#008fc7)");
  }, function () {
    $(this).css("background", "linear-gradient(to right, #c9caca,#c9caca)");
  });

  $(".md2Btn").click(function () {
    $(".md2Btn").removeClass("active");
    $(this).addClass("active");
    let btn = $(this).attr("alt");
    $(".product").css("display", "none").removeClass("on");
    $("." + btn + "").css("display", "block").addClass("on");
  });
  // md2 END

  //md3
  $(".md3_img").click(function () {
    $(this).colorbox();
  });

  $(".fbBtn img").hover(function () {
    $(this).attr("src", "./images/video_fb.png");
  }, function () {
    $(".fbBtn img").attr("src", "./images/video_fb2.png");
  });

  $(".lineBtn img").hover(function () {
    $(this).attr("src", "./images/video_line.png");
  }, function () {
    $(".lineBtn img").attr("src", "./images/video_line2.png");
  });
  // md3 END

  //md4
  $(".md4_read").hover(function () {
    $(this).css("color", "#008fc7");
    $(this).find(".md4_arrow").attr("src", "./images/md4_arrow_hover.png");
  }, function () {
    $(".md4_read").css("color", "#9fa0a0");
    $(".md4_arrow").attr("src", "./images/md4_arrow.png");
  });
  // md4 END

  //md5
  $(".md5_link a").hover(function () {
    $(".md5_link a").css("color", "#231815");
    $(".md5_img").attr("src", "./images/md5_arrow_hover.png")
  }, function () {
    $(".md5_link a").css("color", "#9fa0a0");
    $(".md5_img").attr("src", "./images/md5_arrow.png")
  });

  $(".md5_btn").hover(function () {
    $(this).css({
      "background": "linear-gradient(to right, #4f67cb,#58d8e5)"
    });
  }, function () {
    $(".md5_btn").css({
      "background": "linear-gradient(to right, #465dc2,#3accdd)"
    });
  });
  // md5 END

  // play youtube
  if ($(window).width() >= 768) {

    $(".youtube").each(function () {
      var w = 640;
      var h = 360;
      if ($(this).attr("data-w") != "" && $(this).attr("data-w") != undefined) w = $(this).attr("data-w");
      if ($(this).attr("data-h") != "" && $(this).attr("data-w") != undefined) h = $(this).attr("data-h");
      $(this).colorbox({
        iframe: true,
        innerWidth: w,
        innerHeight: h,
        maxWidth: '95%',
        maxHeight: '95%'
      });
    })
  } else {
    $(".youtube").each(function () {
      w = $(window).width() - 20;
      h = w * 0.56;
      if ($(this).attr("data-w") != "" && $(this).attr("data-w") != undefined) w = $(this).attr("data-w");
      if ($(this).attr("data-h") != "" && $(this).attr("data-w") != undefined) h = $(this).attr("data-h");
      $(this).colorbox({
        iframe: true,
        innerWidth: w,
        innerHeight: h,
        maxWidth: '95%',
        maxHeight: '95%'
      });
    })
  }
  // play youtube END

});