/*--- 404 ---*/
const ss404Back = document.getElementById("ss-404-back");
/*--- Go Back ---*/
if (ss404Back) { ss404Back.addEventListener("click", () => { if (window.history.length > 1) { window.history.back(); } else { window.location.href = "index.html"; } }); }