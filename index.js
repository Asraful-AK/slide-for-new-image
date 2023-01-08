let slide=document.querySelector(".slide2");
document.addEventListener("mousemove",function (e) {
    let x=e.clientX;
    slide.style.left=x+"px";
  })