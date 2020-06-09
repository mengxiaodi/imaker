function getById(ele){
    return document.getElementById(ele)
}
function createElement(tag){
    return document.createElement(tag);
}
function opacity(val){
    return val*100;
}

var imgSrc = "data:image/jpg;base64,/9j/2wCEAAQDAwMDAwQDAwQFAwMDBQYFBAQFBgcGBgYGBgcJBwgICAgHCQkLCwwLCwkMDAwMDAwQEBAQEBISEhISEhISEhIBBAQEBwcHDgkJDhQODQ4UFBISEhIUEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEv/dAAQAXv/uAA5BZG9iZQBkwAAAAAH/wAARCAPoAu4DABEAAREBAhEB/8QAtQABAAMAAwEBAAAAAAAAAAAAAAUGCAMEBwECAQEAAgMBAQAAAAAAAAAAAAAABAUCAwYHARABAAIBAgIDCQsKBgIDAAAAAAECAwQRBQYSITETFDVBUWFxgbEWIjJUcnORkqGywRUjNFJTdILC0dJCYpOi4fAzQ2ODsxEBAAECAgUHCQcFAQEBAAAAAAECAwQRBQYSMVETITNBYXGxFBYiNIGRocHhFTJSU2LR8CNCcoKyovEk/9oADAMAAAERAhEAPwDfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0N/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//R38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9LfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/09/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//U38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9XfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/1t/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//X38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9DfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0d/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//S38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9PfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/1N/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//V38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9bfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/19/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Q38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9HfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0t/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//T38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9TfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/1d/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//W38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9ffwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0N/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//R38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9LfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/09/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//U38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9XfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/1t/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//X38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9DfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0d/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//S38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9PfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/1N/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//V38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9bfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/19/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Q38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9HfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0t/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9HfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0t/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//T38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9TfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/1d/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//W38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9ffwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0N/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//R38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9LfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/09/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//U38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9XfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/1t/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//X38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9DfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0d/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//S38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9PfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/1N/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//V38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9bfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/19/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Q38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9HfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0t/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//T38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9TfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/1d/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//W38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9ffwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0N/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//R38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9LfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/09/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//U38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9XfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/1t/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//X38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9DfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0d/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//S38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9PfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/1N/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//V38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9bfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/19/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Q38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9HfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0t/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//T38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9TfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/1d/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//W38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9ffwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/0N/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//R38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9LfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/09/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"; 
if(window.localStorage.getItem("imakerImg")!=null){
    imgSrc = window.localStorage.getItem("imakerImg");
}
var wrapper = createElement("div");
    wrapper.style.cssText="display:none;position:absolute;top:0;left:0;right:0;bottom:0;z-index:9999999999;overflow:hidden;";

window.onload =function(){
    wrapper.style.height = window.document.body.offsetHeight+"px";
}

var img = createElement("img");
    img.src = imgSrc;
    img.style.cssText = "width:100%;opacity:.6;position:relative;";
    wrapper.appendChild(img);
    document.body.appendChild(wrapper);
    
    //上传图片
var upload = createElement("input");
    upload.style.cssText="display:none;padding:20px 10px;font-size:14px;background:#F4A460;color:#fff;border-radius:10px;position:fixed;top:0%;right:0;z-index:999999999999999999;";
    upload.type = "file";
    upload.name = "imakerFile";
    upload.accept="images/*";
    document.body.appendChild(upload);

    upload.onchange=function(){
        let localFile = upload.files[0];
        let reader = new FileReader();
        let content;
        reader.onload = function (event) {
            content = event.target.result;
            window.localStorage.setItem("imakerImg",content);
            img.src=content;
        }
        reader.onerror = function (event) {
            alert("File could not be read! Code " + event.target.error.code);
        }
        content = reader.readAsDataURL(localFile, "UTF-8");
        upload.blur();
        upload.style.display="none";
        wrapper.style.display="block";
    }

    

    //详细信息box    
var positionBox = createElement("div");
    positionBox.style.cssText = "display:block;background:rgba(0,0,0,.68);padding:10px;min-width:80px;position:fixed;top:0;left:0;color:#fff;font-size:12px;text-align:left;";
    wrapper.appendChild(positionBox);
    //不透明度
var opacityDom = createElement("p");
    opacityDom.innerHTML = "opacity->0";
    positionBox.appendChild(opacityDom);
    //left 值
var offsetLeftDom = createElement("p");    
    offsetLeftDom.innerHTML = "left->0";
    positionBox.appendChild(offsetLeftDom);
    //top 值
    var offsetTopDom = createElement("p");    
    offsetTopDom.innerHTML = "top->0";
    positionBox.appendChild(offsetTopDom);


    document.onkeydown = function(e){
        var keyNum = window.event ? e.keyCode : e.which;
        //显示和隐藏
        if(e.keyCode==13 && e.shiftKey){
            wrapper.style.display= wrapper.style.display == "block" ? 'none' : 'block';
        }
        //切换到上键，改变opacity
        if(e.keyCode==187 && e.shiftKey){
            img.style.opacity= (opacity(img.style.opacity)+10)/100 ;
            console.log(img.style.opacity);
            opacityDom.innerHTML="opacity->"+img.style.opacity;
        }
        //切换到下键，改变opacity
        if(e.keyCode==189 && e.shiftKey){
            img.style.opacity= (opacity(img.style.opacity)-10)/100 ;
            opacityDom.innerHTML="opacity->"+img.style.opacity;
        }
        //切换到下键,改变image位移
        if(e.keyCode==38 &&  e.shiftKey){
            img.style.top= parseInt(img.offsetTop)-2+"px";
            offsetTopDom.innerHTML = "top->"+img.offsetTop;
        }
        //切换到上键,改变image位移
        if(e.keyCode == 40 && e.shiftKey){
            img.style.top= parseInt(img.offsetTop)+2+"px";
            offsetTopDom.innerHTML = "top->"+img.offsetTop;
        }
        //切换到左键,改变image位移
        if(e.keyCode==37 &&  e.shiftKey){
            img.style.left= parseInt(img.offsetLeft)-2+"px";
            offsetLeftDom.innerHTML = "left->"+img.offsetLeft;
        }
        //切换到右键,改变image位移
        if(e.keyCode == 39 &&  e.shiftKey){
            img.style.left= parseInt(img.offsetLeft)+2+"px";
            offsetLeftDom.innerHTML = "left->"+img.offsetLeft;
        }
        
        if(e.keyCode == 80 && e.ctrlKey){
            positionBox.style.display= positionBox.style.display=='block' ?  'none' :'block';
        }   
        
        if(e.keyCode == 79 && e.ctrlKey){
            upload.style.display= upload.style.display=='block' ?  'none' :'block';
        }   
        
    
    }

