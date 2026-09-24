/*--- Client My AI ---*/
const ssCliAiGetStoredValue=(ssKey,ssFallback="")=>sessionStorage.getItem(ssKey)||localStorage.getItem(ssKey)||ssFallback;
const ssCliAiName=ssCliAiGetStoredValue("ssAuthName","User");
const ssCliAiEmail=ssCliAiGetStoredValue("ssAuthEmail","user@example.com");
const ssCliAiRole=ssCliAiGetStoredValue("ssAuthRole","client");
/*--- AI Elements ---*/
const ssCliAiMessages=document.getElementById("ss-cli-ai-messages");
const ssCliAiInput=document.getElementById("ss-cli-ai-input");
const ssCliAiSend=document.getElementById("ss-cli-ai-send");
const ssCliAiClear=document.getElementById("ss-cli-ai-clear");
const ssCliAiNewChat=document.getElementById("ss-cli-ai-new-chat");
const ssCliAiAttach=document.getElementById("ss-cli-ai-attach");
const ssCliAiFile=document.getElementById("ss-cli-ai-file");
const ssCliAiMic=document.getElementById("ss-cli-ai-mic");
const ssCliAiSearch=document.getElementById("ss-cli-ai-search");
/*--- Welcome Message ---*/
const ssCliAiWelcome=ssCliAiMessages?.querySelector(".ss-cli-ai-welcome-message");
/*--- Create Message ---*/
const ssCliAiAddMessage=(ssText,ssType="user")=>{
if(!ssCliAiMessages||!ssText.trim())return;
if(ssCliAiWelcome)ssCliAiWelcome.remove();
const ssMessage=document.createElement("div");
ssMessage.className=`ss-cli-ai-message ss-cli-ai-message-${ssType}`;
if(ssType==="user"){
ssMessage.innerHTML=`<div><div class="ss-cli-ai-message-content"></div><div class="ss-cli-ai-message-meta">Just now</div></div>`;
ssMessage.querySelector(".ss-cli-ai-message-content").textContent=ssText;
}else{
ssMessage.innerHTML=`<div class="ss-cli-ai-message-avatar"><i class="bi bi-stars"></i></div><div><div class="ss-cli-ai-message-content"></div><div class="ss-cli-ai-message-meta">Intelligence Engine · Just now</div></div>`;
ssMessage.querySelector(".ss-cli-ai-message-content").textContent=ssText;
}
ssCliAiMessages.appendChild(ssMessage);
ssCliAiMessages.scrollTop=ssCliAiMessages.scrollHeight;
};
/*--- AI Response ---*/
const ssCliAiGenerateResponse=(ssPrompt)=>{
const ssPromptLower=ssPrompt.toLowerCase();
if(ssPromptLower.includes("project"))return`I can help you review your project structure, identify possible bottlenecks, and turn the findings into practical next steps. For a deeper analysis, connect your project data to the workspace.`;
if(ssPromptLower.includes("automation"))return`A useful starting point is to map repetitive tasks into Trigger → AI Processing → Decision → Action. From there, we can identify which steps are suitable for automation.`;
if(ssPromptLower.includes("usage")||ssPromptLower.includes("analytics"))return`Your workspace analytics can be used to identify usage patterns, frequently used AI capabilities, response performance, and opportunities to improve your workflows.`;
if(ssPromptLower.includes("strategy"))return`A practical strategy can be structured around your current objectives, active projects, available data, automation opportunities, and measurable outcomes. Share more business context when you're ready for a detailed strategy.`;
return`I understand your request. This AI workspace is ready to help with analysis, ideas, planning, automation, documentation, and technical problem solving. Connect your AI backend to turn this interface into a live AI assistant.`;
};
/*--- Send Message ---*/
const ssCliAiSendMessage=()=>{
if(!ssCliAiInput)return;
const ssPrompt=ssCliAiInput.value.trim();
if(!ssPrompt)return;
ssCliAiAddMessage(ssPrompt,"user");
ssCliAiInput.value="";
ssCliAiInput.style.height="auto";
const ssTyping=document.createElement("div");
ssTyping.className="ss-cli-ai-message ss-cli-ai-message-ai";
ssTyping.innerHTML='<div class="ss-cli-ai-message-avatar"><i class="bi bi-stars"></i></div><div class="ss-cli-ai-typing"><span></span><span></span><span></span></div>';
ssCliAiMessages.appendChild(ssTyping);
ssCliAiMessages.scrollTop=ssCliAiMessages.scrollHeight;
setTimeout(function(){
ssTyping.remove();
ssCliAiAddMessage(ssCliAiGenerateResponse(ssPrompt),"ai");
},650);
};
/*--- Send Button ---*/
if(ssCliAiSend)ssCliAiSend.addEventListener("click",ssCliAiSendMessage);
/*--- Enter To Send ---*/
if(ssCliAiInput){
ssCliAiInput.addEventListener("keydown",function(ssEvent){
if(ssEvent.key==="Enter"&&!ssEvent.shiftKey){
ssEvent.preventDefault();
ssCliAiSendMessage();
}
});
ssCliAiInput.addEventListener("input",function(){
this.style.height="auto";
this.style.height=Math.min(this.scrollHeight,120)+"px";
});
}
/*--- Suggested Prompts ---*/
const ssCliAiPromptButtons=document.querySelectorAll("[data-prompt]");
ssCliAiPromptButtons.forEach(function(ssButton){
ssButton.addEventListener("click",function(){
const ssPrompt=ssButton.dataset.prompt;
if(!ssPrompt||!ssCliAiInput)return;
ssCliAiInput.value=ssPrompt;
ssCliAiInput.focus();
ssCliAiInput.style.height="auto";
ssCliAiInput.style.height=Math.min(ssCliAiInput.scrollHeight,120)+"px";
ssCliAiSendMessage();
});
});
/*--- Clear Conversation ---*/
if(ssCliAiClear){
ssCliAiClear.addEventListener("click",function(){
if(!ssCliAiMessages)return;
ssCliAiMessages.innerHTML='<div class="ss-cli-ai-welcome-message"><div class="ss-cli-ai-welcome-orb"><div></div><i class="bi bi-stars"></i></div><h3>How can I help you today?</h3><p>Ask me about your business, projects, data, automation, or anything you want to explore.</p><div class="ss-cli-ai-suggestions"><button type="button" data-prompt="Analyze my current project performance and suggest improvements."><i class="bi bi-graph-up-arrow"></i><span>Analyze my project</span></button><button type="button" data-prompt="Give me three ideas to improve my business workflow."><i class="bi bi-lightbulb"></i><span>Improve my workflow</span></button><button type="button" data-prompt="Help me understand my AI usage this month."><i class="bi bi-bar-chart"></i><span>Understand my AI usage</span></button><button type="button" data-prompt="Create a practical automation idea for my business."><i class="bi bi-lightning-charge"></i><span>Create an automation</span></button></div></div>';
ssCliAiBindPromptButtons();
});
}
/*--- New Chat ---*/
if(ssCliAiNewChat){
ssCliAiNewChat.addEventListener("click",function(){
ssCliAiClear?.click();
ssCliAiInput?.focus();
});
}
/*--- Search Conversations ---*/
const ssCliAiConversationItems=document.querySelectorAll(".ss-cli-ai-conversation");
if(ssCliAiSearch){
ssCliAiSearch.addEventListener("input",function(){
const ssSearch=this.value.trim().toLowerCase();
ssCliAiConversationItems.forEach(function(ssConversation){
const ssText=ssConversation.textContent.toLowerCase();
ssConversation.style.display=!ssSearch||ssText.includes(ssSearch)?"":"none";
});
});
}
/*--- Conversation Selection ---*/
ssCliAiConversationItems.forEach(function(ssConversation){
ssConversation.addEventListener("click",function(){
ssCliAiConversationItems.forEach(function(ssItem){ssItem.classList.remove("ss-cli-ai-conversation-active");});
ssConversation.classList.add("ss-cli-ai-conversation-active");
});
});
/*--- Attach File ---*/
if(ssCliAiAttach&&ssCliAiFile){
ssCliAiAttach.addEventListener("click",function(){ssCliAiFile.click();});
ssCliAiFile.addEventListener("change",function(){
if(this.files.length&&ssCliAiInput){
ssCliAiInput.value=`Attached: ${this.files[0].name}`;
ssCliAiInput.focus();
}
});
}
/*--- Microphone ---*/
if(ssCliAiMic){
ssCliAiMic.addEventListener("click",function(){
if(!("webkitSpeechRecognition" in window||"SpeechRecognition" in window)){
ssCliAiInput?.focus();
return;
}
const ssRecognition=new(window.SpeechRecognition||window.webkitSpeechRecognition)();
ssRecognition.lang="en-IN";
ssRecognition.interimResults=false;
ssRecognition.maxAlternatives=1;
ssRecognition.onresult=function(ssEvent){
if(ssCliAiInput){
ssCliAiInput.value=ssEvent.results[0][0].transcript;
ssCliAiInput.focus();
}
};
ssRecognition.start();
});
}
/*--- Prompt Button Binding ---*/
const ssCliAiBindPromptButtons=()=>{
const ssButtons=ssCliAiMessages?.querySelectorAll("[data-prompt]")||[];
ssButtons.forEach(function(ssButton){
ssButton.addEventListener("click",function(){
const ssPrompt=ssButton.dataset.prompt;
if(!ssPrompt||!ssCliAiInput)return;
ssCliAiInput.value=ssPrompt;
ssCliAiInput.focus();
ssCliAiSendMessage();
});
});
};
ssCliAiBindPromptButtons();
/*--- Client Role Check ---*/
if(ssCliAiRole==="admin"){
console.warn("Admin account opened the client AI workspace.");
}