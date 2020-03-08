 function check() {
            var user_name=form1.StudentNum.value;
            var user_pwd=form1.Passwd.value;
            if((user_name=="")||(user_name==null)){
                alert("你是不是忘记给我学号？哼，真调皮 <－biubiu－⊂(`ω´∩)打屎你");
                return 0;
            }
            else if((user_pwd=="")||(user_pwd==null)){
                alert("密码呢！密码呢！密码呢！？？？重要的事情说三遍！(๑‾^‾๑) ❀");
                return 0;}
            else if(user_name.length != 9){
                alert("学号！学号！学号都记不住 ？！");
                return 0;
            }else if(user_pwd.length <6){
                alert("密码小于6位啦！！！再仔细检查一下！");
                // form1.pwd.focus();
                return 0;
            }else{
                form1.submit()
                document.getElementById("login-button").setAttribute("disabled", true);
                // document.getElementById("login-button").innerText="正在拼命查询中...请等待一小会儿哦*_*乖 <img src=\"/static/img/login2.gif\" width=\"25px\" height=\"25px\"> "
                var Msg = "正在拼命查询中...请等待一小会儿哦*_*乖 "
                document.getElementById("login-button").innerHTML= Msg + "<img src=\"/static/img/login2.gif\" width=\"25px\" height=\"25px\"> ";
                // document.getElementById("Loding").className = " lodingStyle";
                // document.getElementById("Loding").setAttribute("class","lodingStyle");
                }
            }

    function closeAd() {
        document.getElementById("adline").className = "  close-ad-change";


            }
            


 function getContant(){
 	var contantview = document.getElementById("ContantView");
 	
 	if(contantview){
	 		// console.log("格言已加载")
	    $.getJSON("https://v1.hitokoto.cn/?encode=json&c=j&c=i&c=l&c=d&c=g",function(json){
	                   content = json["hitokoto"];   //获取格言内容
	                    author = json["from"];            //获取格言作者
	
	                var MSGView = "<div class=\"alert alert-success alert-dismissible\" role=\"alert\">\n" +
	                    "\t\t\t  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
	                    "               " +
	                    "<span class=\"glyphicon glyphicon glyphicon-heart\" aria-hidden=\"true\"> 每日一言:</span> <br><span id=\"ContantSome\"></span><br><span id=\"contantFrom\"></span>\n" +
	                    "\t\t\t</div>"
	
	               
	                
	                if(contantview){
	                	contantview.innerHTML = MSGView;
	                }
	                
	                var contantsome = document.getElementById("ContantSome");
	                if(contantsome){
	                	contantsome.innerText = content;
	                }
	                var contentfrom = document.getElementById("contantFrom");
	                if(contentfrom){
	                	contentfrom.innerText = "---------作者:"+author;
	                }
	
	                });
	            }
 		
 	}
    

$(function () {
  $('[data-toggle="popover"]').popover()
})

 $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

 function inVisibleButton(){
 	//打开按钮禁用
 	var buttonEnter = document.getElementById("login-button");
 	var msg = "查询";
 	if(buttonEnter){
 		
 		buttonEnter.innerHTML = msg;
 		// buttonEnter.setAttribute("disabled", false);
 		buttonEnter.removeAttribute('disabled');
 		
 	}
 	
 	
 }
 inVisibleButton();
 //function showcopy(){
	//  	if (window.console) {
	 		
	//  		var re = /x/;
	// 		var i = 0;
	// 		console.log(re);
			
	// 		re.toString = function () {
	// 			var cons = console;
	//     		if (cons) {
	// 				console.log("%c ", "background: url(httpS://chaxun.mzlblog.com/static/img/log.png) no-repeat center;padding-left:419px;padding-bottom: 112px;");
	// 				console.log("©2020 信息工程学院 MZLBLOG.com");
		 
	//     		}
	//     		return ;
	// 		};
	 		
	 		
 //   }
 //}
  function showcopy(){
	 	if (window.console) {
	 		
			var cons = console;
	    	if (cons) {
				console.log("%c ", "background: url(httpS://chaxun.mzlblog.com/static/img/log.png) no-repeat center;padding-left:419px;padding-bottom: 112px;");
				console.log("©2020 信息工程学院 MZLBLOG.com");
		 
	    	}
			}
	 		
	 		
    }
 
 
 