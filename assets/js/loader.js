/*--- Loader ---*/
const ssLdrLoader=document.getElementById("ss-ldr-loader");
const ssLdrMessage=document.getElementById("ss-ldr-message");
let ssLdrMessageInterval=null;
let ssLdrHideTimeout=null;
/*--- Loader Messages ---*/
const ssLdrMessages=["Initializing intelligent experience...","Connecting smart systems...","Preparing your AI workspace...","Building a better digital experience...","Almost ready to explore..."];
let ssLdrMessageIndex=0;
/*--- Show Loader ---*/
function ssShowLoader(){if(!ssLdrLoader)return;clearTimeout(ssLdrHideTimeout);clearInterval(ssLdrMessageInterval);ssLdrLoader.style.display="flex";ssLdrLoader.classList.remove("ss-ldr-hidden","ss-ldr-exit");ssLdrMessageIndex=0;if(ssLdrMessage){ssLdrMessage.textContent=ssLdrMessages[0];ssLdrMessage.style.opacity="1";ssLdrMessage.style.transform="translateY(0)";}ssLdrMessageInterval=setInterval(function(){ssLdrMessageIndex++;if(ssLdrMessageIndex>=ssLdrMessages.length){ssLdrMessageIndex=0;}if(ssLdrMessage){ssLdrMessage.style.opacity="0";ssLdrMessage.style.transform="translateY(5px)";setTimeout(function(){if(ssLdrMessage){ssLdrMessage.textContent=ssLdrMessages[ssLdrMessageIndex];ssLdrMessage.style.opacity="1";ssLdrMessage.style.transform="translateY(0)";}},250);}},1400);}
/*--- Hide Loader ---*/
function ssHideLoader(){if(!ssLdrLoader)return;clearTimeout(ssLdrHideTimeout);ssLdrHideTimeout=setTimeout(function(){clearInterval(ssLdrMessageInterval);ssLdrLoader.classList.add("ss-ldr-exit");setTimeout(function(){if(ssLdrLoader){ssLdrLoader.classList.add("ss-ldr-hidden");ssLdrLoader.style.display="none";}},650);},500);}
/*--- Mouse Glow ---*/
document.addEventListener("mousemove",function(ssLdrEvent){if(!ssLdrLoader||ssLdrLoader.classList.contains("ss-ldr-hidden"))return;const ssLdrX=ssLdrEvent.clientX/window.innerWidth*100;const ssLdrY=ssLdrEvent.clientY/window.innerHeight*100;ssLdrLoader.style.setProperty("--ss-ldr-mouse-x",ssLdrX+"%");ssLdrLoader.style.setProperty("--ss-ldr-mouse-y",ssLdrY+"%");});
/*--- Initial Page Load ---*/
if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",ssShowLoader,{once:true});}else{ssShowLoader();}
/*--- Window Loaded ---*/
window.addEventListener("load",ssHideLoader,{once:true});
/*--- Browser Back / Forward ---*/
window.addEventListener("pageshow",function(ssLdrEvent){if(ssLdrEvent.persisted){ssShowLoader();requestAnimationFrame(function(){setTimeout(ssHideLoader,250);});}});