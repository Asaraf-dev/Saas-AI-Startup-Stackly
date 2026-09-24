/*--- Hero Section Start ---*/
/*--- Index Hero ---*/
const ssIndHero = document.getElementById("ss-ind-hero");
const ssIndHeroImage = document.querySelector(".ss-ind-hero-image-wrap");
const ssIndHeroVisual = document.querySelector(".ss-ind-hero-visual");
const ssIndHeroCards = document.querySelectorAll(".ss-ind-hero-card");
/*--- Hero Mouse Interaction ---*/
if (ssIndHero && ssIndHeroVisual && window.matchMedia("(pointer:fine)").matches) {
    ssIndHeroVisual.addEventListener("mousemove", function (ssEvent) {
        const ssRect = ssIndHeroVisual.getBoundingClientRect();
        const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
        const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
        if (ssIndHeroImage) { ssIndHeroImage.style.transform = `rotateY(${-7 + ssX * 8}deg) rotateX(${2 - ssY * 6}deg) translate3d(${ssX * 8}px,${ssY * 8}px,0)`; }
        ssIndHeroCards.forEach((ssCard, ssIndex) => { const ssDepth = (ssIndex + 1) * 4; ssCard.style.transform = `translate3d(${ssX * ssDepth}px,${ssY * ssDepth}px,0)`; });
    });
    ssIndHeroVisual.addEventListener("mouseleave", function () {
        if (ssIndHeroImage) { ssIndHeroImage.style.transform = "rotateY(-7deg) rotateX(2deg) translate3d(0,0,0)"; }
        ssIndHeroCards.forEach(ssCard => { ssCard.style.transform = ""; });
    });
}
/*--- Hero Scroll Button ---*/
const ssIndHeroScroll = document.querySelector(".ss-ind-hero-scroll");
if (ssIndHeroScroll) { ssIndHeroScroll.addEventListener("click", () => { const ssNextSection = ssIndHero?.nextElementSibling; if (ssNextSection) { ssNextSection.scrollIntoView({ behavior: "smooth" }); } }); }
/*--- Hero Section End ---*/

/*--- What We Do Section Start ---*/
const ssIndAboutShowcase = document.querySelector(".ss-ind-about-showcase");
const ssIndAboutCards = document.querySelectorAll(".ss-ind-about-card");
if (ssIndAboutShowcase && window.matchMedia("(pointer:fine)").matches) {
    ssIndAboutShowcase.addEventListener("mousemove", function (ssEvent) {
        const ssRect = ssIndAboutShowcase.getBoundingClientRect();
        const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
        const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
        ssIndAboutCards.forEach(function (ssCard, ssIndex) {
            const ssDepth = (ssIndex + 1) * 2;
            ssCard.style.transform = `translate3d(${ssX * ssDepth}px,${ssY * ssDepth}px,0)`;
        });
    });
    ssIndAboutShowcase.addEventListener("mouseleave", function () {
        ssIndAboutCards.forEach(function (ssCard) { ssCard.style.transform = ""; });
    });
}
/*--- What We Do Section End ---*/

/*--- AI Solutions Section Start ---*/
const ssIndSolutionsCards = document.querySelectorAll(".ss-ind-solutions-card");
if (ssIndSolutionsCards.length && window.matchMedia("(pointer:fine)").matches) {
    ssIndSolutionsCards.forEach(function (ssCard) {
        ssCard.addEventListener("mousemove", function (ssEvent) {
            const ssRect = ssCard.getBoundingClientRect();
            const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
            const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
            ssCard.style.setProperty("--ss-solutions-x", (ssX * 8) + "px");
            ssCard.style.setProperty("--ss-solutions-y", (ssY * 8) + "px");
        });
        ssCard.addEventListener("mouseleave", function () {
            ssCard.style.setProperty("--ss-solutions-x", "0px");
            ssCard.style.setProperty("--ss-solutions-y", "0px");
        });
    });
}
/*--- AI Solutions Section End ---*/

/*--- Testimonials Section Start ---*/
const ssIndTestimonialsFeature = document.querySelector(".ss-ind-testimonials-feature");
if (ssIndTestimonialsFeature && window.matchMedia("(pointer:fine)").matches) {
    ssIndTestimonialsFeature.addEventListener("mousemove", function (ssEvent) {
        const ssRect = ssIndTestimonialsFeature.getBoundingClientRect();
        const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
        const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
        ssIndTestimonialsFeature.style.setProperty("--ss-testimonials-x", (ssX * 8) + "px");
        ssIndTestimonialsFeature.style.setProperty("--ss-testimonials-y", (ssY * 8) + "px");
    });
    ssIndTestimonialsFeature.addEventListener("mouseleave", function () {
        ssIndTestimonialsFeature.style.setProperty("--ss-testimonials-x", "0px");
        ssIndTestimonialsFeature.style.setProperty("--ss-testimonials-y", "0px");
    });
}
/*--- Testimonials Section End ---*/

/*--- Latest Insights Section Start ---*/
const ssIndBlogCards = document.querySelectorAll(".ss-ind-blog-featured,.ss-ind-blog-card");
if (ssIndBlogCards.length && window.matchMedia("(pointer:fine)").matches) {
    ssIndBlogCards.forEach(function (ssCard) {
        ssCard.addEventListener("mousemove", function (ssEvent) {
            const ssRect = ssCard.getBoundingClientRect();
            const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
            const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
            ssCard.style.setProperty("--ss-blog-x", (ssX * 4) + "px");
            ssCard.style.setProperty("--ss-blog-y", (ssY * 4) + "px");
        });
        ssCard.addEventListener("mouseleave", function () {
            ssCard.style.setProperty("--ss-blog-x", "0px");
            ssCard.style.setProperty("--ss-blog-y", "0px");
        });
    });
}

/*--- Blog Read Buttons ---*/
const ssIndBlogReadButtons=document.querySelectorAll(".ss-ind-blog-read");
if(ssIndBlogReadButtons.length){
ssIndBlogReadButtons.forEach(function(ssButton){
ssButton.addEventListener("click",function(ssEvent){
ssEvent.preventDefault();
ssEvent.stopPropagation();
window.location.href="404.html";
});
});
}
/*--- Latest Insights Section End ---*/