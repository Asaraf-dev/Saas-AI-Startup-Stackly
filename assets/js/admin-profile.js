/*--- Admin Profile ---*/
const ssPrfGetStoredValue=(ssKey,ssFallback="")=>localStorage.getItem(ssKey)||sessionStorage.getItem(ssKey)||ssFallback;
/*--- Stored Account Data ---*/
const ssPrfName=ssPrfGetStoredValue("ssAuthName","User");
const ssPrfPhone=ssPrfGetStoredValue("ssAuthPhone","Not available");
const ssPrfEmail=ssPrfGetStoredValue("ssAuthEmail","user@example.com");
const ssPrfRole=ssPrfGetStoredValue("ssAuthRole","admin");
/*--- Role Label ---*/
const ssPrfRoleLabel=ssPrfRole==="admin"?"Admin":"Client";
/*--- Profile Elements ---*/
const ssPrfNameElement=document.getElementById("ss-prf-name");
const ssPrfEmailElement=document.getElementById("ss-prf-email");
const ssPrfPhoneElement=document.getElementById("ss-prf-phone");
const ssPrfRoleElement=document.getElementById("ss-prf-role");
const ssPrfAccountType=document.getElementById("ss-prf-account-type");
const ssPrfInfoName=document.getElementById("ss-prf-info-name");
const ssPrfInfoEmail=document.getElementById("ss-prf-info-email");
const ssPrfInfoPhone=document.getElementById("ss-prf-info-phone");
const ssPrfInfoRole=document.getElementById("ss-prf-info-role");
const ssPrfDetailName=document.getElementById("ss-prf-detail-name");
const ssPrfDetailEmail=document.getElementById("ss-prf-detail-email");
const ssPrfDetailPhone=document.getElementById("ss-prf-detail-phone");
const ssPrfDetailRole=document.getElementById("ss-prf-detail-role");
const ssPrfStorageSource=document.getElementById("ss-prf-storage-source");
/*--- Display Profile Data ---*/
if(ssPrfNameElement)ssPrfNameElement.textContent=ssPrfName;
if(ssPrfEmailElement)ssPrfEmailElement.textContent=ssPrfEmail;
if(ssPrfPhoneElement)ssPrfPhoneElement.textContent=ssPrfPhone;
if(ssPrfRoleElement)ssPrfRoleElement.textContent=ssPrfRoleLabel;
if(ssPrfAccountType)ssPrfAccountType.textContent=ssPrfRole==="admin"?"Administrator Account":"Client Account";
if(ssPrfInfoName)ssPrfInfoName.textContent=ssPrfName;
if(ssPrfInfoEmail)ssPrfInfoEmail.textContent=ssPrfEmail;
if(ssPrfInfoPhone)ssPrfInfoPhone.textContent=ssPrfPhone;
if(ssPrfInfoRole)ssPrfInfoRole.textContent=ssPrfRoleLabel;
if(ssPrfDetailName)ssPrfDetailName.textContent=ssPrfName;
if(ssPrfDetailEmail)ssPrfDetailEmail.textContent=ssPrfEmail;
if(ssPrfDetailPhone)ssPrfDetailPhone.textContent=ssPrfPhone;
if(ssPrfDetailRole)ssPrfDetailRole.textContent=ssPrfRoleLabel;
/*--- Storage Source ---*/
if(ssPrfStorageSource){
const ssHasLocal=Boolean(localStorage.getItem("ssAuthName")||localStorage.getItem("ssAuthPhone")||localStorage.getItem("ssAuthEmail")||localStorage.getItem("ssAuthRole"));
const ssHasSession=Boolean(sessionStorage.getItem("ssAuthName")||sessionStorage.getItem("ssAuthPhone")||sessionStorage.getItem("ssAuthEmail")||sessionStorage.getItem("ssAuthRole"));
ssPrfStorageSource.textContent=ssHasLocal&&ssHasSession?"Local + Session":ssHasLocal?"Local Storage":ssHasSession?"Session Storage":"No storage data";
}
/*--- Profile Logout ---*/
const ssPrfLogout=document.getElementById("ss-prf-logout");
if(ssPrfLogout){
ssPrfLogout.addEventListener("click",function(){
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