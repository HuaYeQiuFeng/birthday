window.onload =function(){
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
//	当音乐停止时,唱片停止旋转
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
//		this.style.animationPlayState="paused";
	},false);
	
	
//	music.addEventListener("touchstart",function(event){
//		if(audio.paused){
//		audio.play();
//		this.setAttribute("class","play");
//		}else{
//			audio.pause();
//			this.setAttribute("class","");
//		};
//	},false);
//	当音乐停止时,唱片停止旋转
	music.onclick = function(){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
//			this.style.animationPlayState="running";
		}else{
			audio.pause();
				this.setAttribute("class","");
//				this.style.animationPlayState="paused";
		};
	};
	
	page1.addEventListener("touchstart",function(event){
		page1.style.display ="none";
		page2.style.display ="block";
		page3.style.display ="block";
		page3.style.top     ="100%";
		
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},5500);
		
		setTimeout(function(){
			page3.style.display ="none";
			page4.style.display ="block";
		},12500);
	},false);
};