/*--- Footer ---*/
const ssInitializeFooter=()=>{const ssFooterYear=document.getElementById("ss-footer-year");const ssFooterBacktop=document.getElementById("ss-footer-backtop");
/*--- Dynamic Year ---*/
if(ssFooterYear){ssFooterYear.textContent=new Date().getFullYear();}
/*--- Back To Top ---*/
if(ssFooterBacktop){ssFooterBacktop.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"});});}
};
/*--- Component Initialization ---*/
document.addEventListener("ssComponentsLoaded",ssInitializeFooter);