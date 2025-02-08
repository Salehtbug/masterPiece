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
const steps = [
  `
  <h1>إنشاء حساب</h1>
          <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
  <h2 class="title">المعلومات الشخصية</h2>
  <input type="text" id="fullName" placeholder="الاسم الثنائي">
  <textarea id="serviceDesc" placeholder="أدخل وصف الخدمة التي تقدمها"></textarea><br>
  <button id="nextStep">التالي</button>
`,
  `
  <h1>إنشاء حساب</h1>
          <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
      <h2 class="title">الموقع</h2>
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
      <button id="nextStep">التالي</button>
  `,
  `
  <h1>إنشاء حساب</h1>
          <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
       <h2 class="title">الدراسة</h2>
    
    <label for="university">الجامعة</label>
    <select id="university" class="select">
        <option value="" disabled selected>أدخل اسم الجامعة</option>
        <option value="جامعة الملك سعود">جامعة  البرموك</option>
        <option value="جامعة القاهرة">جامعة ال البيت</option>
        <option value="جامعة الإمارات">جامعة العلوم والتكنولوجيا</option>
        <option value="جامعة الكويت">جامعة الاردنية</option>
        <option value="جامعة الأردن">جامعة مؤته</option>
    </select>

    <label for="degree">المحصل العلمي</label>
    <select id="degree" class="select">
        <option value="" disabled selected>اختر محصلك العلمي</option>
        <option value="بكالوريوس">بكالوريوس</option>
        <option value="ماجستير">ماجستير</option>
        <option value="دكتوراه">دكتوراه</option>
    </select>

    <label for="studyField">مجال الدراسة</label>
    <select id="studyField" class="select">
        <option value="" disabled selected>أدخل مجال الدراسة</option>
        <option value="ترجمة">ترجمة</option>
        <option value="لغة عربية">لغة عربية</option>
        <option value="لغة إنجليزية">لغة إنجليزية</option>
        <option value="أدب">أدب</option>
        <option value="علوم اجتماعية">علوم اجتماعية</option>
    </select>

    <button id="nextStep">التالي</button>
  `,
 `
    <h2 class="title">الشهادات الإضافية</h2>

    <label for="certificateName">اسم الشهادة</label>
    <select id="certificateName" class="select">
        <option value="" disabled selected>أدخل اسم الشهادة</option>
        <option value="TOEFL">TOEFL</option>
        <option value="IELTS">IELTS</option>
        <option value="شهادة مترجم معتمد">شهادة مترجم معتمد</option>
        <option value="دبلوم لغة">دبلوم لغة</option>
    </select>

    <label for="issuingAuthority">الجهة المانحة</label>
    <select id="issuingAuthority" class="select">
        <option value="" disabled selected>اختر الجهة المانحة</option>
        <option value="جامعة">جامعة</option>
        <option value="معهد">معهد</option>
        <option value="مركز تدريبي">مركز تدريبي</option>
        <option value="جهة دولية">جهة دولية</option>
    </select>

    <label for="issueDate">تاريخ الإصدار</label>
    <div class="date-container">
        <select id="issueMonth" class="select half-width">
            <option value="" disabled selected>الشهر</option>
            <option value="1">يناير</option>
            <option value="2">فبراير</option>
            <option value="3">مارس</option>
            <option value="4">أبريل</option>
            <option value="5">مايو</option>
            <option value="6">يونيو</option>
            <option value="7">يوليو</option>
            <option value="8">أغسطس</option>
            <option value="9">سبتمبر</option>
            <option value="10">أكتوبر</option>
            <option value="11">نوفمبر</option>
            <option value="12">ديسمبر</option>
        </select>

        <select id="issueYear" class="select half-width">
            <option value="" disabled selected>السنة</option>
            <script>
                for (let year = new Date().getFullYear(); year >= 1980; year--) {
                    document.write('<option value="' + year + '">' + year + '</option>');
                }
            </script>
        </select>
    </div>

    <button id="nextStep">التالي</button>
`
,
  `
    <h2 class="title">المعلومات المهنية</h2>

    <label for="serviceType">تحديد نوع الخدمة</label>
    <select id="serviceType" class="select">
        <option value="" disabled selected>اختر نوع الخدمة التي تقدمها</option>
        <option value="ترجمة تحريرية">ترجمة تحريرية</option>
        <option value="ترجمة فورية">ترجمة فورية</option>
        <option value="تعريب">تعريب</option>
        <option value="تدقيق لغوي">تدقيق لغوي</option>
    </select>

    <label for="specialization">مجالات الاختصاص</label>
    <select id="specialization" class="select">
        <option value="" disabled selected>اختر مجالات الاختصاص</option>
        <option value="الطب">الطب</option>
        <option value="القانون">القانون</option>
        <option value="التقنية">التقنية</option>
        <option value="الأدب">الأدب</option>
        <option value="التسويق">التسويق</option>
    </select>

    <label for="languages">اللغات</label>
    <div class="language-container">
        <select id="languageFrom" class="select half-width">
            <option value="" disabled selected>من</option>
            <option value="العربية">العربية</option>
            <option value="الإنجليزية">الإنجليزية</option>
            <option value="الفرنسية">الفرنسية</option>
            <option value="الإسبانية">الإسبانية</option>
            <option value="الألمانية">الألمانية</option>
        </select>

        <select id="languageTo" class="select half-width">
            <option value="" disabled selected>إلى</option>
            <option value="العربية">العربية</option>
            <option value="الإنجليزية">الإنجليزية</option>
            <option value="الفرنسية">الفرنسية</option>
            <option value="الإسبانية">الإسبانية</option>
            <option value="الألمانية">الألمانية</option>
        </select>
    </div>

    <label for="availability">أوقات التفرغ للعمل</label>
    <select id="availability" class="select">
        <option value="" disabled selected>اختر الأيام المتفرغ فيها للعمل</option>
        <option value="طوال الأسبوع">طوال الأسبوع</option>
        <option value="أيام الأسبوع (الأحد - الخميس)">أيام الأسبوع (الأحد - الخميس)</option>
        <option value="عطلة نهاية الأسبوع">عطلة نهاية الأسبوع</option>
        <option value="أيام محددة">أيام محددة</option>
    </select>

    <button id="nextStep">التالي</button>
`
,
 `
    <h2 class="title">الوثائق المهمة</h2>

    <label for="workSamples">نماذج سابقة من العمل</label>
    <div class="file-upload">
        <input type="file" id="workSamples" multiple>
        <p>Click here to upload or drop files here</p>
    </div>

    <label for="membershipDoc">عضوية جمعية مترجمين أردنيين سارية المفعول</label>
    <div class="file-upload">
        <input type="file" id="membershipDoc">
        <p>Click here to upload or drop files here</p>
    </div>

    <button id="finish">إنهاء</button>
`

];

let currentStep = 0;

function updateFormContent() {
  const signupForm = document.getElementById("signupForm");
  signupForm.innerHTML = steps[currentStep];

  // إضافة مستمع الحدث لزر التالي بعد تغيير المحتوى
  const nextButton = document.getElementById("nextStep");
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateFormContent();
      }
    });
  }

  // عند الوصول إلى آخر خطوة
  const finishButton = document.getElementById("finish");
  if (finishButton) {
    finishButton.addEventListener("click", () => {
      alert("تم إكمال التسجيل بنجاح!");
    });
  }
}

// بدء النموذج بالخطوة الأولى
updateFormContent();


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
         <h2 class="title">الموقع</h2>
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
        <button id="country">التالي</button>
    `
    ;



  // document.getElementById("study").addEventListener("click", () => {
  //     container.classList.remove("right-panel-active"); 
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

