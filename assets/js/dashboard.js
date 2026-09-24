/*--- Dashboard ---*/
const ssDashPage=document.getElementById("ss-dash-page");
const ssDashMenu=document.getElementById("ss-dash-menu");
const ssDashSidebar=document.getElementById("ss-dash-sidebar");
const ssDashOverlay=document.getElementById("ss-dash-overlay");
const ssDashSidebarClose=document.getElementById("ss-dash-sidebar-close");
const ssDashLogout=document.getElementById("ss-dash-logout");
const ssDashEmailElement=document.getElementById("ss-dash-email");
const ssDashMobileEmail=document.getElementById("ss-dash-mobile-email");
const ssDashMobileName=document.getElementById("ss-dash-mobile-name");
const ssDashWelcomeName=document.getElementById("ss-dash-welcome-name");
const ssDashDate=document.getElementById("ss-dash-date");
/*--- Stored User Data ---*/
const ssDashEmail=localStorage.getItem("ssAuthEmail")||sessionStorage.getItem("ssAuthEmail")||"user@example.com";
const ssDashName=localStorage.getItem("ssAuthName")||sessionStorage.getItem("ssAuthName")||"User";
/*--- Display User Data ---*/
if(ssDashEmailElement)ssDashEmailElement.textContent=ssDashEmail;
if(ssDashMobileEmail)ssDashMobileEmail.textContent=ssDashEmail;
if(ssDashMobileName)ssDashMobileName.textContent=ssDashName;
if(ssDashWelcomeName)ssDashWelcomeName.textContent=ssDashName.split(" ")[0];
/*--- Current Date ---*/
if(ssDashDate){
const ssDate=new Date();
ssDashDate.textContent=ssDate.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});
}
/*--- Open Sidebar ---*/
const ssDashOpenSidebar=()=>{
if(!ssDashPage)return;
ssDashPage.classList.add("ss-dash-sidebar-open");
document.body.style.overflow="hidden";
};
/*--- Close Sidebar ---*/
const ssDashCloseSidebar=()=>{
if(!ssDashPage)return;
ssDashPage.classList.remove("ss-dash-sidebar-open");
document.body.style.overflow="";
};
/*--- Menu ---*/
if(ssDashMenu)ssDashMenu.addEventListener("click",ssDashOpenSidebar);
if(ssDashOverlay)ssDashOverlay.addEventListener("click",ssDashCloseSidebar);
if(ssDashSidebarClose)ssDashSidebarClose.addEventListener("click",ssDashCloseSidebar);
/*--- Escape ---*/
document.addEventListener("keydown",function(ssEvent){
if(ssEvent.key==="Escape")ssDashCloseSidebar();
});
/*--- Close On Navigation ---*/
const ssDashNavLinks=document.querySelectorAll(".ss-dash-nav-link:not(.ss-dash-nav-logout)");
ssDashNavLinks.forEach(function(ssLink){
ssLink.addEventListener("click",function(){
if(window.innerWidth<=991)ssDashCloseSidebar();
});
});
/*--- Logout ---*/
if(ssDashLogout){
ssDashLogout.addEventListener("click",function(ssEvent){
ssEvent.preventDefault();
localStorage.removeItem("ssAuthEmail");
localStorage.removeItem("ssAuthName");
localStorage.removeItem("ssAuthPhone");
localStorage.removeItem("ssAuthRole");
sessionStorage.removeItem("ssAuthEmail");
sessionStorage.removeItem("ssAuthName");
sessionStorage.removeItem("ssAuthPhone");
sessionStorage.removeItem("ssAuthRole");
window.location.href="login.html";
});
}
/*--- Resize ---*/
window.addEventListener("resize",function(){
if(window.innerWidth>991)ssDashCloseSidebar();
});