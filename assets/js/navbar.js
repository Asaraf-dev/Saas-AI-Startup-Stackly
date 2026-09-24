/*--- Navbar ---*/
const ssInitializeNavbar=()=>{const ssNavbar=document.getElementById("ss-navbar");const ssNavbarToggle=document.getElementById("ss-navbar-toggle");const ssNavbarMobile=document.getElementById("ss-navbar-mobile");const ssNavbarMobileClose=document.getElementById("ss-navbar-mobile-close");const ssNavbarOverlay=document.getElementById("ss-navbar-overlay");const ssNavbarMobileLinks=document.querySelectorAll(".ss-navbar-mobile-link");const ssNavbarLinks=document.querySelectorAll(".ss-navbar-link");if(!ssNavbar)return;
/*--- Scroll Effect ---*/
const ssNavbarScroll=()=>{if(window.scrollY>30){ssNavbar.classList.add("scrolled");}else{ssNavbar.classList.remove("scrolled");}};
window.addEventListener("scroll",ssNavbarScroll,{passive:true});
ssNavbarScroll();
/*--- Mobile Menu Open ---*/
const ssNavbarOpen=()=>{if(!ssNavbarMobile||!ssNavbarOverlay||!ssNavbarToggle)return;ssNavbarMobile.classList.add("ss-navbar-mobile-active");ssNavbarOverlay.classList.add("ss-navbar-overlay-active");ssNavbarToggle.classList.add("ss-navbar-toggle-active");ssNavbarToggle.setAttribute("aria-expanded","true");document.body.style.overflow="hidden";};
/*--- Mobile Menu Close ---*/
const ssNavbarClose=()=>{if(!ssNavbarMobile||!ssNavbarOverlay||!ssNavbarToggle)return;ssNavbarMobile.classList.remove("ss-navbar-mobile-active");ssNavbarOverlay.classList.remove("ss-navbar-overlay-active");ssNavbarToggle.classList.remove("ss-navbar-toggle-active");ssNavbarToggle.setAttribute("aria-expanded","false");document.body.style.overflow="";};
/*--- Mobile Menu Toggle ---*/
if(ssNavbarToggle){ssNavbarToggle.addEventListener("click",()=>{if(ssNavbarMobile.classList.contains("ss-navbar-mobile-active")){ssNavbarClose();}else{ssNavbarOpen();}});}
/*--- Mobile Menu Close ---*/
if(ssNavbarMobileClose){ssNavbarMobileClose.addEventListener("click",ssNavbarClose);}
if(ssNavbarOverlay){ssNavbarOverlay.addEventListener("click",ssNavbarClose);}
ssNavbarMobileLinks.forEach(ssLink=>{ssLink.addEventListener("click",ssNavbarClose);});
/*--- Escape Key ---*/
document.addEventListener("keydown",ssEvent=>{if(ssEvent.key==="Escape"&&ssNavbarMobile&&ssNavbarMobile.classList.contains("ss-navbar-mobile-active")){ssNavbarClose();}});
/*--- Active Navigation ---*/
const ssNavbarCurrentPage=window.location.pathname.split("/").pop()||"index.html";
ssNavbarLinks.forEach(ssLink=>{const ssNavbarHref=ssLink.getAttribute("href");if(ssNavbarHref===ssNavbarCurrentPage){ssNavbarLinks.forEach(ssItem=>ssItem.classList.remove("ss-navbar-link-active"));ssLink.classList.add("ss-navbar-link-active");}});
ssNavbarMobileLinks.forEach(ssLink=>{const ssNavbarHref=ssLink.getAttribute("href");if(ssNavbarHref===ssNavbarCurrentPage){ssNavbarMobileLinks.forEach(ssItem=>ssItem.classList.remove("ss-navbar-mobile-link-active"));ssLink.classList.add("ss-navbar-mobile-link-active");}});
/*--- Resize Handler ---*/
window.addEventListener("resize",()=>{if(window.innerWidth>991&&ssNavbarMobile&&ssNavbarMobile.classList.contains("ss-navbar-mobile-active")){ssNavbarClose();}});
};
/*--- Component Initialization ---*/
document.addEventListener("ssComponentsLoaded",ssInitializeNavbar);