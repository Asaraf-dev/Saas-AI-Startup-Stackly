/*--- Authentication ---*/
const ssAuthLoginForm = document.getElementById("ss-auth-login-form");
const ssAuthRegisterForm = document.getElementById("ss-auth-register-form");
const ssAuthRoleButtons = document.querySelectorAll(".ss-auth-role-btn");
const ssAuthRole = document.getElementById("ss-auth-role");
const ssAuthSelectedRole = document.getElementById("ss-auth-selected-role");
const ssAuthEmail = document.getElementById("ss-auth-email");
const ssAuthPassword = document.getElementById("ss-auth-password");
const ssAuthPasswordToggle = document.getElementById("ss-auth-password-toggle");
const ssAuthRemember = document.getElementById("ss-auth-remember");
const ssAuthName = document.getElementById("ss-auth-name");
const ssAuthPhone = document.getElementById("ss-auth-phone");
const ssAuthConfirmPassword = document.getElementById("ss-auth-confirm-password");
const ssAuthConfirmPasswordToggle = document.getElementById("ss-auth-confirm-password-toggle");
/*--- Role Selection ---*/
ssAuthRoleButtons.forEach(function (ssButton) {
    ssButton.addEventListener("click", function () {
        const ssSelectedRole = ssButton.dataset.role;
        if (!ssSelectedRole) return;
        ssAuthRoleButtons.forEach(function (ssItem) { ssItem.classList.remove("ss-auth-role-active"); });
        ssButton.classList.add("ss-auth-role-active");
        if (ssAuthRole) ssAuthRole.value = ssSelectedRole;
        if (ssAuthSelectedRole) ssAuthSelectedRole.textContent = ssSelectedRole === "admin" ? "Admin" : "Client";
    });
});
/*--- Password Visibility ---*/
const ssAuthTogglePassword = (ssInput, ssButton) => {
    if (!ssInput || !ssButton) return;
    ssButton.addEventListener("click", function () {
        const ssIsPassword = ssInput.type === "password";
        ssInput.type = ssIsPassword ? "text" : "password";
        ssButton.innerHTML = ssIsPassword ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
        ssButton.setAttribute("aria-label", ssIsPassword ? "Hide password" : "Show password");
    });
};
ssAuthTogglePassword(ssAuthPassword, ssAuthPasswordToggle);
ssAuthTogglePassword(ssAuthConfirmPassword, ssAuthConfirmPasswordToggle);
/*--- Name Validation ---*/
if (ssAuthName) {
    ssAuthName.addEventListener("input", function () {
        this.value = this.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ ]/g, "").replace(/\s{2,}/g, " ");
    });
}
/*--- Phone Validation ---*/
if (ssAuthPhone) {
    ssAuthPhone.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });
    ssAuthPhone.addEventListener("keydown", function (ssEvent) {
        const ssAllowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"];
        if (ssAllowedKeys.includes(ssEvent.key) || ssEvent.ctrlKey || ssEvent.metaKey) return;
        if (!/^\d$/.test(ssEvent.key)) ssEvent.preventDefault();
    });
}
/*--- Confirm Password Validation ---*/
if (ssAuthConfirmPassword && ssAuthPassword) {
    const ssAuthCheckPasswordMatch = () => {
        if (ssAuthConfirmPassword.value && ssAuthConfirmPassword.value !== ssAuthPassword.value) {
            ssAuthConfirmPassword.setCustomValidity("Passwords do not match.");
        } else {
            ssAuthConfirmPassword.setCustomValidity("");
        }
    };
    ssAuthPassword.addEventListener("input", ssAuthCheckPasswordMatch);
    ssAuthConfirmPassword.addEventListener("input", ssAuthCheckPasswordMatch);
}
/*--- Remembered Email ---*/
const ssAuthSavedEmail = localStorage.getItem("ssAuthEmail");
if (ssAuthSavedEmail && ssAuthEmail && ssAuthLoginForm) {
    ssAuthEmail.value = ssAuthSavedEmail;
    if (ssAuthRemember) ssAuthRemember.checked = true;
}
/*--- Login ---*/
if (ssAuthLoginForm) {
    ssAuthLoginForm.addEventListener("submit", function (ssEvent) {
        ssEvent.preventDefault();
        if (!ssAuthLoginForm.checkValidity()) {
            ssAuthLoginForm.reportValidity();
            return;
        }
        const ssEmailValue = ssAuthEmail.value.trim();
        const ssSelectedRole = ssAuthRole?.value || "admin";
        if (ssAuthRemember?.checked) {
            localStorage.setItem("ssAuthEmail", ssEmailValue);
        } else {
            localStorage.removeItem("ssAuthEmail");
        }
        sessionStorage.setItem("ssAuthEmail", ssEmailValue);
        sessionStorage.setItem("ssAuthRole", ssSelectedRole);
        window.location.href = ssSelectedRole === "admin" ? "admin-dashboard.html" : "client-dashboard.html";
    });
}
/*--- Register ---*/
if (ssAuthRegisterForm) {
    ssAuthRegisterForm.addEventListener("submit", function (ssEvent) {
        ssEvent.preventDefault();
        if (!ssAuthRegisterForm.checkValidity()) {
            ssAuthRegisterForm.reportValidity();
            return;
        }
        const ssNameValue = ssAuthName.value.trim();
        const ssPhoneValue = ssAuthPhone.value.trim();
        const ssEmailValue = ssAuthEmail.value.trim();
        const ssSelectedRole = ssAuthRole?.value || "admin";
        if (ssAuthPassword && ssAuthConfirmPassword && ssAuthPassword.value !== ssAuthConfirmPassword.value) {
            ssAuthConfirmPassword.setCustomValidity("Passwords do not match.");
            ssAuthRegisterForm.reportValidity();
            return;
        }
        localStorage.setItem("ssAuthName", ssNameValue);
        localStorage.setItem("ssAuthPhone", ssPhoneValue);
        localStorage.setItem("ssAuthEmail", ssEmailValue);
        localStorage.setItem("ssAuthRole", ssSelectedRole);
        sessionStorage.setItem("ssAuthName", ssNameValue);
        sessionStorage.setItem("ssAuthPhone", ssPhoneValue);
        sessionStorage.setItem("ssAuthEmail", ssEmailValue);
        sessionStorage.setItem("ssAuthRole", ssSelectedRole);
        window.location.href = "login.html";
    });
}