/*--- Admin Solution ---*/
const ssSolAdminCreate = document.getElementById("ss-sol-admin-create");
const ssSolAdminFilter = document.getElementById("ss-sol-admin-filter");
const ssSolAdminActions = document.querySelectorAll(".ss-sol-admin-action");
const ssSolAdminSolutionButtons = document.querySelectorAll(".ss-sol-admin-solution-footer button");
/*--- New Solution ---*/
if (ssSolAdminCreate) {
    ssSolAdminCreate.addEventListener("click", function () {
        window.location.href = "404.html";
    });
}
/*--- Filter ---*/
if (ssSolAdminFilter) {
    ssSolAdminFilter.addEventListener("click", function () {
        const ssSolutionCards = document.querySelectorAll(".ss-sol-admin-solution-card");
        ssSolutionCards.forEach(function (ssCard, ssIndex) {
            setTimeout(function () {
                ssCard.style.transform = "translateY(-4px)";
                setTimeout(function () { ssCard.style.transform = ""; }, 220);
            }, ssIndex * 70);
        });
    });
}
/*--- Quick Actions ---*/
ssSolAdminActions.forEach(function (ssAction) {
    ssAction.addEventListener("click", function () {
        const ssActionType = ssAction.dataset.action;
        if (ssActionType === "create") window.location.href = "404.html";
        if (ssActionType === "automation") window.location.href = "404.html";
        if (ssActionType === "data") window.location.href = "404.html";
        if (ssActionType === "report") window.location.href = "404.html";
    });
});
/*--- Solution Buttons ---*/
ssSolAdminSolutionButtons.forEach(function (ssButton) {
    ssButton.addEventListener("click", function () {
        window.location.href = "404.html";
    });
});