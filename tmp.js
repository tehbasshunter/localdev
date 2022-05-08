let userCurrency,userLocale,eventType,counterIndex;

window.addEventListener('onSessionUpdate', function (obj) {
    const data = obj.detail.session;
    if (!data[eventType]["name"].length) return;
	if (typeof data[counterIndex] ==="undefined" && eventType.indexOf("latest")!=-1) return;
  	if (!data[counterIndex]["count"] && eventType.indexOf("latest")!=-1) {
     console.log(data[counterIndex]["count"] + " " + data[eventType]["name"]);
      return;
    }
    if (eventType.indexOf("tip")!=-1){
        $(".main-container").html(data[eventType]["name"]+" "+data[eventType]["amount"].toLocaleString(userLocale,{style: 'currency',currency:userCurrency}));
    }else if (eventType.indexOf("sub")!=-1 || eventType.indexOf("cheer")!=-1){
        $(".main-container").html(data[eventType]["name"]+" X"+data[eventType]["amount"]);
    }else if (eventType.indexOf("raid")!=-1 || eventType.indexOf("host")!=-1){
        $(".main-container").html(data[eventType]["name"]+" X"+data[eventType]["amount"]);
    }else{
        $(".main-container").html(data[eventType]["name"]);
    }
});


window.addEventListener('onWidgetLoad', function(obj) {
    const data = obj.detail.session.data;
    userCurrency = obj.detail.currency.code;
    const fieldData = obj.detail.fieldData;
    eventType=fieldData["eventType"];
  let tmp=eventType.split("-");
  	counterIndex=tmp[0]+"-session";
  if (typeof data[counterIndex] ==="undefined" && eventType.indexOf("latest")!=-1) return;
  if (!data[counterIndex]["count"])  {
    console.log(data[counterIndex]["count"] + " " + data[eventType]["name"]);
    return;
  }
    userLocale=fieldData["locale"];
    console.log(eventType);
    console.log(data[counterIndex]);
  	
    if (!data[eventType]["name"].length) return;
    if (eventType.indexOf("tip")!=-1){
        $(".main-container").html(data[eventType]["name"]+" "+data[eventType]["amount"].toLocaleString(userLocale,{style: 'currency',currency:userCurrency}));
    }else if (eventType.indexOf("sub")!=-1 || eventType.indexOf("cheer")!=-1){
        $(".main-container").html(data[eventType]["name"]+" X"+data[eventType]["amount"]);
    }else if (eventType.indexOf("raid")!=-1 || eventType.indexOf("host")!=-1){
        $(".main-container").html(data[eventType]["name"]+" X"+data[eventType]["amount"]);
    }else{
        $(".main-container").html(data[eventType]["name"]);
    }


});