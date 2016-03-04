function oInput(id){//用户名和密码

	var oSpan=document.createElement('span');
	oSpan.className='textPrompt';
	
	oSpan.onclick=function(){
	
		this.style.display='none';
	};
	
	var aInput=document.getElementById(id);
	aInput.onfocus=function(){
	
		this.style.backgroundPosition='0 -40px';
		oSpan.style.display='none';
	};
	aInput.onblur=function(){
	
		this.style.backgroundPosition='0 5px';
		if(aInput.value==''){
		
			oSpan.style.display='block';
		}
	}
	
	aInput.parentNode.insertBefore(oSpan,aInput);
	oSpan.innerHTML=aInput.getAttribute('pro');
}

function oRadio(id){//单选框

	var oRadioBtn=document.getElementById(id);
	var aLabel=oRadioBtn.getElementsByTagName('label');
	var aInput=oRadioBtn.getElementsByTagName('input');
	var aSpan=[];
	
	for(var i=0;i<aInput.length;i++){
	
		var oSpan=document.createElement('span');
		aSpan.push(oSpan);
		oSpan.innerHTML=aInput[i].value;
		aInput[i].parentNode.insertBefore(oSpan,aInput[i]);
		aInput[i].style.display='none';
		aLabel[i].style.display='none';
		
		(function(index){
			oSpan.onclick=function(){
			
				for(var i=0;i<aInput.length;i++){
				
					aSpan[i].className='';
				}
				this.className='radioactive';
				aInput[index].checked=true;
			};
		})(i);
	}
}

function oSel(id) //国家
{
	var selBox=document.getElementById(id);
	var oSelect=selBox.getElementsByTagName('select')[0];
	
	var oDivBox=document.createElement('div');
	var oDivText=document.createElement('div');
	var oUl=document.createElement('ul');
	
	oDivBox.className='my_sel';
	oDivText.innerHTML=oSelect.options[0].text;
	
	oSelect.style.display='none';
	
	for(var i=0;i<oSelect.options.length;i++){
	
		var oLi=document.createElement('li');
		oLi.innerHTML=oSelect.options[i].text;
		oUl.appendChild(oLi);
		(function(index){
			oLi.onmouseover=function(){
			
				for(var i=0;i<oUl.children.length;i++){
				
					oUl.children[i].style.background='';
				}
				oUl.children[index].style.background='#333'
			};
			
			oLi.onclick=function(ev){
			
				var oEvent = ev||event;
				oUl.style.display='none'
				oEvent.cancelBubble=true; //事件冒泡
				oDivText.innerHTML=this.innerHTML;
				oSelect.selectedIndex=index;
				oDivText.style.backgroundPosition="-1px -86px";
			};
			
		})(i);
	}
	
	oDivBox.onclick=function(ev){
	
		var oEvent=ev||event;
		oDivText.style.backgroundPosition="-114px -86px";
		oUl.style.display='block'
		oEvent.cancelBubble=true;
	};
	
	
	document.onclick=function(){
	
		oUl.style.display='none';
		oDivText.style.backgroundPosition="-1px -86px";
	};
	
	oSelect.parentNode.insertBefore(oDivBox,oSelect);
	oDivBox.appendChild(oDivText);
	oDivBox.appendChild(oUl);
	
};

function oCheck(id){ //多选

	CheckBox=document.getElementById(id);
	var aInput=CheckBox.getElementsByTagName('input');
	var aLabel=CheckBox.getElementsByTagName('label');
	var aSpan=[];
	
	for(var i=0;i<aInput.length;i++){
	
		aInput[i].style.display='none';
		aLabel[i].style.display='none';
		var oSpan=document.createElement('span');
		
		CheckBox.appendChild(oSpan);
		oSpan.innerHTML=aLabel[i].innerHTML;
		aSpan.push(oSpan);
		(function(index){
			aSpan[i].onclick=function(){
			
				if(this.className==''){
				
					this.className='checkactive';
					aInput[index].checked=true;
				}
				else{
				
					this.className='';
					aInput[index].checked=false;
				}
			};
		})(i);
	}
};

function oTextarea(id){

	var oTextBox=document.getElementById(id);
	var oTextdiv=document.createElement('div');
	var oText=oTextBox.getElementsByTagName('textarea')[0];
	oTextdiv.className="textarea";
	
	oTextdiv.onkeyup=function(){
	
		oText.value=oTextdiv.innerHTML;	
	}
	
	oTextdiv.contentEditable=true;
	oTextBox.appendChild(oTextdiv);
	oText.style.display='none';
}

function oFile(id){

	var added=false;
	var aFile=document.getElementById(id);
	var aInp=aFile.getElementsByTagName('input')[0];
	var oDiv=document.createElement('div');
	var oDiv1=document.createElement('div');
	var oSpan=document.createElement('span');
	var oDiv2=document.createElement('div');
	aFile.style.position="relative";
	oDiv2.className="yulan";
	oDiv.className="bgdiv";
	oDiv1.className="lujing";
	oSpan.innerHTML="浏览";
	oDiv2.innerHTML="清空";
	aInp.className="file1";
	aInp.onmousedown=function(){
	
		oDiv.style.backgroundPosition="0 -204px";	
	};
	aInp.onmouseup=function(){
	
		oDiv.style.backgroundPosition="0 -171px";	
	};
	aInp.onchange=function(){
	
		oDiv1.innerHTML=aInp.value;
		oDiv.style.backgroundPosition="0 -171px";
	};
	oDiv2.onclick=function(){
	
		oDiv1.innerHTML="";	
		aInp.value="";
	};
	oDiv2.onmousedown=function(){
	
		this.style.backgroundPosition="-151px -203px";
	};
	oDiv2.onmouseup=function(){
	
		this.style.backgroundPosition="-152px -171px";
	};
	aFile.appendChild(oDiv);
	oDiv.appendChild(oDiv1);
	oDiv.appendChild(oSpan);
	aFile.appendChild(oDiv2);
	
	
	if(added){
	
		return;
	}
	added=true;
	
	
}
var oL=document.createElement('link');
	
oL.rel='stylesheet';
oL.type='text/css';
oL.href='css.css';

var oHead=document.getElementsByTagName('head')[0];

oHead.appendChild(oL);