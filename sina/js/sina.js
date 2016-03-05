/**
 *
 * @authors liucc (312563916@qq.com)
 * @date    2013-10-27 18:29:32
 * @version v2013
 */

window.onload = function() {
	
	//头部下拉菜单

	function showNav(m, n) {
		var oBox = document.getElementById('header');
		var oBtn = oBox.children[m].children[n];
		var oCon = oBox.children[m].children[n].children[1];
		oBtn.onmouseover = function() {
			oBtn.children[0].style.background = '#E9E9E9';
			oCon.style.display = 'block';
		};
		oBtn.onmouseout = function() {
			oBtn.children[0].style.background = '';
			oCon.style.display = 'none';
		};
	}
	showNav(0, 1); //我的菜单
	showNav(0, 3); //移动客户端
	showNav(1, 0); //我的
	showNav(1, 2); //博客博

	//登陆显示
	var oLogin = document.getElementById('login');
	var oShow_login = document.getElementById('show_login');
	var oLogin_a = document.getElementById('login_a');
	var oShowLoginClose = document.getElementById('showLoginClose');

	function showLogin(a, b) {
		oShow_login.style.display = a;
		oLogin_a.style.background = b;
	}
	oLogin.onmouseover = function() {
		showLogin('block', '#ccc');
	};
	oLogin.onmouseout = function() {
		showLogin('none', '');
	};
	oShowLoginClose.onclick = function() {
		showLogin('none', '');
	};
	//搜索框 博客 邮箱。。。。
	var oBox = document.getElementById('scarchBox');
	var oBtn = oBox.children[0];
	var oCon = oBox.children[3];
	var aConLi = oCon.children;
	oBtn.onclick = function() { 
	//点击显示隐藏
		if (oCon.style.display == 'block') {
			oCon.style.display = 'none';
		} else {
			oCon.style.display = 'block';
		}
	};
	for (var i = 0; i < aConLi.length; i++) { //微博 邮箱 图片。。。 选中
		aConLi[i].onclick = function() {
			oBtn.innerHTML = this.children[0].innerHTML;
			oCon.style.display = 'none';
		};
	}
	//搜索框
	var aInputText = oBox.children[1].children;
	var aInputList = aInputText[2].getElementsByTagName('li');
	aInputText[1].onfocus = function() {
		aInputText[0].style.display = 'none';
		aInputText[2].style.display = 'block';
	};
	aInputText[1].onblur = function() {
		aInputText[0].style.display = 'block';
		aInputText[2].style.display = 'none';
	};
	for (var i = 0; i < aInputList.length; i++) { //微博 邮箱 图片。。。 选中
		aInputList[i].onclick = function() {
			aInputText[1].value = this.children[0].innerHTML;
			aInputText[2].style.display = 'none';
		};
	}
	//变态全选
	var count = 3;
	var oBoxche = document.getElementById('boxche');
	var aChebox = oBoxche.getElementsByTagName('input');
	aChebox[0].onclick = function() { //
		if (aChebox[0].checked == true) {
			for (var i = 3; i < aChebox.length; i++) {
				aChebox[i].checked = true;
			}
			count = aChebox.length;
			aChebox[2].checked = false;
			aChebox[1].checked = false;
		} else {
			for (var i = 3; i < aChebox.length; i++) {
				aChebox[i].checked = false;
			}
			count = 0;
		}
	};
	for (var i = 3; i < aChebox.length; i++) {
		aChebox[i].onclick = function() {
			if (this.checked == true) {
				count++;
			} else {
				count--;
			}
			if (count == aChebox.length) {
				aChebox[0].checked = true;
			} else {
				aChebox[0].checked = false;
			}

			aChebox[1].checked = false;
		}
	}
	aChebox[1].onclick = function() { //反选
		for (var i = 3; i < aChebox.length; i++) {
			if (aChebox[i].checked == true) {
				aChebox[i].checked = false;
			} else {
				aChebox[i].checked = true;
			}
		}
		aChebox[2].checked = false;
		count = aChebox.length - count;
	}
	aChebox[2].onclick = function() { //不选
		for (var i = 3; i < aChebox.length; i++) {
			aChebox[i].checked = false;
		}
		aChebox[0].checked = false;
		aChebox[1].checked = false;
		count = 3;
	}

	//关闭中间大广告
	var adMiddle = document.getElementById('adMiddle');
	var adMiddleClose = adMiddle.getElementsByTagName('span');
	adMiddleClose[0].onclick = function() {
		adMiddle.style.display = 'none';
	}
	//传参实现tab切换,中间最多的那种选项卡

	function changeTab(boxId) {
		var oBox = document.getElementById(boxId);
		var aBoxTitle = oBox.children[0].getElementsByTagName('ul')[0];
		var aBtn = aBoxTitle.getElementsByTagName('li');
		var aCon = oBox.children[1].children;
		for (var i = 0; i < aBtn.length; i++) {
			aBtn[i].index = i
			aBtn[i].onmouseover = function() {
				for (var i = 0; i < aBtn.length; i++) {
					aBtn[i].className = '';
					aBtn[0].className = 'noBl ';
					aCon[i].className = 'tabs_item';
				}
				this.className += 'active';
				aCon[this.index].className = 'tabs_item show';
			}
		}
	}
	var aBox = ['tiyu', 'qiche', 'yule', 'caijing', 'dushu', 'keji', 'shouji', 'lishi', 'shehui', 'youxi', 'nvxing', 'fangchan', 'jiaoyu', 'shishang', 'lvyou', 'shoucang']; //参数们
	for (var i = 0; i < aBox.length; i++) { //批量传参
		changeTab(aBox[i]);
	}
	//视频tab切换
	(function() {
		var oVideo = document.getElementById('video');
		var oVideoBtnUl = oVideo.getElementsByTagName('ul')[0];
		var aBtn = oVideoBtnUl.getElementsByTagName('li');
		var aCon = oVideo.children;
		for (var i = 0; i < aBtn.length; i++) {
			aBtn[i].index = i
			aBtn[i].onmouseover = function() {
				for (var i = 0; i < aBtn.length; i++) {
					aBtn[i].className = '';
					aBtn[0].className = 'noBl';
					aCon[i + 1].style.display = 'none';
				}
				this.className += ' active';
				aCon[this.index + 1].style.display = 'block';
			}
		}
	})();
	//猜你喜欢 专栏 选项卡
	//
	//


	//左侧tab切换 封闭空间
	(function() {
		var oEdu = document.getElementById('edu');
		var aCon = oEdu.getElementsByTagName('ul');
		var aBtn = aCon[0].getElementsByTagName('div');
		for (var i = 0; i < aBtn.length; i++) {
			aBtn[i].index = i
			aBtn[i].onmouseover = function() {
				for (var i = 0; i < aBtn.length; i++) {
					aBtn[i].className = '';
					aCon[i + 1].style.display = 'none';
				}
				this.className = 'active';
				aCon[this.index + 1].style.display = 'block';
			}
		}
	})();

	//淘宝tab切换

	function taobaoTab(tabaoId) {
		var oTaobao = document.getElementById(tabaoId);
		var aTaobaoBtn = oTaobao.children[1].getElementsByTagName('li');
		var aTaobaoCon = oTaobao.children[0].getElementsByTagName('li');
		for (var i = 0; i < aTaobaoBtn.length; i++) {
			aTaobaoBtn[i].index = i
			aTaobaoBtn[i].onmouseover = function() {
				for (var i = 0; i < aTaobaoBtn.length; i++) {
					aTaobaoBtn[i].className = '';
					aTaobaoCon[i].style.display = 'none';
				}
				this.className = 'active';
				aTaobaoCon[this.index].style.display = 'block';
			}
		}
	}
	taobaoTab('taobaolt');
	taobaoTab('taobaocen');
	taobaoTab('taobaort');
	//小选项卡

	function changeSmallTab(smalltabBoxID) {
		var oBox = document.getElementById(smalltabBoxID);
		var aBtnSmall = oBox.children[3].getElementsByTagName('span');
		var aConSmall = oBox.children[4].getElementsByTagName('div');
		for (var i = 0; i < aBtnSmall.length; i++) {
			aBtnSmall[i].index = i
			aBtnSmall[i].onmouseover = function() {
				for (var i = 0; i < aBtnSmall.length; i++) {
					aBtnSmall[i].className = 'contNav_item ';
					aConSmall[i + 1].style.display = 'none';
					aBtnSmall[aBtnSmall.length - 1].className = 'contNav_item last ';
				}
				this.className += 'active';
				aConSmall[this.index + 1].style.display = 'block';
			}
		}
	}
	changeSmallTab('keji');
	changeSmallTab('yingyong');
	//我爱看图选项卡
	(function() {
		var oBox = document.getElementById('woaikantu');
		var oTitle = oBox.children[0].getElementsByTagName('ul')[0];
		var aBtn = oTitle.getElementsByTagName('li');
		var aCon = oBox.children[2].children;
		for (var i = 0; i < aBtn.length; i++) {
			aBtn[i].index = i;
			aBtn[i].onmouseover = function() {
				for (var i = 0; i < aBtn.length; i++) {
					aBtn[i].className = '';
					aBtn[0].className = 'noBl ';
					aCon[i].className = 'tabs_item';
				}
				this.className += 'active';
				aCon[this.index].className = 'tabs_item show';
			}
		}
	})();
	//左侧视频直播选项卡
	(function() {
		var oBox = document.getElementById('zhibo');
		var oTitle = oBox.children[0].getElementsByTagName('div')[0];
		var aBtn = oTitle.getElementsByTagName('a');
		var aCon = oBox.children[1].children;
		for (var i = 0; i < aBtn.length; i++) {
			aBtn[i].index = i;
			aBtn[i].onmouseover = function() {
				for (var i = 0; i < aBtn.length; i++) {
					aBtn[i].className = '';
					aBtn[0].className = 'noBl ';
					aCon[i].className = 'tabs_item';
				}
				this.className += 'active';
				aCon[this.index].className = 'tabs_item show';
			};
		}
	})();
	//左侧淘宝广告选项卡
	(function() {
		var oBox = document.getElementById('taobaoadlt');
		var oTitle = oBox.children[0].getElementsByTagName('div')[0];
		var aBtn = oBox.children[1].children;
		var aCon = oBox.children[0].children[0].children;
		var oConBar = oBox.children[0].children[1];
		var aConTitle = ['屌丝逆袭之地', '屌丝2逆袭之地', '屌丝3逆袭之地', '屌丝4逆袭之地', '屌丝5逆袭之地', '屌丝66逆袭之地', '屌丝77逆袭之地', '屌丝88逆袭之地', '屌丝99逆袭之地', '屌丝10逆袭之地'];
		var aConPrice = ['$12', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9', '$10'];
		for (var i = 0; i < aBtn.length; i++) {
			aBtn[i].index = i;
			aBtn[i].onmouseover = function() {
				for (var i = 0; i < aBtn.length; i++) {
					aBtn[i].className = '';
					aCon[i].className = '';
				}
				this.className = 'active';
				aCon[this.index].className = 'show';
				oConBar.innerHTML = '<h3>' + aConTitle[this.index] + '</h3><span>' + aConPrice[this.index] + '</span>';
			};
		}
	})();
}