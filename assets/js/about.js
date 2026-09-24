/*--- Our Story Section Start ---*/
const ssAbtStoryVisual = document.querySelector(".ss-abt-story-visual");
const ssAbtStoryPoints = document.querySelectorAll(".ss-abt-story-point");
if (ssAbtStoryVisual && window.matchMedia("(pointer:fine)").matches) {
    ssAbtStoryVisual.addEventListener("mousemove", function (ssEvent) {
        const ssRect = ssAbtStoryVisual.getBoundingClientRect();
        const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
        const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
        ssAbtStoryVisual.style.setProperty("--ss-abt-story-x", (ssX * 8) + "px");
        ssAbtStoryVisual.style.setProperty("--ss-abt-story-y", (ssY * 8) + "px");
        ssAbtStoryPoints.forEach(function (ssPoint, ssIndex) {
            const ssDepth = (ssIndex + 1) * 1.5;
            ssPoint.style.transform = `translate3d(${ssX * ssDepth}px,${ssY * ssDepth}px,0)`;
        });
    });
    ssAbtStoryVisual.addEventListener("mouseleave", function () {
        ssAbtStoryPoints.forEach(function (ssPoint) { ssPoint.style.transform = ""; });
    });
}
/*--- Our Story Section End ---*/

/*--- Mission + Vision Section Start ---*/
const ssAbtMissionCenter = document.querySelector(".ss-abt-mission-center");
const ssAbtMissionPanels = document.querySelectorAll(".ss-abt-mission-panel");
if (ssAbtMissionCenter && window.matchMedia("(pointer:fine)").matches) {
    ssAbtMissionCenter.addEventListener("mousemove", function (ssEvent) {
        const ssRect = ssAbtMissionCenter.getBoundingClientRect();
        const ssX = (ssEvent.clientX - ssRect.left) / ssRect.width - .5;
        const ssY = (ssEvent.clientY - ssRect.top) / ssRect.height - .5;
        ssAbtMissionCenter.style.setProperty("--ss-abt-mission-x", (ssX * 10) + "px");
        ssAbtMissionCenter.style.setProperty("--ss-abt-mission-y", (ssY * 10) + "px");
    });
    ssAbtMissionCenter.addEventListener("mouseleave", function () {
        ssAbtMissionCenter.style.setProperty("--ss-abt-mission-x", "0px");
        ssAbtMissionCenter.style.setProperty("--ss-abt-mission-y", "0px");
    });
}
/*--- Mission + Vision Section End ---*/

/*--- What We Believe Section Start ---*/
const ssAbtBeliefsItems=document.querySelectorAll(".ss-abt-beliefs-item");
const ssAbtBeliefsFeatureNumber=document.getElementById("ss-abt-beliefs-feature-number");
const ssAbtBeliefsFeatureIcon=document.getElementById("ss-abt-beliefs-feature-icon");
const ssAbtBeliefsFeatureLabel=document.getElementById("ss-abt-beliefs-feature-label");
const ssAbtBeliefsFeatureTitle=document.getElementById("ss-abt-beliefs-feature-title");
const ssAbtBeliefsFeatureText=document.getElementById("ss-abt-beliefs-feature-text");
const ssAbtBeliefsData={
"01":{icon:"bi-person-heart",label:"01 / PEOPLE FIRST",title:"Technology should work <span>for people.</span>",text:"We believe the best technology removes friction rather than creating it. Every system we build should make work simpler, decisions clearer, and experiences more human.",first:"01",firstLabel:"Human Centered",second:"100%",secondLabel:"Purpose Driven"},
"02":{icon:"bi-lightbulb",label:"02 / THINK DIFFERENT",title:"Better ideas begin with <span>better questions.</span>",text:"We challenge assumptions, explore unconventional possibilities, and look beyond obvious solutions to discover smarter ways forward.",first:"02",firstLabel:"Creative Thinking",second:"∞",secondLabel:"Possibilities"},
"03":{icon:"bi-cpu",label:"03 / BUILD WITH PURPOSE",title:"Intelligence should create <span>real value.</span>",text:"We do not build technology simply because it is possible. We focus on solutions that solve meaningful problems and create practical outcomes.",first:"03",firstLabel:"Purpose Driven",second:"100%",secondLabel:"Useful Technology"},
"04":{icon:"bi-arrow-repeat",label:"04 / KEEP EVOLVING",title:"The best solution is always <span>getting better.</span>",text:"Technology changes continuously. We learn from every project, experiment with new ideas, and improve what we build over time.",first:"04",firstLabel:"Continuous Learning",second:"∞",secondLabel:"Growth Mindset"},
"05":{icon:"bi-link-45deg",label:"05 / STAY CONNECTED",title:"Great systems connect <span>everything.</span>",text:"People, data, platforms, and ideas become more powerful when they work together. We believe intelligent experiences should never exist in isolation.",first:"05",firstLabel:"Connected Systems",second:"360°",secondLabel:"Thinking"}
};
ssAbtBeliefsItems.forEach(function(ssItem){
ssItem.addEventListener("click",function(){
const ssKey=ssItem.dataset.belief;
const ssData=ssAbtBeliefsData[ssKey];
if(!ssData)return;
ssAbtBeliefsItems.forEach(function(ssButton){ssButton.classList.remove("ss-abt-beliefs-item-active");});
ssItem.classList.add("ss-abt-beliefs-item-active");
if(ssAbtBeliefsFeatureNumber)ssAbtBeliefsFeatureNumber.textContent=ssKey;
if(ssAbtBeliefsFeatureIcon)ssAbtBeliefsFeatureIcon.innerHTML=`<i class="bi ${ssData.icon}"></i>`;
if(ssAbtBeliefsFeatureLabel)ssAbtBeliefsFeatureLabel.textContent=ssData.label;
if(ssAbtBeliefsFeatureTitle)ssAbtBeliefsFeatureTitle.innerHTML=ssData.title;
if(ssAbtBeliefsFeatureText)ssAbtBeliefsFeatureText.textContent=ssData.text;
const ssFeatureBottom=ssAbtBeliefsFeature?.querySelector(".ss-abt-beliefs-feature-bottom");
if(ssFeatureBottom){
const ssBottomItems=ssFeatureBottom.querySelectorAll(":scope > div:not(.ss-abt-beliefs-feature-line):not(.ss-abt-beliefs-feature-arrow)");
if(ssBottomItems[0]){
ssBottomItems[0].querySelector("strong").textContent=ssData.first;
ssBottomItems[0].querySelector("span").textContent=ssData.firstLabel;
}
if(ssBottomItems[1]){
ssBottomItems[1].querySelector("strong").textContent=ssData.second;
ssBottomItems[1].querySelector("span").textContent=ssData.secondLabel;
}
}
});
});

