
function initLoadMethod(){

    // 页面加载渲染完成时
    window.onload = function () {
         alert('onload001');
      window.ectana.analytics( JSON.stringify({'type':'start','pageName':location.href+""}) );

    }

    var _t;  
    window.onbeforeunload = function(){   
      setTimeout(function(){_t = setTimeout(onunloadcancel, 0)}, 0);  
    }

    // 页面刷新时
    window.onunloadcancel = function(){
         // alert('onunloadcancel');
      // alert("真的离开囖123", location.href); 
      window.ectana.analytics( JSON.stringify({'type':'end','pageName':location.href+""}) );
      clearTimeout(_t); 
    }  
    // 页面离开时触发
    window.onunload = function(){
         // alert('onunload');
      // alert("真的离开囖", location.href); 
      window.ectana.analytics( JSON.stringify({'type':'end','pageName':location.href+""}) );
    }
}
            
function analyticsEvent (eventId, label) {
  // alert(eventId + "_" + label)
  window.ectana.analytics( JSON.stringify({'type':'event','eventId':eventId,'label':label,'userId':"",'pageName':location.href+""}) );
}

