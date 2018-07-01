var dirUrl="http://we.winnereleven.com/butterfly"
$.ajaxSetup({ cache: false });
function getUrl(){
  var url=location.href.split("?"),obj={};
  if(url.length>1){
    var arr=url[1].split("&");
    arr.forEach(function(v,i){
      var obj_keyarr=v.split("=");
      obj[obj_keyarr[0]]=decodeURIComponent(obj_keyarr[1]);
    })
  }
  return obj;
}