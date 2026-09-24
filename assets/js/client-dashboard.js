/*--- Client Dashboard ---*/
const ssCliGetStoredValue=(ssKey,ssFallback="")=>sessionStorage.getItem(ssKey)||localStorage.getItem(ssKey)||ssFallback;
/*--- Client Data ---*/
const ssCliName=ssCliGetStoredValue("ssAuthName","User");
const ssCliEmail=ssCliGetStoredValue("ssAuthEmail","user@example.com");
const ssCliRole=ssCliGetStoredValue("ssAuthRole","client");
/*--- Welcome Name ---*/
const ssCliFirstName=ssCliName.trim().split(/\s+/)[0]||"User";
const ssCliWelcomeName=document.getElementById("ss-cli-welcome-name");
if(ssCliWelcomeName)ssCliWelcomeName.textContent=ssCliFirstName;
/*--- Current Date ---*/
const ssCliDate=document.getElementById("ss-cli-date");
if(ssCliDate){
const ssDate=new Date();
ssCliDate.textContent=ssDate.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});
}
/*--- Client Validation ---*/
if(ssCliRole==="admin"){
console.warn("Admin account opened the client dashboard.");
}
/*--- Project Buttons ---*/
const ssCliProjectButtons=document.querySelectorAll(".ss-cli-project-btn");
ssCliProjectButtons.forEach(function(ssButton){
ssButton.addEventListener("click",function(){
window.location.href="404.html";
});
});
/*--- New Project ---*/
const ssCliDisabledAction=document.querySelector(".ss-cli-action-disabled");
if(ssCliDisabledAction){
ssCliDisabledAction.addEventListener("click",function(ssEvent){
ssEvent.preventDefault();
window.location.href="404.html";
});
}