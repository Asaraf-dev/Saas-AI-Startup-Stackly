/*--- Client Analytics ---*/
const ssCliAnlGetStoredValue=(ssKey,ssFallback="")=>sessionStorage.getItem(ssKey)||localStorage.getItem(ssKey)||ssFallback;
/*--- Client Data ---*/
const ssCliAnlName=ssCliAnlGetStoredValue("ssAuthName","User");
const ssCliAnlEmail=ssCliAnlGetStoredValue("ssAuthEmail","user@example.com");
const ssCliAnlRole=ssCliAnlGetStoredValue("ssAuthRole","client");
/*--- Analytics Period ---*/
const ssCliAnlPeriod=document.getElementById("ss-cli-anl-period");
const ssCliAnlPeriodText=document.getElementById("ss-cli-anl-period-text");
const ssCliAnlPeriods=["Last 7 Days","Last 30 Days","Last 90 Days"];
let ssCliAnlPeriodIndex=1;
if(ssCliAnlPeriod){
ssCliAnlPeriod.addEventListener("click",function(){
ssCliAnlPeriodIndex=(ssCliAnlPeriodIndex+1)%ssCliAnlPeriods.length;
if(ssCliAnlPeriodText)ssCliAnlPeriodText.textContent=ssCliAnlPeriods[ssCliAnlPeriodIndex];
});
}
/*--- Export ---*/
const ssCliAnlExport=document.getElementById("ss-cli-anl-export");
if(ssCliAnlExport){
ssCliAnlExport.addEventListener("click",function(){
window.location.href="404.html";
});
}
/*--- Project Interaction ---*/
const ssCliAnlProjectRows=document.querySelectorAll(".ss-cli-anl-project-row:not(.ss-cli-anl-project-heading)");
ssCliAnlProjectRows.forEach(function(ssRow){
ssRow.addEventListener("click",function(){
ssRow.classList.toggle("ss-cli-anl-project-row-active");
});
});
/*--- Client Role Check ---*/
if(ssCliAnlRole==="admin"){
console.warn("Admin account opened the client analytics page.");
}