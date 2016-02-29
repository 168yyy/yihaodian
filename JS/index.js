window.onload=function(){
	//刷新始终在页面顶部
	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	obj.scrollTop=0;
	var tex=getClass("texts")[0];
	var textxiala=getClass("text-xiala")[0];
	tex.onfocus=function(){
	//表单获得焦点
		textxiala.style.display="block";
		if(tex.value=="店铺年度畅销榜幸福大盘点"){
			tex.value="";
		}
	}
	tex.onblur=function(){
	//表单失去焦点
		textxiala.style.display="none";
		if(tex.value){

		}else{
			tex.value="店铺年度畅销榜幸福大盘点";
		}
	}

	//导航下拉
	var yiji=getClass("yiji");
  	var xiala=getClass("xiala");
  	var arrow=getClass("arrow")[0];
	for(var i=0;i<yiji.length;i++){
		yiji[i].a=i;
		yiji[i].onmouseover=function(){
			xiala[this.a].style.display="block";
		}
		yiji[i].onmouseout=function(){
			xiala[this.a].style.display="none";
		}
	}

	var yiji1=getClass("li-kuang");
  	var xiala2=getClass("xialaA");
  	for(var i=0;i<yiji1.length;i++){
		yiji1[i].a=i;
		yiji1[i].onmouseover=function(){
			yiji1[this.a].style.border="1px solid #dbdbdb"
			yiji1[this.a].style.borderBottom="0px"
			xiala2[this.a].style.display="block";
			yiji1[this.a].style.background="#fff"
		}
		yiji1[i].onmouseout=function(){
			xiala2[this.a].style.display="none";
			yiji1[this.a].style.border="1px solid #fafafa"
			yiji1[this.a].style.background="#fafafa"
		}
	}


	//banner轮播
	var yanse=["#663dd9","#ff5caf","#d80007","#4f50e6","#ffbb02","#239eec","#e4390d","#b70100"];
	var bannerbox=$(".bannerbox")[0];
	var bannerimgs=$(".banner-imgs");
	var lunbo1an=$(".lunbo1an");
	var btnleft=$(".banner-btnleft")[0];
	var btnright=$(".banner-btnright")[0];
	var banner=$(".banner-banner")[0];
	var t=setInterval(moveright,2000);
	var num1=0;
	function moveright(){
		num1++;
		if(num1>7){
			num1=0;
		}
		for(var i=0;i<bannerimgs.length;i++){
			bannerimgs[i].style.display="none";
			lunbo1an[i].style.background="#ccc";
		}
		bannerimgs[num1].style.display="block";
		lunbo1an[num1].style.background="#ff3c3c";
		bannerbox.style.background=yanse[num1];	
	}
	function moveleft(){
		num1--;
		if(num1<0){
			num1=7;
		}
		for(var i=0;i<bannerimgs.length;i++){
			bannerimgs[i].style.display="none";
			lunbo1an[i].style.background="#ccc";
		}
		bannerimgs[num1].style.display="block";
		lunbo1an[num1].style.background="#ff3c3c";
		bannerbox.style.background=yanse[num1];
		
	}

	for(var i=0;i<lunbo1an.length;i++){
		lunbo1an[i].index=i;
		lunbo1an[i].onmouseover=function(){
			clearInterval(t);
			for(var j=0;j<bannerimgs.length;j++){
				bannerimgs[j].style.display="none";
				lunbo1an[j].style.background="#ccc";
			}
			btnleft.style.display="block";
			btnright.style.display="block";
			bannerimgs[this.index].style.display="block";
			lunbo1an[this.index].style.background="#ff3c3c";
			bannerbox.style.background=yanse[this.index];
		}
		lunbo1an[i].onmouseout=function(){
			t=setInterval(moveright,2000);
			num1=this.index+1;
		}
	}

	banner.onmouseover=function(){
		clearInterval(t);
		btnleft.style.display="block";
		btnright.style.display="block";
	}
	banner.onmouseout=function(){
		t=setInterval(moveright,2000);
		btnleft.style.display="none";
		btnright.style.display="none";
	}
	btnleft.onclick=function(){
        moveleft();

    }
    btnright.onclick=function(){
        moveright();
    }

    //banner左侧导航
    var leftnavbox=$(".leftnavbox");
	var cehua=$(".banner-cehua1")[0];
    
    for(var i=0;i<leftnavbox.length;i++){
    	leftnavbox[i].index=i;
    	leftnavbox[i].onmouseover=function(){
    		animate(leftnavbox[this.index],{paddingLeft:4},150,Tween.Linear);
    		leftnavbox[this.index].style.background="#872222";
    		cehua.style.display="block";
    	}
    	leftnavbox[i].onmouseout=function(){
    		animate(leftnavbox[this.index],{paddingLeft:0},150,Tween.Linear);
    		leftnavbox[this.index].style.background="#c23131";
    		cehua.style.display="none";
    	}
    	cehua.onmouseover=function(){
    		cehua.style.display="block";
    	}
    	cehua.onmouseout=function(){
    		cehua.style.display="none";
    	}
    }

    //楼层跳转
    //0--440  440-3000
    var floors=$(".float1boxs");
	var jump=$(".jump")[0];
    var btn=$("li",jump);
    var cenw1=$(".cenw1");
    //alert(floors[1].offsetTop)

	//按钮控制滚动条
    for(var i=0;i<btn.length;i++){
        btn[i].index=i;
        btn[i].onclick=function(){
            //alert(floors[this.index].t)
            var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
            //var scrollT=getScrollT();
            //obj.scrollTop=floors[this.index].t;
            animate(obj,{scrollTop:floors[this.index].t})//当前按钮的对应楼层的top赋值给滚动条
        }

        btn[i].onmouseover=function(){
	        cenw1[this.index].style.display="block";
	    }
	    btn[i].onmouseout=function(){
	        cenw1[this.index].style.display="none";
	    }
    }

    window.onscroll=function(){
     	//楼层跳转
     	var scrollT=getScrollT();
	    if(scrollT>=1100&&scrollT<=6500){
	        jump.style.display="block";
	    }else{
	        jump.style.display="none";
	    }
		//滚动条控制按钮
        for(var i=0;i<floors.length;i++){
            floors[i].t=floors[i].offsetTop;//
            if(floors[i].t-100<scrollT){//如果scrollTop大于当前楼层的top
            	//alert(11111)
            	for(var j=0;j<cenw1.length;j++){
            		cenw1[j].style.display="none";
            	}
            	cenw1[i].style.display="block";
            } 
        }
    }	
    //返回顶部
    var rn9=$(".rn9")[0];
    rn9.onclick=function (){
    	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    	animate(obj,{scrollTop:0})
    }

    //闪购轮播
    var imgbox=getClass("shanboximg")[0];
	var an=getClass("shanyiji");
	var t1=setInterval(a,8000);
	var num=1;
	function a(){
		if(num==3){
			animate(imgbox,{left:-1200*num},500,Tween.Linear,function(){
			imgbox.style.left=0;})
			num=0;
		}else{
			animate(imgbox,{left:-1200*num},500,Tween.Linear);
		}	
		for(var j=0;j<an.length;j++){
			an[j].style.color="#666";
		}
		an[num].style.color="#cea145";
		num++;
	}
	for(var i=0;i<an.length;i++){
		an[i].index=i;
		an[i].onmouseover=function(){
			clearInterval(t1);
			animate(imgbox,{left:-1200*this.index},500,Tween.Linear);
			for(var j=0;j<an.length;j++){
				an[j].style.color="#666";
			}
			an[this.index].style.color="#cea145";
		}
		an[i].onmouseout=function(){
			t1=setInterval(a,8000);
			num=this.index+1;
		}
	}
	imgbox.onmouseover=function(){
		clearInterval(t1);
	}
	imgbox.onmouseout=function(){
		t1=setInterval(a,8000);
	}

	//楼层小轮播
	lunbo1(0);
	lunbo1(1);
	lunbo1(2);
	lunbo1(3);
	lunbo1(4);
	lunbo1(5);
	lunbo1(6);
	lunbo1(7);
	function lunbo1(a){
		var box=$(".big-content-imgsbox")[a];
	    var imgs=$("img",box);
	    var tiaobox=$(".tiaobox")[a];
	    var tiao=$(".tiaoo",tiaobox);
	    var tt=$(".t",tiaobox);
	    var numa=0;
	    var numb=1;
	    var sheed=40;
	    function lb(){
	        if(sheed<=0){
	            sheed=40;
	            numa++;
	            if(numa>2){
	                numa=0;
	            }
	            for(var k=0;k<tt.length;k++){
	                tt[k].style.left=-40+"px";
	            }
	        }
	        tt[numa].style.left=-sheed+"px";
	        sheed--;
	    }
	    var time=setInterval(lb,100);
	    function lb1(){
	    	if(numb>2){
	       	 	numb=0;
	    	}
	        animate(box,{left:-330*numb});
	        numb++;
	    }
	    var time1=setInterval(lb1,4000);
	    for(var i=0;i<tiao.length;i++){
	        tiao[i].index=i;
	        imgs[i].index=i;
	        imgs[i].onmouseover=tiao[i].onmouseover=function(){
	            clearInterval(time);
	            clearInterval(time1);
	            for(var j=0;j<tt.length;j++){
	                tt[j].style.left=-40+"px";
	            }
	            tt[this.index].style.left=0+"px"
	            animate(box,{left:-330*this.index});
	        }
	        imgs[i].onmouseout=tiao[i].onmouseout=function(){
	            numa=this.index;
	            numb=this.index+1;
	           	sheed=40;
	            time=setInterval(lb,100);
	            time1=setInterval(lb1,4000);
	        }
	    }
	}
	
}