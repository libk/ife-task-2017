window.onload = function() {
  var oMenu = document.getElementById("menu");

  document.oncontextmenu = function(ev) {
    var ev = ev||event;
    oMenu.style.display = "block";
    ev.preventDefault();

    oMenu.style.top = ev.clientY + "px";
    oMenu.style.left = ev.clientX + "px";

    //最大显示范围
    var maxWidth = document.documentElement.clientWidth - oMenu.offsetWidth;
    var maxHeight = document.documentElement.clientHeight - oMenu.offsetHeight;

    //防止菜单溢出
    oMenu.offsetTop > maxHeight && (oMenu.style.top = maxHeight + "px");
    oMenu.offsetLeft > maxWidth && (oMenu.style.left = maxWidth + "px");
  }

  document.onclick = function() {
    oMenu.style.display = "none";
  }
}