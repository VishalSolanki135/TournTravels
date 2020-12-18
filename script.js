
function entersite(){
  console.log("Enter Site");
  $("#landing").css("transform","translate(-200vw)");
  $("#dimmed-bg").css("visibility","visible");
  $("#dimmed-bg").css("transform","translate(0)");
  $("#above-fold").css("opacity","1");
  $("#full-site").css("visibility","visible");
  $("#full-site").css("overflow","visible");
  $("#full-site").css("max-height","auto");
  $("#register-side-bar").css("transform","translateX(0)")
}
$("#visible-section").mouseenter(function(){openForm();})
$("#empty-section").mouseenter(function(){closeForm();})
function openForm(){
  $("#register-side-bar").css("transform","translate(-315px)");
  $("#register-side-bar").css("transform-delay","0s");
  $("#register-side-bar").css("z-index","100");

  $("#call-num").css("opacity","0");
  $("#reg").css("opacity","0");

}
function closeForm(){
  $("#register-side-bar").css("transform","translate(0)");
  $("#register-side-bar").css("z-index","0");

  $("#call-num").css("opacity","1");
  $("#reg").css("opacity","1");
}

(function manageTotalUsers(){
  let totalusers = String(getRandom(100000,200000));
  totalusers = addComma(totalusers);

  addToTotalUsers(totalusers);

  function addToTotalUsers(currentvalue){
    let num = Number(currentvalue.replace(",",""));
    num++;
    num = String(num);
    num = addComma(num);
    $("#total-users").html(num);
    setTimeout(function(){
      addToTotalUsers(num);
    }, getRandom(100,3000));

  }





  function getRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
  }
  function addComma(num){
    return num.slice(0,3)+","+num.slice(3,6);
  }


})();
