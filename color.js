
// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
	$("#orderedlist").css({"color":'#FFFFFF',"background-color": "#ff8800",});
	$("#orderedlist li:last").hover(function(){
		$(this).addClass("green");
	},function(){
		$(this).removeClass("green");
	});
	$("#orderedlist2").css({"color":'green',"background-color": "#80BFFF",});
	$("#orderedlist2 li:last").hover(function(){
		$(this).addClass("blue");
	},function(){
		$(this).removeClass("blue");
	});
});


