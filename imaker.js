function getById(ele){
    return document.getElementById(ele)
}
function createElement(tag){
    return document.createElement(tag);
}
var imgSrc = ""; 
var wrapper = createElement("div");
    wrapper.style.cssText="display:none;position:absolute;top:0;left:0;right:0;bottom:0;z-index:9999999999;";
var img = createElement("img");
    img.src = imgSrc;
    img.style.cssText = "width:100%;opacity:.6";
    wrapper.appendChild(img);
    document.body.appendChild(wrapper);