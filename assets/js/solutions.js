/*--- Solutions Overview Section Start ---*/
const ssSolOverviewItems = document.querySelectorAll(".ss-sol-overview-item");
const ssSolOverviewFeatureNumber = document.getElementById("ss-sol-overview-feature-number");
const ssSolOverviewFeatureIcon = document.getElementById("ss-sol-overview-feature-icon");
const ssSolOverviewFeatureLabel = document.getElementById("ss-sol-overview-feature-label");
const ssSolOverviewFeatureTitle = document.getElementById("ss-sol-overview-feature-title");
const ssSolOverviewFeatureText = document.getElementById("ss-sol-overview-feature-text");
const ssSolOverviewFeatureTags = document.getElementById("ss-sol-overview-feature-tags");
const ssSolOverviewData = {
    "01": { icon: "bi-cpu", label: "AI & MACHINE LEARNING", title: "Build systems that <span>learn, adapt, and improve.</span>", text: "Transform business processes with intelligent systems that can understand patterns, automate decisions, and continuously create new possibilities.", tags: ["Predictive AI", "Machine Learning", "AI Assistants"] },
    "02": { icon: "bi-lightning-charge", label: "INTELLIGENT AUTOMATION", title: "Turn repetitive work into <span>intelligent workflows.</span>", text: "Automate tasks, processes, and decisions so your teams can spend more time on work that creates meaningful value.", tags: ["Workflow Automation", "AI Agents", "Process Intelligence"] },
    "03": { icon: "bi-bar-chart-line", label: "DATA INTELLIGENCE", title: "Turn business data into <span>clearer decisions.</span>", text: "Connect your data, uncover meaningful patterns, and transform complex information into insights your business can act on.", tags: ["Analytics", "Dashboards", "Predictive Insights"] },
    "04": { icon: "bi-cloud", label: "AI CLOUD PLATFORMS", title: "Build technology that is <span>ready to scale.</span>", text: "Create secure, flexible cloud platforms that bring applications, AI, data, APIs, and infrastructure together.", tags: ["Cloud Architecture", "AI Deployment", "Scalable Systems"] },
    "05": { icon: "bi-window-stack", label: "CUSTOM SOFTWARE", title: "Software designed around <span>your business.</span>", text: "Build custom digital products, SaaS platforms, dashboards, and internal tools that fit the way your organization actually works.", tags: ["SaaS Platforms", "Web Applications", "Business Tools"] },
    "06": { icon: "bi-diagram-3", label: "API & INTEGRATION", title: "Connect every system into <span>one ecosystem.</span>", text: "Integrate your existing platforms, APIs, databases, and services to create technology that communicates and works together.", tags: ["API Integration", "System Connectivity", "Data Sync"] }
};
ssSolOverviewItems.forEach(function (ssItem) {
    ssItem.addEventListener("click", function () {
        const ssKey = ssItem.dataset.solution;
        const ssData = ssSolOverviewData[ssKey];
        if (!ssData) return;
        ssSolOverviewItems.forEach(function (ssButton) { ssButton.classList.remove("ss-sol-overview-item-active"); });
        ssItem.classList.add("ss-sol-overview-item-active");
        if (ssSolOverviewFeatureNumber) ssSolOverviewFeatureNumber.textContent = ssKey;
        if (ssSolOverviewFeatureIcon) ssSolOverviewFeatureIcon.innerHTML = `<i class="bi ${ssData.icon}"></i>`;
        if (ssSolOverviewFeatureLabel) ssSolOverviewFeatureLabel.textContent = ssData.label;
        if (ssSolOverviewFeatureTitle) ssSolOverviewFeatureTitle.innerHTML = ssData.title;
        if (ssSolOverviewFeatureText) ssSolOverviewFeatureText.textContent = ssData.text;
        if (ssSolOverviewFeatureTags) ssSolOverviewFeatureTags.innerHTML = ssData.tags.map(function (ssTag) { return `<span>${ssTag}</span>`; }).join("");
    });
});
/*--- Solutions Overview Section End ---*/

/*--- AI & Machine Learning Section Start ---*/
const ssSolAiVisual = document.querySelector(".ss-sol-ai-visual");
const ssSolAiCore = document.querySelector(".ss-sol-ai-core");
const ssSolAiNodes = document.querySelectorAll(".ss-sol-ai-node");
if (ssSolAiVisual && window.matchMedia("(pointer:fine)").matches) {
    ssSolAiVisual.addEventListener("mousemove", function (ssEvent) {
        const ssRect = ssSolAiVisual.getBoundingClientRect();
        const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
        const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
        if (ssSolAiCore) { ssSolAiCore.style.transform = `translate3d(${ssX * 12}px,${ssY * 12}px,0)`; }
        ssSolAiNodes.forEach(function (ssNode, ssIndex) {
            const ssDepth = (ssIndex + 1) * 2;
            ssNode.style.transform = `translate3d(${ssX * ssDepth}px,${ssY * ssDepth}px,0)`;
        });
    });
    ssSolAiVisual.addEventListener("mouseleave", function () {
        if (ssSolAiCore) { ssSolAiCore.style.transform = ""; }
        ssSolAiNodes.forEach(function (ssNode) { ssNode.style.transform = ""; });
    });
}
/*--- AI & Machine Learning Section End ---*/

