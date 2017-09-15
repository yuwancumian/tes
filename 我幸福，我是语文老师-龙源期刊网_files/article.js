$(document).ready(function () {

    $(".cancel,.maga-tc-titR").click(function () {
        $(".maga-tc-con,.maga-tc-buy,.maga-tc-buy-noMoney").fadeOut("fast");
        setTimeout(fade, 100);
    });
    function fade() {
        $("#fade").fadeOut();
    }
});

$(document).ready(function () {

    $(".AH-login-close,.login-tc-titR,.cancel,.maga-tc-titR,#fade").click(function () {
        $(".AH-login-wrap,.login-tc-wrap,.maga-tc-con").fadeOut("fast");
        setTimeout(fade, 100);
    });
    function fade() {
        $("#fade").fadeOut();
    }
});
$(document).unbind("keydown.spgl_sp_esc").bind("keydown.spgl_sp_esc", function (e) {
    var keyCode = window.event ? e.keyCode : e.which;
    if (keyCode == 27) {  //esc按钮
        $("#fade,.wy-tc,.czk-tc,.AH-login-wrap,.maga-tc-con,.maga-tc-buy,maga-tc-buy,.login-tc-wrap,.maga-tc-buy-noMoney").fadeOut();

    }
});
function LoadFavoriteData(titleid) {
    var type = "CheckArticleFavorite";
    var datas = {titleid: titleid, type: type };
    $.ajax({
        type: "POST",
        url: "/Handle/MagazineProcess.ashx",
        data: datas,
        dataType: 'json',

        success: function (jsonResult) {
            if (jsonResult == null) {
                //  regon.find(".SortsConInfo").text('');
            }
            else {
                if (jsonResult == true) {
                    $(".tools-stow").addClass("onclick");
                      $(".article-stow").unbind().click(function () {
                        DelFavoriteData(titleid);
                    });
                }

            }
        }

    });
}
function AddFavoriteData(titleid) {
    var type = "AddArticleFavorite";
    var datas = { titleid: titleid,articletype:1, type: type };
  
    $.ajax({
        type: "POST",
        url: "/Handle/MagazineProcess.ashx",
        data: datas,
        dataType: 'json',
        success: function (jsonResult) {
            if (jsonResult == null) {
                //  regon.find(".SortsConInfo").text('');
            }
            else {
                if (jsonResult == 1) {
                    $(".tools-stow").addClass("onclick");
                    $(".article-stow").unbind().click(function () {
                        DelFavoriteData(titleid);
                    });
                }
            }
        }

    });
}

function DelFavoriteData( titleid) {
   
    var type = "DelArticleFavorite";
    var datas = { titleid: titleid, type: type };
    $.ajax({
        type: "POST",
        url: "/Handle/MagazineProcess.ashx",
        data: datas,
        dataType: 'json',
        success: function (jsonResult) {
            if (jsonResult == null) {
                //  regon.find(".SortsConInfo").text('');
            }
            else {
                if (jsonResult == 1) {
                    $(".tools-stow").removeClass("onclick");
                    $(".article-stow").unbind().click(function () {
                        AddFavoriteData(titleid);
                    });
                }
            }
        }

    });
}

function LoadMoreContent(titleid) {
    var type = "getmorecontent";
    var datas = { titleid: titleid, type: type };
    $.ajax({
        type: "POST",
        url: "/Handle/ArticleProcess.ashx",
        data: datas,
        dataType: 'json',

        success: function (jsonResult) {
            if (jsonResult == null) {
                //  regon.find(".SortsConInfo").text('');
            }
            else {
                    $(".textWrap").append(jsonResult);
            }
        }

    });
}
