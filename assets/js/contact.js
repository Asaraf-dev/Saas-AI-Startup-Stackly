/*--- Contact Introduction Section Start ---*/
const ssCntIntroServices = document.querySelectorAll(".ss-cnt-intro-service");
if (ssCntIntroServices.length && window.matchMedia("(pointer:fine)").matches) {
    ssCntIntroServices.forEach(function (ssService) {
        ssService.addEventListener("mousemove", function (ssEvent) {
            const ssRect = ssService.getBoundingClientRect();
            const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
            const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
            ssService.style.transform = `translate3d(${ssX * 4}px,${ssY * 4}px,0) translateY(-5px)`;
        });
        ssService.addEventListener("mouseleave", function () {
            ssService.style.transform = "";
        });
    });
}
/*--- Contact Introduction Section End ---*/

/*--- Contact Information + Main Contact Form Section Start ---*/
const ssCntMainForm = document.getElementById("ss-cnt-main-form");
const ssCntName = document.getElementById("ss-cnt-name");
const ssCntPhone = document.getElementById("ss-cnt-phone");
const ssCntPopup = document.getElementById("ss-cnt-popup");
const ssCntPopupClose = document.getElementById("ss-cnt-popup-close");
const ssCntPopupDone = document.getElementById("ss-cnt-popup-done");
const ssCntPopupOverlay = document.querySelector("[data-popup-close]");
/*--- Name Validation ---*/
if (ssCntName) {
    ssCntName.addEventListener("input", function () {
        this.value = this.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ ]/g, "").replace(/\s{2,}/g, " ");
    });
}
/*--- Phone Validation ---*/
if (ssCntPhone) {
    ssCntPhone.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });
    ssCntPhone.addEventListener("keydown", function (ssEvent) {
        const ssAllowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"];
        if (ssAllowedKeys.includes(ssEvent.key) || ssEvent.ctrlKey || ssEvent.metaKey) return;
        if (!/^\d$/.test(ssEvent.key)) ssEvent.preventDefault();
    });
}
/*--- Open Success Popup ---*/
const ssCntOpenPopup = () => {
    if (!ssCntPopup) return;
    ssCntPopup.classList.add("ss-cnt-popup-active");
    ssCntPopup.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(() => ssCntPopupClose?.focus(), 100);
};
/*--- Close Success Popup ---*/
const ssCntClosePopup = () => {
    if (!ssCntPopup) return;
    ssCntPopup.classList.remove("ss-cnt-popup-active");
    ssCntPopup.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
};
/*--- Form Submit ---*/
if (ssCntMainForm) {
    ssCntMainForm.addEventListener("submit", function (ssEvent) {
        ssEvent.preventDefault();
        if (!ssCntMainForm.checkValidity()) {
            ssCntMainForm.reportValidity();
            return;
        }
        ssCntOpenPopup();
        ssCntMainForm.reset();
    });
}
/*--- Popup Close ---*/
if (ssCntPopupClose) ssCntPopupClose.addEventListener("click", ssCntClosePopup);
if (ssCntPopupDone) ssCntPopupDone.addEventListener("click", ssCntClosePopup);
if (ssCntPopupOverlay) ssCntPopupOverlay.addEventListener("click", ssCntClosePopup);
/*--- Escape Key ---*/
document.addEventListener("keydown", function (ssEvent) {
    if (ssEvent.key === "Escape" && ssCntPopup?.classList.contains("ss-cnt-popup-active")) ssCntClosePopup();
});
/*--- Contact Information + Main Contact Form Section End ---*/

/*--- FAQ Section Start ---*/
const ssCntFaqItems = document.querySelectorAll(".ss-cnt-faq-item");
const ssCntFaqQuestions = document.querySelectorAll(".ss-cnt-faq-question");
ssCntFaqQuestions.forEach(function (ssQuestion) {
    ssQuestion.addEventListener("click", function () {
        const ssItem = ssQuestion.closest(".ss-cnt-faq-item");
        if (!ssItem) return;
        const ssIsActive = ssItem.classList.contains("ss-cnt-faq-item-active");
        ssCntFaqItems.forEach(function (ssFaqItem) {
            ssFaqItem.classList.remove("ss-cnt-faq-item-active");
            const ssFaqButton = ssFaqItem.querySelector(".ss-cnt-faq-question");
            if (ssFaqButton) ssFaqButton.setAttribute("aria-expanded", "false");
        });
        if (!ssIsActive) {
            ssItem.classList.add("ss-cnt-faq-item-active");
            ssQuestion.setAttribute("aria-expanded", "true");
        }
    });
});
/*--- FAQ Section End ---*/

/*--- Location + Map Section Section Start ---*/
const ssCntLocationMapButton = document.querySelector(".ss-cnt-location-map-controls button");
if (ssCntLocationMapButton) {
    ssCntLocationMapButton.addEventListener("click", function () {
        const ssLocationUrl = "https://www.google.com/maps/search/?api=1&query=MMR+Complex+Chinna+Thirupathi+Salem+Tamil+Nadu+636008";
        window.open(ssLocationUrl, "_blank", "noopener,noreferrer");
    });
}
/*--- Location + Map Section Section End ---*/