/*--- Intelligent Automation Section Start ---*/
const ssSolAutomationWorkflow = document.querySelector(".ss-sol-automation-workflow");
const ssSolAutomationSteps = document.querySelectorAll(".ss-sol-automation-step");
if (ssSolAutomationWorkflow && window.matchMedia("(pointer:fine)").matches) {
    ssSolAutomationWorkflow.addEventListener("mousemove", function (ssEvent) {
        const ssRect = ssSolAutomationWorkflow.getBoundingClientRect();
        const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
        const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
        ssSolAutomationSteps.forEach(function (ssStep, ssIndex) {
            const ssDepth = (ssIndex + 1) * 1.2;
            ssStep.style.transform = `translate3d(${ssX * ssDepth}px,${ssY * ssDepth}px,0)`;
        });
    });
    ssSolAutomationWorkflow.addEventListener("mouseleave", function () {
        ssSolAutomationSteps.forEach(function (ssStep) { ssStep.style.transform = ""; });
    });
}
/*--- Intelligent Automation Section End ---*/

/*--- Data Intelligence Section Start ---*/
const ssSolDataDashboard = document.querySelector(".ss-sol-data-dashboard");
const ssSolDataChart = document.querySelector(".ss-sol-data-chart-card");
const ssSolDataInsights = document.querySelectorAll(".ss-sol-data-insight-card");
if (ssSolDataDashboard && window.matchMedia("(pointer:fine)").matches) {
    ssSolDataDashboard.addEventListener("mousemove", function (ssEvent) {
        const ssRect = ssSolDataDashboard.getBoundingClientRect();
        const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
        const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
        if (ssSolDataChart) { ssSolDataChart.style.transform = `translate3d(${ssX * 5}px,${ssY * 5}px,0)`; }
        ssSolDataInsights.forEach(function (ssCard, ssIndex) {
            const ssDepth = (ssIndex + 1) * 2;
            ssCard.style.transform = `translate3d(${ssX * ssDepth}px,${ssY * ssDepth}px,0)`;
        });
    });
    ssSolDataDashboard.addEventListener("mouseleave", function () {
        if (ssSolDataChart) { ssSolDataChart.style.transform = ""; }
        ssSolDataInsights.forEach(function (ssCard) { ssCard.style.transform = ""; });
    });
}
/*--- Data Intelligence Section End ---*/

/*--- AI Cloud Platforms Section Start ---*/
const ssSolCloudVisual = document.getElementById("ss-sol-cloud-visual");
const ssSolCloudPlatform = document.querySelector(".ss-sol-cloud-platform");
const ssSolCloudNodes = document.querySelectorAll(".ss-sol-cloud-node");
const ssSolCloudMiniCards = document.querySelectorAll(".ss-sol-cloud-mini-card");
if (ssSolCloudVisual && window.matchMedia("(pointer:fine)").matches) {
    ssSolCloudVisual.addEventListener("mousemove", function (ssEvent) {
        const ssRect = ssSolCloudVisual.getBoundingClientRect();
        const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
        const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
        if (ssSolCloudPlatform) {
            ssSolCloudPlatform.style.setProperty("--ss-sol-cloud-x", (ssX * 12) + "px");
            ssSolCloudPlatform.style.setProperty("--ss-sol-cloud-y", (ssY * 12) + "px");
        }
        ssSolCloudNodes.forEach(function (ssNode, ssIndex) {
            const ssDepth = (ssIndex + 1) * 2;
            ssNode.style.transform = `translate3d(${ssX * ssDepth}px,${ssY * ssDepth}px,0)`;
        });
        ssSolCloudMiniCards.forEach(function (ssCard, ssIndex) {
            const ssDepth = (ssIndex + 1) * 4;
            ssCard.style.transform = `translate3d(${ssX * ssDepth}px,${ssY * ssDepth}px,0)`;
        });
    });
    ssSolCloudVisual.addEventListener("mouseleave", function () {
        if (ssSolCloudPlatform) {
            ssSolCloudPlatform.style.setProperty("--ss-sol-cloud-x", "0px");
            ssSolCloudPlatform.style.setProperty("--ss-sol-cloud-y", "0px");
        }
        ssSolCloudNodes.forEach(function (ssNode) { ssNode.style.transform = ""; });
        ssSolCloudMiniCards.forEach(function (ssCard) { ssCard.style.transform = ""; });
    });
}
/*--- AI Cloud Platforms Section End ---*/

