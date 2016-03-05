function ByClass(oDiv,oClass){
	var aEl=oDiv.getElementsByTagName("*");
	var aList=[];
	for (var i=0; i<aEl.length; i++){
		if (aEl[i].className==oClass){
			aList.push(aEl[i]);
			}
		}
		return aList;
	}
function toParent(child,parent){
	while(child){
		if (child==parent){
			return false;
		}
		child=child.parentNode;
	}
}
//头部左边导航
(function (){
	var oLeft=document.getElementById("hl_hover");
	var oRight=document.getElementById("hr_hover");
	var oHead=document.getElementById("jd_head");
	var aClass=ByClass(oHead,"h_link");
	aClass[0].onmouseover=function (){
		aClass[0].parentNode.style.marginLeft="4px";
		this.className="h_hover";	
		oLeft.style.display="block";
	}
	aClass[0].onmouseout=function (){
		aClass[0].parentNode.style.marginLeft="10px";
		this.className="h_link";
		oLeft.style.display="none";	
	}
	aClass[1].onmouseover=function (){
		aClass[1].parentNode.style.marginLeft="4px";
		this.className="h_hover";	
		oRight.style.display="block";
	}
	aClass[1].onmouseout=function (){
		aClass[1].parentNode.style.marginLeft="10px";
		this.className="h_link";
		oRight.style.display="none";	
	}
})();
(function (){  //搜索框
	var oSpan=document.getElementById("h_form");
	var oText=document.getElementById("con_text");
	var oBtn=document.getElementById("con_btn");
	oText.value="富安娜家纺";
	document.onclick=function (){
		if(oText.value==""){
			oText.value="富安娜家纺";	
		}
	}
	oText.onclick=function (ev){ 
		var oEvent=ev||event;
		oEvent.cancelBubble=true;
		oText.value="";	
	}
	oBtn.onclick=function (){
		if(oText.value==""){
			oText.value="富安娜家纺";	
		}
	} 	
	/*oText.onfocus=function (){
		oSpan.style.display="none";
	}
	oSpan.onclick=function (){
		oSpan.style.display="none";
		oText.focus();
	}
	oBtn.onclick=function (ev){  //为何阻止不了失去焦点 block、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
		var oEvent=ev||event;
		oSpan.style.display="none";
		if(oText.value==0){
			oText.value=oSpan.innerHTML;	
		}
		oEvent.cancelBubble="true";
	}
	oText.onblur=function (){
		oSpan.style.display="block";
	}*/
})();
(function (){ 
	var oLeft=document.getElementById("con_h_left");
	var oRig=document.getElementById("con_h_rig");
	var oHidden=document.getElementById("h_left_yc");
	var oHidRig=document.getElementById("h_rig_yc");
	oLeft.onmouseover=function (){   //头部我的京东onmouseover  out事件
		this.style.backgroundColor="#fff";
		this.style.borderBottom="none";
		oLeft.children[0].src="images/peo_hover.png";
		oLeft.children[2].src="images/tri_hover.png";
		oHidden.style.display="block";
	}
	oLeft.onmouseout=function (){
		this.style.backgroundColor="#f7f7f7";
		oLeft.children[0].src="images/people.jpg";
		oLeft.children[2].src="images/tri_y.jpg";	
		oHidden.style.display="none";
	}	
	oRig.onmouseover=function (){  //头部购物车onmouseover  out事件
		this.style.backgroundColor="#fff";
		oRig.children[1].src="images/car_hover.jpg";
		oHidRig.style.display="block";
		oRig.children[3].src="images/tri_x_hover.jpg";
	}
	oRig.onmouseout=function (){
		this.style.backgroundColor="#f7f7f7";
		oRig.children[1].src="images/car.jpg";
		oRig.children[3].src="images/tri_x.jpg";
		oHidRig.style.display="none";
	}
})();
(function (){ //左侧商品分类导航部分 
	var oOut=document.getElementById("nav_left");
	var timer=null;	
	var timer2=null;
	var aArr1=ByClass(oOut,"sub1");
	var aArr2=ByClass(oOut,"list1");
	var aH=oOut.getElementsByTagName("h3");
	for (var i=0; i<aArr2.length; i++){
		function ini(){
			for (var i=0; i<aArr1.length; i++){  //解决清除out计时器带来的bug---计时器清了没走完的问题
				aArr1[i].style.display="none";
				aH[i].style.background="#fafafa url(images/nav_left.jpg) 187px 0 no-repeat";
				aH[i].style.border="none";
				aH[i].style.borderBottom="1px #fff solid";
			}
		};
		aArr2[i].index=i;
		var oSpan=document.createElement("span");
		aArr2[i].onmouseover=function (){
			clearTimeout(timer2) //清除第二次移进时 闪的问题
			var _this=this;
			timer=setTimeout(function (){
				ini();
				_this.children[0].appendChild(oSpan);
				oSpan.className="new";
				 aArr1[_this.index].style.display="block";
				_this.children[0].style.background="#fff url()";
				_this.children[0].style.borderTop="1px solid #efefef";
				_this.children[0].style.borderBottom="1px solid #efefef";
			},300);
		}
		aArr2[i].onmouseout=function (ev){
			clearTimeout(timer);
			var oEvent=ev||event;
			if (oEvent.toElement){
				var to=oEvent.toElement;
			}
			else{
				var to=oEvent.relatedTarget;
			}
			if (toParent(to,this)==false)return;
			var _this=this;
			var ccj=_this.children[0];
			timer2=setTimeout(function (){
				ini();
				aArr1[_this.index].style.display="none";
				oSpan.className="";
				_this.children[0].style.background="#fafafa url(images/nav_left.jpg) 187px 0 no-repeat";
				_this.children[0].style.border="none";
			},100);
		}
	}
})();
(function (){ //大图滚动
	var oPar=document.getElementById("nav_con_par");
	var aImg=oPar.getElementsByTagName("img");
	var aLi=oPar.getElementsByTagName("li");
	var ind=0;
	var num=0;
	var timer=null;
	var timer2=null;
	function move(num){
		clearInterval(timer);
		for(var i=0;i<aImg.length;i++){
			aLi[i].className="";
			aImg[i].style.opacity=0;
		}
		ind=0;
		timer=setInterval(function (){
			ind+=0.01;
			if(ind>1){
				ind=1;
				clearInterval(timer);
			}
			aImg[num].style.opacity=ind;
		},20);
		aLi[num].className="on";	
	}
	function self_roll(){
		timer2=setInterval(function (){ //自己变换 
		if(num>=aImg.length-1){
			num=0;
			move(num);
		}
		else{
			num++;
			move(num);
		}
	},3000);}
	self_roll();
	for(var i=0;i<aImg.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function (){
			num=this.index;
			move(num);
			clearInterval(timer2);
		}
		aLi[i].onmouseout=function (){
			self_roll();
		}	
	}
})();
(function (){ //点击滚动
	var oPar=document.getElementById("con_dian");	
	var oChil=document.getElementById("dian_chil");
	var aImg=oChil.getElementsByTagName("img");
	var ind=0;
	var timer=null;
	var con;
	var num;
	oPar.onmouseover=function (){
		oPar.children[1].style.background="#F5F5F5 url(images/roll_lhover.png) 3px 68px no-repeat";
		oPar.children[2].style.background="#F5F5F5 url(images/roll_rhover.png) 3px 68px no-repeat";
	}
	oPar.onmouseout=function (){
		oPar.children[1].style.background="#fff url(images/roll_l.png) 3px 68px no-repeat";
		oPar.children[2].style.background="#fff url(images/roll_r.png) 3px 68px no-repeat";
	}
	function dian_roll(end,con,num){
		clearInterval(timer);
		ind=0;
		var start=oChil.scrollLeft+30;
		var end;
		if(con){
			oChil.scrollLeft=num;	
			end=num;	
		}
		var change=end-start;
		timer=setInterval(function (){
			ind++;						
			if(ind>=30){
				clearInterval(timer);
			}
			oChil.scrollLeft=Tween.Cubic.easeOut(ind,start,change,30);
		},20)
	}
	oPar.children[1].onclick=function (){ //点击左滚、
		if(timer){
			if(ind<30){
				return;	
			}	
		}
		end=oChil.scrollLeft+3*aImg[0].offsetWidth;
		dian_roll(end,con,num);
		con=(oChil.scrollLeft>=(aImg.length-6)*aImg[0].offsetWidth); //不封函数oChil.scrollLeft>=(aImg.length-3)*aImg[0].offsetWidth
		num=0;
	}
	oPar.children[2].onclick=function (){ //点击右滚、
		if(timer){
			if(ind<30){
				return;	
			}	
		}
		end=oChil.scrollLeft-3*aImg[0].offsetWidth;
		con=(oChil.scrollLeft<=0);
		num=((aImg.length-3)*aImg[0].offsetWidth);
		dian_roll(end,con,num);
	}
})();
(function (){ //右侧tab切换
	var oPar=document.getElementById("rig_tab");
	var aH=oPar.getElementsByTagName("h3");
	var aLine=ByClass(oPar,"nav_line")[0];
	var aHidden=ByClass(oPar,"show");
	var ind=0;
	var timer=null;
	var timer2=null;
	for(var i=0;i<aH.length;i++){
		aH[i].index=i;
		aH[i].onmouseover=function (){
			clearInterval(timer);
			clearTimeout(timer2);
			for (var i=0;i<aH.length;i++){
				aHidden[i].style.display="none";
				aH[i].className="";
				aH[i].children[0].className="";
			}
			aH[this.index].children[0].className="tab_on";
			aH[this.index].className="tab_on";
			aHidden[this.index].style.display="block";
			var _this=this;
			timer2=setTimeout(function (){
				var start=aLine.offsetLeft;
				var end=[_this.index]*aH[0].offsetWidth;
				var change=end-start;
				ind=0;
				timer=setInterval(function (){
					ind++;
					if(ind>=20){
						clearInterval(timer);
					}
					aLine.style.left=Tween.Cubic.easeOut(ind,start,change,20)+"px";
				},15)
			},100)
		}
		aH[i].onmouseout=function (){
			clearTimeout(timer2);
			this.children[0].className="tab_on";
			this.className="tab_on";
			aHidden[this.index].style.display="block";	
		}	
	}
})();
(function (){ //左第一行疯狂购物tab切换
	function tab(el){
		var oPar=document.getElementById(el);
		var aH=oPar.getElementsByTagName("h3");
		var aLine=ByClass(oPar,"nav_line")[0];
		var aHidden=ByClass(oPar,"tab_con");
		var ind=0;
		var timer=null;
		var timer2=null;
		for(var i=0;i<aH.length;i++){
			aH[i].index=i;
			aH[i].onmouseover=function (){
				clearInterval(timer);
				clearTimeout(timer2);
				for (var i=0;i<aH.length;i++){
					aHidden[i].style.display="none";
					aH[i].style.color="#666";
				}
				this.style.color="#E4393C";
				aHidden[this.index].style.display="block";
				var _this=this;
				timer2=setTimeout(function (){
					var start=aLine.offsetLeft;
					var end=[_this.index]*aH[0].offsetWidth;
					var change=end-start;
					ind=0;
					timer=setInterval(function (){
						ind++;
						if(ind>=20){
							clearInterval(timer);
						}
						aLine.style.left=Tween.Cubic.easeOut(ind,start,change,20)+"px";
					},15)
				},300)
			}
			aH[i].onmouseout=function (){
				clearTimeout(timer2);
				this.style.color="#E4393C";
				aHidden[this.index].style.display="block";	
			}	
		}
	}
	var el="left_tab";
	tab(el)
	var el="jiadian";
	tab(el)
	var el="comput";
	tab(el)
	var el="yifu";
	tab(el)
})();
(function (){ //衣服——特价商品
	var oOut=document.getElementById("brand");
	var aDiv=oOut.getElementsByTagName("div");
	var timer=null;
	var ind=0;
	var num=[];
	for (var i=0; i<aDiv.length; i++){
		aDiv[i].ccj=i;
		aDiv[i].onmouseover=function (){
			clearInterval(timer);
			var start=150;
			var end=190;
			var change=end-start;
			ind=0;
			var _this=this;
			timer=setInterval(function (){
				ind++;
				if(ind>=20){
					clearInterval(timer);
				}
				for (var i=0; i<aDiv.length; i++){
					aDiv[i].style.width="150px";
				}
				_this.style.width=Tween.Cubic.easeOut(ind,start,change,20)+"px";
			},10) 
		}
	}
})();
(function (){ //充值
	var oPar=document.getElementById("tab_show");
	var oSel=oPar.getElementsByTagName("select")[0];
	var oNum=ByClass(oPar,"denom")[0];
	var aSpan=oNum.getElementsByTagName("span");
	oSel.onclick=function (){    //选择面额
		for(var i=0;i<oSel.options.length;i++){
			aSpan[i].className="";
		}
		aSpan[oSel.selectedIndex].className="on";
	}
	var laoba=document.getElementById("num_rig");
	var oInput=laoba.getElementsByTagName("input")[0];
	var oSpan=laoba.getElementsByTagName("span")[0];
	var oP=laoba.getElementsByTagName("p")[0];
	var oBtn=document.getElementById("cli_deno");
	/*oInput.onfocus=function (){ //点击号码输入框
		oSpan.style.display="none";
	}
	oSpan.onclick=function (){
		oSpan.style.display="none";
		oInput.focus();
	}
	var oDian=document.getElementById("cli_deno");
	oInput.onblur=function(){  //判断输入的是数字
		if(oInput.value==0){
			oSpan.style.display="block";
		}
		else{
			var str=oInput.value;
			for (var i=0; i<str.length; i++){
			var iN=str.charCodeAt(i);
				 if (iN >=48 && iN <= 57&&str.length==11){ //判断是数字且11位
					 oP.innerHTML="支持电信、移动、联通";
				 }
				else{
					oP.innerHTML="请输入正确的信息";
					oP.style.color="#c30";
					return;                                                                              输入的一旦是非号码内容 下面马上就提示输入正确信息  onblur写必须失去焦点才有效  onfocus第二次取得焦点时才生效 写完了再看！！
				} 
			}
		}
	}*/
	var oDian=document.getElementById("cli_deno");
	oInput.onfocus=function (){ //点击号码输入框
		oSpan.style.display="none";
		if(oInput.value!=0){
			var str=oInput.value;
			for (var i=0; i<str.length; i++){
				var iN=str.charCodeAt(i);
				if (iN >=48 && iN <= 57&&str.length==11){ //判断是数字且11位
					 oP.innerHTML="支持电信、移动、联通";
					 oP.style.color="#666";
				}
				else{
					oP.innerHTML="请输入正确的信息";
					oP.style.color="#c30";
					return;
				} 
			}
		}
	}
	oSpan.onclick=function (){
		oSpan.style.display="none";
		oInput.focus();
	}
	oInput.onblur=function(){ 
		if(oInput.value==0){
			oSpan.style.display="block";
		}
	}
	oBtn.onclick=function (){  //空号码提交
		if(oInput.value==0){
			oP.innerHTML="请输入正确的信息";
			oP.style.color="#c30";
			oInput.focus();
		}
	}
})();
(function (){ //旅行切换
	var oPar=document.getElementById("trip_tab");
	var aLi=oPar.getElementsByTagName("li");
	var aHidden=ByClass(oPar,"trip_tab");
	for(var i=0;i<aLi.length;i++){                                            //有问题  事件委托？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？、
		aLi[i].ccj=i;
		aLi[i].onmouseover=function (){
			for(var i=0;i<aHidden.length;i++){
				aHidden[i].style.display="none";
				aLi[i].style.color="#005EAB";
			}
			this.style.color="#E4393C";
			aHidden[this.ccj].style.display="block";
		}
		aLi[i].onmouseout=function (){
			this.style.color="#E4393C";
			aHidden[this.ccj].style.display="block";
		}
	}
})(); 
(function (){  //彩票
	var oPar=document.getElementById("caipiao_rig");
	var oSel=oPar.getElementsByTagName("select")[0];
	var oSse=document.getElementById("shse");
	var aSpan=oSse.getElementsByTagName("span");
	var oDle=document.getElementById("dale");
	var aEm=oSse.getElementsByTagName("em");
	var aSpan2=oDle.getElementsByTagName("span");
	var aEm2=oDle.getElementsByTagName("em");
	var oJixuan=oPar.getElementsByTagName("a")[0];
	var timer=null;
	var timer2=null;
	var aHidden=[oSse,oDle];
	oSel.onclick=function (){
		for(var i=0;i<oSel.options.length;i++){
			aHidden[i].style.display="none";
		}
		aHidden[oSel.selectedIndex].style.display="block";
		/*if(oSel.options[0].selected){
			oRandomRed(aSpan,33);
			oRandomBlue(aEm,11);
		}
		if(oSel.options[1].selected){
			oRandomRed(aSpan2,35);
			oRandomBlue(aEm2,15);
		}*/
		if(oSel.value==oSel.options[0].value){
			oRandomRed(aSpan,33);
			oRandomBlue(aEm,11);
			oJixuan.onclick=function (){
				oRandomRed(aSpan,33);
				oRandomBlue(aEm,11);
			}
		}
		if(oSel.value==oSel.options[1].value){
			oRandomRed(aSpan2,35);
			oRandomBlue(aEm2,15);
			oJixuan.onclick=function (){
				oRandomRed(aSpan2,35);
				oRandomBlue(aEm2,15);
			}
		}
	}
	function oRandomRed(el,shu){
		num=0;
		var arr=[];
		var Random=0;
		var ind=0;
		timer=setInterval(function (){	
			ind=0;	  
			while(ind<el.length){
				Random=parseInt(Math.random()*shu);
				if(arr.indexOf(Random)==-1){
					arr[ind]=Random;
					if(Random<10){
						Random="0"+Random;
					}
					el[ind].innerHTML=Random;
					ind++;
				}
			}
			num++;
			if(num>=30){
				clearInterval(timer);
			}
		},25)
	}
	function oRandomBlue(el2,shu2){
		num=0;
		var Random=0;
		var ind=0;
		timer2=setInterval(function (){	
			ind=0;	  
			while(ind<el2.length){
				Random=parseInt(Math.random()*shu2)+1;
					if(Random<10){
						Random="0"+Random;
					}
					el2[ind].innerHTML=Random;
					ind++;
			}
			num++;
			if(num>=30){
				clearInterval(timer2);
			}
		},25)
	}	
})();
(function (){
	window.onscroll=window.onresize=function (){
		var oDiv=document.getElementById("scrolltop");
		var oNew=document.getElementById("wenjuan");
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		if(scrollTop>0){
			oDiv.style.display="block";
			oNew.style.display="block";
		}
		oDiv.onclick=function (){
			document.body.scrollTop=0;
			document.documentElement.scrollTop=0;
		}
		if(scrollTop<=0){
			oDiv.style.display="none";
			oNew.style.display="none";
		}
		oNew.onclick=function (){
			window.open("http://market.jd.com/jdvote/vote2.aspx?voteId=167","_blank");
		}
	}	   
})();
(function (){ //倒计时
	function daojishi(el,time){
		var oPar=document.getElementById(el);
		var oShi=oPar.getElementsByTagName("em")[0];
		var oFen=oPar.getElementsByTagName("em")[1];
		var oMiao=oPar.getElementsByTagName("em")[2];
		var oImg=ByClass(oPar,"save")[0];
		var oJishi=ByClass(oPar,"jishi")[0];
		oShi.innerHTML=time;
		oFen.innerHTML=59;
		oMiao.innerHTML=60;
		setInterval(function (){
			oMiao.innerHTML--;
			if(oMiao.innerHTML<=0){
				oMiao.innerHTML=60;
				oFen.innerHTML-=1;
			}
			if(oFen.innerHTML<=0){
				oFen.innerHTML=59;
				oShi.innerHTML-=1;
			}
			if(oShi.innerHTML==0||oFen.innerHTML==0||oMiao.innerHTML==0){
				oImg.src="images/save0.png";
				oJishi.innerHTML="抢购结束，请"+"<a href='###'>刷新</a>";
				var oA=oJishi.getElementsByTagName("a")[0];
				oA.style.color="#005EA7";
				oA.onclick=function (){
					oImg.src="images/save1.png";
				}
			}
		},1000)
	}	   
	var el="jishi";
	var time=11;
	daojishi(el,time)
	var el="jishi1";
	var time=3;
	daojishi(el,time)
	var el="jishi2";
	var time=1;
	daojishi(el,time)
	var el="jishi3";
	var time=0;
	daojishi(el,time)
	var el="jishi4";
	var time=5;
	daojishi(el,time)
})();