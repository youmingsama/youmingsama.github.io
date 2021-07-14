var catalogMagnet = new Vue({
	el:'#catalogMagnet',
	data:{
		message:'你好！欢迎访问我的主页youmingsama!',
		link: [],
		postnum:[],
		//这里是磁贴背景图片
		img:[
			"https://youmingsama-1305309599.file.myqcloud.com/kksk/dajiejie.jpg",
			"https://youmingsama-1305309599.file.myqcloud.com/kksk/psb112.jpg",
			"https://youmingsama-1305309599.file.myqcloud.com/kksk/img2psb3.png",
			"https://youmingsama-1305309599.file.myqcloud.com/kksk/img2tuosai.jpg",
			"https://youmingsama-1305309599.file.myqcloud.com/kksk/tupianpian.jpg",
			"https://youmingsama-1305309599.file.myqcloud.com/kksk/img2b6.jpg",
			"https://youmingsama-1305309599.file.myqcloud.com/kksk/img2b7.png",
			"https://youmingsama-1305309599.file.myqcloud.com/kksk/img2b8.png",
		],
		//这里是磁贴描述信息
		describe:[
			"呐那里有Roman吗",
			"产生了bugggggg",
			"打游戏菜又怎么了",
			"我的代码太烂了",
			"呐呐呐呐呐呐",
			"摸鱼大师竟然是我",
			"碎碎念在碎碎念ing",
			"假的！！！",
		],
		//这里是磁贴的文字颜色
		figLetColor: {color:'white'},
		//这里是磁贴的文字遮罩
		figLetimg: {backgroundImage: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.0) 25%,rgba(16,16,16,0) 100%)'},
		//这里是当磁贴图片为透明背景png时默认展示的背景颜色
		figbackColor: {background:'#000000 URL()'},
		//这里是当磁贴图片为透明背景png时默认展示的凹凸效果
		figShadow: {boxShadow: 'inset 3px 3px 18px 0px rgba(50,50,50, 0.4)'},
	},

})

catalogMagnet.link = $(".categoryMagnetitem").children().children().children("a");
catalogMagnet.postnum = $(".categoryMagnetitem").children().children().children("span");
var linecolor = catalogMagnet.figLetColor.color
$("<style type='text/css' id='dynamic-after' />").appendTo("head");
$("#dynamic-after").text(".magnetname:after{background:" + linecolor + "!important}");