const ssIndBlogReadButtons=document.querySelectorAll(".ss-abt-beliefs-feature-arrow");
if(ssIndBlogReadButtons.length){
ssIndBlogReadButtons.forEach(function(ssButton){
ssButton.addEventListener("click",function(ssEvent){
ssEvent.preventDefault();
ssEvent.stopPropagation();
window.location.href="404.html";
});
});
}
/*--- What We Believe Section End ---*/

/*--- Our Team Section Start ---*/
/*--- Our Team Interaction ---*/
const ssAbtTeamMembers=document.querySelectorAll(".ss-abt-team-member");
const ssAbtTeamFeatureImage=document.querySelector(".ss-abt-team-feature-image img");
const ssAbtTeamFeatureRole=document.querySelector(".ss-abt-team-role");
const ssAbtTeamFeatureName=document.querySelector(".ss-abt-team-feature-info h3");
const ssAbtTeamFeatureDescription=document.querySelector(".ss-abt-team-feature-info p");
const ssAbtTeamFeatureNumber=document.querySelector(".ss-abt-team-feature-number");
const ssAbtTeamData={
"01":{image:"assets/images/team-1.webp",role:"Founder & AI Strategist",name:"Vikram Rao",description:"Building intelligent digital experiences through technology, creativity, and continuous experimentation."},
"02":{image:"assets/images/team-2.webp",role:"Lead Developer",name:"Alex Morgan",description:"Turning complex ideas into scalable, reliable, and high-performance digital systems."},
"03":{image:"assets/images/team-3.webp",role:"Product Designer",name:"Sophia Williams",description:"Creating intuitive digital experiences where thoughtful design meets powerful technology."},
"04":{image:"assets/images/team-4.webp",role:"AI Engineer",name:"Daniel Carter",description:"Exploring intelligent systems and transforming emerging AI capabilities into practical solutions."}
};
ssAbtTeamMembers.forEach(function(ssMember){
ssMember.addEventListener("click",function(){
const ssKey=ssMember.dataset.team;
const ssData=ssAbtTeamData[ssKey];
if(!ssData)return;
ssAbtTeamMembers.forEach(function(ssItem){ssItem.classList.remove("ss-abt-team-member-active");});
ssMember.classList.add("ss-abt-team-member-active");
if(ssAbtTeamFeatureImage){
ssAbtTeamFeatureImage.style.opacity="0";
setTimeout(function(){
ssAbtTeamFeatureImage.src=ssData.image;
ssAbtTeamFeatureImage.alt=ssData.name;
ssAbtTeamFeatureImage.style.opacity="1";
},180);
}
if(ssAbtTeamFeatureRole)ssAbtTeamFeatureRole.textContent=ssData.role;
if(ssAbtTeamFeatureName)ssAbtTeamFeatureName.textContent=ssData.name;
if(ssAbtTeamFeatureDescription)ssAbtTeamFeatureDescription.textContent=ssData.description;
if(ssAbtTeamFeatureNumber)ssAbtTeamFeatureNumber.textContent=ssKey;
});
});
/*--- Our Team Section End ---*/

/*--- Section Start ---*/
/*--- Section End ---*/

/*--- Section Start ---*/
/*--- Section End ---*/
