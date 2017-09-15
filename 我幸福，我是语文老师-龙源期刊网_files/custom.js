// JavaScript Document

$(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
		$(".nav").slideUp(250);
        $(".header").css({"boxShadow":"0 0 5px #999","paddingBottom":"0px"});
		$(".l-s-u").css("marginTop","10px");
    }
    else {
		$(".nav").slideDown(250);
         $(".header").css({"boxShadow":"none","paddingBottom":"10px"});
		$(".l-s-u").css("marginTop","25px");
    }
});

$(function () {

    //login 
    $(".LoginBtn").click(function(){ 
		$(".login,.fade").fadeIn("fast");
	}); 
	$(".login-close").click(function(){ 
		$(".login,.fade").fadeOut("fast");
	}); 
	
	$(".login-tc-titR").click(function(){ 
		$(".login-tc-wrap,.fade").fadeOut("fast");
	}); 

	//weixin 
    $(".gfwx").hover(
	function () { $(".weixin").show().animate({right:105,opacity:1 },300);}, function () { $(".weixin").animate({right:90,opacity:0 },300);setTimeout(function(){$(".weixin").hide()},300); });
	
	//UCenter 
    $(".uname").hover(
	function(){$(".uname ul").slideDown("fast");}, function(){$(".uname ul").slideUp("fast");});

	//bookUp 
    $(".publicWrap p").hover(
	function () { $(this).animate({ marginTop: '0px' }, 300); }, function () { $(this).animate({ marginTop: '5px' }, 300); });

    // freeW
    $(".freeW ul li a").hover(
	function () { $(this).animate({ marginTop: '10px' }, 300); }, function () { $(this).animate({ marginTop: '15px' }, 300); });

    //surplus
	$(".surplus").click(function () {
		$(".surplus-art").fadeIn();
		$(".art-pre").fadeOut("slow");
	});
	
	//surplus
	$(".tel-tj").click(function () {
		$(".tel-tip").show();
	});
	//收藏
	//$(".tools-stow").toggle(
	//function(){
	//	$(this).addClass("tools-cancel");
	//	//$(".a-stow").fadeIn("fast").html("收藏成功");
	//	//setTimeout(function(){$(".a-stow").fadeOut("fast")},1000);
	//	},
	//function(){
	//	$(this).removeClass("tools-cancel");
	//	//$(".a-stow").addClass("a-s").fadeIn("fast").html("取消收藏");
	//	//setTimeout(function(){$(".a-stow").fadeOut("fast")},1000);
	//});
	//分享
	$(".tools-share").click(function(){ 
		$(this).parent().parent().find(".shareBtn").fadeIn("fast");
		$(".sharecover").fadeIn("fast");
	}); 
	 
	$(".shareBtn").hover(function(){ 
		$(this).fadeIn("fast");
		},function(){$(this).fadeOut(80);
		$(".sharecover").fadeOut("fast");
	});  
	$(".sharecover").click(function(){ 
		$(".shareBtn,.sharecover").fadeOut("fast");
	});
	
    //search years > slide
    $(".search-more").click(function () {
        $(this).hide();
        $(this).parent('div').find('.result-myear').slideDown();
    });
    $(".search-back").click(function () {
        $(this).parent('div').parent('div').find('.result-myear').slideUp();
        $(this).parent('div').parent('div').find('.search-more').fadeIn();
    });

    //search years > tab
    $('.fadetab1 li').click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $(this).parent('ul').parent('div').find('.result-myear li').removeClass('current');
    });
    $(".fadetab2 li").click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $(this).parent('ul').parent('div').parent('div').find('.fadetab1 li').removeClass('current');
    });

});

//add by clh
(function ($) {
    $.fn.extend({
        bindEnterDown: function (callback) { //当按下回车键时，触发回调事件
            $(this).keypress(function (e) {
                //e.preventDeafult();
                e.stopPropagation();
                //alert('ok');
                if (e.keyCode === 13) {
                    //alert('test');
                    callback();
                    return false;
                }
                //return false;
            });
        }
    });
})(jQuery)

$(window).load(function(){
	$(".print-div").height($(window).height());   
	$(window).resize(function(){  
	$(".print-div").height($(window).height());        
	})
});

$(document).unbind("keydown.spgl_sp_esc").bind("keydown.spgl_sp_esc",function(e){
	var keyCode = window.event?e.keyCode:e.which;
	if(keyCode==27){  //esc按钮
		$(".fade,.login,#print-div").fadeOut();
		$("html").removeClass("hidden");
	}
});

//search slide
function drop_mouseover(pos){
	try{window.clearTimeout(timer);}catch(e){}
}
function drop_mouseout(pos){
	var posSel=document.getElementById(pos+"Sel").style.display;
	if(posSel=="block"){
		timer = setTimeout("drop_hide('"+pos+"')", 1000);
	}
}
function drop_hide(pos){
	document.getElementById(pos+"Sel").style.display="none";
}
function search_show(pos,searchType,href){
    document.getElementById(pos+"SearchType").value=searchType;
    document.getElementById(pos+"Sel").style.display="none";
    document.getElementById(pos+"Slected").innerHTML=href.innerHTML;
    document.getElementById(pos+'q').focus();
}