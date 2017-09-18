var box = $('.box');
var imgBox = $('.imgBox');
var img = $('.imgBox img');
var len = $('.box div').length;
var maxWidth = 900;
var maxHeight = 400;
var seWidth = 290;   //当图片大于2张时图片的宽高
var seHeight = 290;
$(function() {
	switch (len)
	{
		case 1:
			hander(1);
			break;
		case 2:
			hander(2);
			break;
		case 3:
			hander(2);
			break;
		case 4:
			hander(4);
			break;
		case 5:
			hander(2);
			break;
		case 6:
			hander(2);
			break;
		case 7:
			hander(2);
			break;
		case 8:
			hander(2);
			break;
		case 9:
			hander(2);
			break;
	}
})

/*图片个数处理函数*/
function hander(n) {
	imgBox.each(function() {
		var width = $(this).children('img').width();
		var height = $(this).children('img').height();
		//h2为宽度确定时等比例高度
		var h2 = seWidth/width*height;
		//w2为高度确定时等比例宽度
		var w2 = seHeight/height*width;
		if(n == 1) {	
			/*当图片为宽图的时候，固定高度，宽度等比缩放*/
			imgBox.removeClass('overFlow');
			$(this).children('img').css('height', maxHeight)	
		}
		if(n == 2 || n == 3 || n >= 5 && n <= 9) {
			/*当图片宽度大于高度时，图片根据高度进行缩放
			 
			**/
			if(width > height) {
				$(this).children('img').css('height', seHeight);
				$(this).children('img').css('left', -(w2 - seWidth)/2);
			}
			else if(width < height) {
				$(this).children('img').css('width', seWidth);
				$(this).children('img').css('top', -(h2 - seHeight)/2);
				
			}else{
				$(this).children('img').css('width', seWidth);
			}			
		}
		if(n == 4) {
			imgBox.eq(1).css('margin-right','40px');
			if(width > height) {
				$(this).children('img').css('height', seHeight);
				$(this).children('img').css('left', -(w2 - seWidth)/2);
			}
			else if(width < height) {
				$(this).children('img').css('width', seWidth);
				$(this).children('img').css('top', -(h2 - seHeight)/2);
				
			}else{
				$(this).children('img').css('width', seWidth);
			}
		}
			
	})	
}
//layer弹出层
imgBox.each(function() {
	$(this).on('click', function() {
		var maxH = 600;
		var img = new Image();
		var src = $(this).children('img').attr('src');
		img.src = src;
	    var newWidth = img.width;
	    var newHeight = img.height; 
		var dom = '<img src='+src+' class="imgStyle">';
		//alert($(this).children('img').attr('src'))
		if(newHeight/2 >= maxH){
			newHeight = maxH*2;
			newWidth = maxH/newHeight*newWidth*2;
		}
		var index = layer.open({
			type:1,
			title:false,
			area:[newWidth/2+'px',newHeight/2+'px'],
			skin:'class-layer',
			content:dom
		})
		/*if(newHeight/2 >= maxH){
			index.area = [maxH/newHeight*newWidth+'px',maxH+'px'];
		}else{
			alert(newHeight/2);
			index.area = [newWidth/2+'px',newHeight/2+'px'];
		}*/
		
	})
})
