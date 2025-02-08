// document.addEventListener("DOMContentLoaded", () => {
//     const emailInput = document.getElementById("email");
//     const passwordInput = document.getElementById("password");
//     const loginButton = document.querySelector(".login-button");
  
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const passwordRegex = /^[A-Za-z0-9]{6,}$/;
  
//     // Validate inputs on input change
//     function validateInputs() {
//       const isEmailValid = emailRegex.test(emailInput.value);
//       const isPasswordValid = passwordRegex.test(passwordInput.value);
  
//       // Update email field border and error
//       emailInput.classList.toggle("invalid", !isEmailValid);
//       emailInput.classList.toggle("valid", isEmailValid);
//       emailInput.nextElementSibling.style.visibility = isEmailValid
//         ? "hidden"
//         : "visible";
//       emailInput.nextElementSibling.textContent = isEmailValid
//         ? ""
//         : "يرجى إدخال بريد إلكتروني صالح";
  
//       // Update password field border and error
//       passwordInput.classList.toggle("invalid", !isPasswordValid);
//       passwordInput.classList.toggle("valid", isPasswordValid);
//       passwordInput.nextElementSibling.style.visibility = isPasswordValid
//         ? "hidden"
//         : "visible";
//       passwordInput.nextElementSibling.textContent = isPasswordValid
//         ? ""
//         : "كلمة السر يجب أن تكون على الأقل 6 أحرف وأرقام";
  
//       // Enable or disable the login button
//       loginButton.disabled = !(isEmailValid && isPasswordValid);
//       loginButton.style.opacity = isEmailValid && isPasswordValid ? "1" : "0.6";
//     }
  
//     // Add event listeners
//     emailInput.addEventListener("input", validateInputs);
//     passwordInput.addEventListener("input", validateInputs);
//   });
  

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});
function changeSignupContent() {
    // Get the sign-up form container
    const signupForm = document.getElementById("signupForm");

    // Replace its content instead of affecting the entire container
    signupForm.innerHTML = `
         <h2 class="title">المعلومات الشخصية</h2>
           <select class="select">
                <option value="" disabled selected>هل أنت</option>
                <option value="فرد">فرد</option>
                <option value="شركة">شركة</option>
            </select>
          <select id="country" class="select" required onchange="updateProvinces()">
                <option value="" disabled selected>اختر البلد المقيم فيها</option>
                <option value="السعودية">السعودية</option>
                <option value="مصر">مصر</option>
                <option value="الإمارات">الإمارات</option>
                <option value="الكويت">الكويت</option>
                <option value="الأردن">الأردن</option>
            </select>
          <select id="province" class="select" required>
                <option value="" disabled selected>اختر المحافظة المقيم فيها</option>
            </select>
			<input type="checkbox" id="terms" class="custom-checkbox">
            <label for="terms">
                أوافق على <a href="#" class="terms-link">الشروط والبنود</a>
            </label>
        <button id="backToLogin">تسجيل الدخول</button>
    `;


    // Add event listener to navigate back to login when clicking "تسجيل الدخول"
    // document.getElementById("backToLogin").addEventListener("click", () => {
    //     container.classList.remove("right-panel-active"); // Show sign-in form
    // });
}
function updateProvinces() {
    const countrySelect = document.getElementById("country");
    const provinceSelect = document.getElementById("province");

    // Clear existing province options
    provinceSelect.innerHTML = '<option value="" disabled selected>اختر المحافظة المقيم فيها</option>';

    // Province options for each country
    const provincesByCountry = {
        "السعودية": ["الرياض", "جدة", "الدمام", "مكة", "المدينة"],
        "مصر": ["القاهرة", "الجيزة", "الإسكندرية", "المنصورة", "الأقصر"],
        "الإمارات": ["دبي", "أبو ظبي", "الشارقة", "رأس الخيمة"],
        "الكويت": ["العاصمة", "حولي", "الفروانية", "الأحمدي"],
        "الأردن": ["عمان", "إربد", "الزرقاء", "العقبة"]
    };

    const selectedCountry = countrySelect.value;
    
    if (provincesByCountry[selectedCountry]) {
        provincesByCountry[selectedCountry].forEach(province => {
            const option = document.createElement("option");
            option.value = province;
            option.textContent = province;
            provinceSelect.appendChild(option);
        });

        // Reset province dropdown styling after country selection
        provinceSelect.classList.remove('selected');
    }
}

