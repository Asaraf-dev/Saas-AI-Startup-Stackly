/*--- All Page Hero ---*/
const ssAllHero = document.getElementById("ss-all-hero");
const ssAllHeroVisual = document.getElementById("ss-all-hero-visual");
const ssAllHeroPage = ssAllHero?.dataset.page || "about";
/*--- Hero Content ---*/
const ssAllHeroData = {
    about: { number: "02", breadcrumb: "About", eyebrow: "About Our Intelligence", title: "Building the <span>intelligence</span> behind better digital experiences.", description: "We combine artificial intelligence, automation, data, and modern technology to create smarter digital solutions for growing businesses." },
    solutions: { number: "03", breadcrumb: "Solutions", eyebrow: "Intelligent Solutions", title: "Technology designed to make your business <span>smarter.</span>", description: "Explore intelligent solutions that automate workflows, transform data, and help modern businesses operate with greater speed and clarity." },
    blog: { number: "04", breadcrumb: "Insights", eyebrow: "Ideas & Intelligence", title: "Ideas shaping the <span>future of technology.</span>", description: "Explore practical insights, emerging AI trends, and digital strategies that can help businesses adapt, innovate, and grow." },
    contact: { number: "05", breadcrumb: "Contact", eyebrow: "Let's Build Together", title: "Have an idea? Let's turn it into something <span>intelligent.</span>", description: "Tell us about your business, challenge, or idea. Our team is ready to explore how technology can create a smarter path forward." }
};
/*--- Set Hero Content ---*/
const ssAllHeroSetContent = () => {
    if (!ssAllHero) return;
    const ssData = ssAllHeroData[ssAllHeroPage] || ssAllHeroData.about;
    const ssNumber = document.getElementById("ss-all-hero-number");
    const ssBreadcrumb = document.getElementById("ss-all-hero-breadcrumb");
    const ssEyebrow = document.getElementById("ss-all-hero-eyebrow");
    const ssTitle = document.getElementById("ss-all-hero-title");
    const ssDescription = document.getElementById("ss-all-hero-description");
    const ssPageNumber = document.getElementById("ss-all-hero-page-number");
    if (ssNumber) ssNumber.textContent = ssData.number;
    if (ssBreadcrumb) ssBreadcrumb.textContent = ssData.breadcrumb;
    if (ssEyebrow) ssEyebrow.textContent = ssData.eyebrow;
    if (ssTitle) ssTitle.innerHTML = ssData.title;
    if (ssDescription) ssDescription.textContent = ssData.description;
    if (ssPageNumber) ssPageNumber.textContent = ssData.number;
};
/*--- Hero Mouse Interaction ---*/
if (ssAllHero && ssAllHeroVisual && window.matchMedia("(pointer:fine)").matches) {
    ssAllHeroVisual.addEventListener("mousemove", function (ssEvent) {
        const ssRect = ssAllHeroVisual.getBoundingClientRect();
        const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
        const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
        ssAllHeroVisual.style.setProperty("--ss-all-hero-mouse-x", (ssX * 18) + "px");
        ssAllHeroVisual.style.setProperty("--ss-all-hero-mouse-y", (ssY * 18) + "px");
        ssAllHeroVisual.style.setProperty("--ss-all-hero-rotate-x", (ssY * -4) + "deg");
        ssAllHeroVisual.style.setProperty("--ss-all-hero-rotate-y", (ssX * 5) + "deg");
    });
    ssAllHeroVisual.addEventListener("mouseleave", function () {
        ssAllHeroVisual.style.setProperty("--ss-all-hero-mouse-x", "0px");
        ssAllHeroVisual.style.setProperty("--ss-all-hero-mouse-y", "0px");
        ssAllHeroVisual.style.setProperty("--ss-all-hero-rotate-x", "0deg");
        ssAllHeroVisual.style.setProperty("--ss-all-hero-rotate-y", "0deg");
    });
}
/*--- Hero Scroll ---*/
const ssAllHeroPrimary = document.getElementById("ss-all-hero-primary");
if (ssAllHeroPrimary) {
    ssAllHeroPrimary.addEventListener("click", function (ssEvent) {
        const ssTarget = document.getElementById("ss-all-hero-next");
        if (ssTarget) {
            ssEvent.preventDefault();
            ssTarget.scrollIntoView({ behavior: "smooth" });
        }
    });
}
/*--- Hero Initialization ---*/
ssAllHeroSetContent();