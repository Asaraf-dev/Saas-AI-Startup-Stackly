/*--- Featured Insight Section Start ---*/
const ssBlgFeaturedCard = document.querySelector(".ss-blg-featured-card");
const ssBlgFeaturedVisual = document.querySelector(".ss-blg-featured-visual");
const ssBlgFeaturedImage = document.querySelector(".ss-blg-featured-image-wrap");
if (ssBlgFeaturedCard && ssBlgFeaturedVisual && window.matchMedia("(pointer:fine)").matches) {
    ssBlgFeaturedVisual.addEventListener("mousemove", function (ssEvent) {
        const ssRect = ssBlgFeaturedVisual.getBoundingClientRect();
        const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
        const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
        if (ssBlgFeaturedImage) { ssBlgFeaturedImage.style.transform = `rotate(${ssX * -1}deg) translate3d(${ssX * 8}px,${ssY * 8}px,0)`; }
    });
    ssBlgFeaturedVisual.addEventListener("mouseleave", function () {
        if (ssBlgFeaturedImage) { ssBlgFeaturedImage.style.transform = "rotate(-1deg) translate3d(0,0,0)"; }
    });
}
/*--- Featured Insight Section End ---*/

/*--- Latest Insights Section Start ---*/
const ssBlgLatestSearch = document.getElementById("ss-blg-latest-search");
const ssBlgLatestClear = document.getElementById("ss-blg-latest-clear");
const ssBlgLatestCategories = document.querySelectorAll(".ss-blg-latest-category");
const ssBlgLatestCards = document.querySelectorAll(".ss-blg-latest-card");
const ssBlgLatestCount = document.getElementById("ss-blg-latest-count");
const ssBlgLatestStatus = document.getElementById("ss-blg-latest-status-text");
const ssBlgLatestReset = document.getElementById("ss-blg-latest-reset");
const ssBlgLatestEmptyReset = document.getElementById("ss-blg-latest-empty-reset");
const ssBlgLatestEmpty = document.getElementById("ss-blg-latest-empty");
let ssBlgLatestActiveCategory = "all";
/*--- Filter Function ---*/
const ssBlgLatestFilter = () => {
    const ssSearch = (ssBlgLatestSearch?.value || "").trim().toLowerCase();
    let ssVisibleCount = 0;
    ssBlgLatestCards.forEach(function (ssCard) {
        const ssCategory = ssCard.dataset.category || "";
        const ssSearchData = (ssCard.dataset.search || "").toLowerCase();
        const ssCategoryMatch = ssBlgLatestActiveCategory === "all" || ssCategory === ssBlgLatestActiveCategory;
        const ssSearchMatch = !ssSearch || ssSearchData.includes(ssSearch);
        const ssVisible = ssCategoryMatch && ssSearchMatch;
        ssCard.classList.toggle("ss-blg-latest-card-hidden", !ssVisible);
        if (ssVisible) ssVisibleCount++;
    });
    if (ssBlgLatestCount) ssBlgLatestCount.textContent = ssVisibleCount;
    if (ssBlgLatestEmpty) ssBlgLatestEmpty.classList.toggle("ss-blg-latest-empty-visible", ssVisibleCount === 0);
    if (ssBlgLatestStatus) {
        if (ssSearch && ssBlgLatestActiveCategory !== "all") ssBlgLatestStatus.textContent = `Showing ${ssVisibleCount} result${ssVisibleCount === 1 ? "" : "s"} for "${ssBlgLatestSearch.value}" in ${ssBlgLatestActiveCategory}`;
        else if (ssSearch) ssBlgLatestStatus.textContent = `Showing ${ssVisibleCount} result${ssVisibleCount === 1 ? "" : "s"} for "${ssBlgLatestSearch.value}"`;
        else if (ssBlgLatestActiveCategory !== "all") ssBlgLatestStatus.textContent = `Showing ${ssVisibleCount} ${ssBlgLatestActiveCategory} insight${ssVisibleCount === 1 ? "" : "s"}`;
        else ssBlgLatestStatus.textContent = "Showing all insights";
    }
    if (ssBlgLatestClear) ssBlgLatestClear.classList.toggle("ss-blg-latest-clear-visible", Boolean(ssSearch));
};
/*--- Category Selection ---*/
ssBlgLatestCategories.forEach(function (ssCategoryButton) {
    ssCategoryButton.addEventListener("click", function () {
        ssBlgLatestCategories.forEach(function (ssButton) { ssButton.classList.remove("ss-blg-latest-category-active"); });
        ssCategoryButton.classList.add("ss-blg-latest-category-active");
        ssBlgLatestActiveCategory = ssCategoryButton.dataset.category || "all";
        ssBlgLatestFilter();
    });
});
/*--- Search ---*/
if (ssBlgLatestSearch) {
    ssBlgLatestSearch.addEventListener("input", ssBlgLatestFilter);
}
/*--- Clear Search ---*/
if (ssBlgLatestClear) {
    ssBlgLatestClear.addEventListener("click", function () {
        if (ssBlgLatestSearch) ssBlgLatestSearch.value = "";
        ssBlgLatestFilter();
        if (ssBlgLatestSearch) ssBlgLatestSearch.focus();
    });
}
/*--- Reset Filters ---*/
const ssBlgLatestResetFilters = () => {
    if (ssBlgLatestSearch) ssBlgLatestSearch.value = "";
    ssBlgLatestActiveCategory = "all";
    ssBlgLatestCategories.forEach(function (ssButton) { ssButton.classList.toggle("ss-blg-latest-category-active", ssButton.dataset.category === "all"); });
    ssBlgLatestFilter();
};
if (ssBlgLatestReset) ssBlgLatestReset.addEventListener("click", ssBlgLatestResetFilters);
if (ssBlgLatestEmptyReset) ssBlgLatestEmptyReset.addEventListener("click", ssBlgLatestResetFilters);
/*--- Initial Filter ---*/
ssBlgLatestFilter();
/*--- Latest Insights Section End ---*/
