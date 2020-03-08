//down load capture .

function saveimage() {

  //   document.querySelector("#downloadscoreimg").addEventListener("click",()=>{
  //   html2canvas(document.body,
  //   {
  //     onrendered: function (canvas) {
  //       var a = document.createElement('a');
  //       // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
  //       a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  //       a.download = '成绩单.jpg';
  //       a.click();
  //     }
  //   });
  // });


    var downloadbtn = document.getElementById("downloadscoreimg");
    if(downloadbtn){
        downloadbtn.setAttribute("disabled", true);
        var msg = "正在生成图片...";
        downloadbtn.innerHTML = msg+"<img src=\"/static/img/login2.gif\" width=\"20px\" height=\"20px\"> ";

    }
    //翻转屏幕
    changeScreen();

    //开始保存
    setTimeout(saveDocument(),3000);


}

function saveDocument() {
    html2canvas(document.body,{
            scale:2,
            logging:true,
            useCORS:true,
            allowTaint:true,
            // width:innerWidth*2,
            windowWidth:innerWidth,
            // windowHeight:innerHeight,


            ignoreElements:(element)=>{
            /*遍历每个节点*/
            if(element.id == 'waifu-toggle' || element.id==='waifu'|| element.id === 'waifu-tool' || element.id === 'live2d' || element.id === 'waifu-tips'){
                console.log(element);
                return true;
            }

        }
    }).then(function (canvas) {
        var a = document.createElement('a');
     // var triggerDownload = a.attr("href", url).attr("download", "成绩单.png").appendTo("body");
     //           triggerDownload[0].click();
     //           triggerDownload.remove();
        a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        a.download = '成绩单.jpg';
        a.click();

        //再次反转回屏幕
        // changeScreen();

        //保存图片成功
        setTimeout(saveSuccess(),3000);

    });

}

function saveSuccess() {
    var downloadbtn = document.getElementById("downloadscoreimg");
    if(downloadbtn){
       // downloadbtn.setAttribute("disabled", false);

        var msg = "图片已生成";
        downloadbtn.innerHTML = msg+" <span class=\"glyphicon glyphicon-saved\" aria-hidden=\"true\"></span> ";
        setTimeout(downloadbtn.removeAttribute("disabled"),2000);
    }

}

function changeScreen() {
    //转屏

    if(/Android|webOS|iPhone|iPod|BlackBerry|ios/i.test(navigator.userAgent)) {

        //屏幕方向标识，0横屏，其他值竖屏
    var orientation=0;
    //判断是否是手机
    var innerWidthTmp = window.innerWidth;
        try{
        var iw = window.innerWidth;
        //屏幕更改为竖屏
        if(iw != innerWidthTmp){
            if(iw>window.innerHeight)orientation = 90;
            else orientation = 0;
            //调用转屏事件
            screenOrientationEvent();
            window.innerWidthTmp = iw;
        }
    } catch(e){alert(e);};

        alert("请先将手机横屏！页面才能完整截图保存!横屏后点击确定将继续保存成绩单！")

    }


}

