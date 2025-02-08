// Function to open the modal
function openModal() {
    document.getElementById("editProfileModal").classList.add("show");
}

// Function to close the modal
function closeModal() {
    document.getElementById("editProfileModal").classList.remove("show");
}

// Close modal when clicking outside the content area
window.onclick = function(event) {
    var modal = document.getElementById("editProfileModal");
    if (event.target === modal) {
        closeModal();
    }
};

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


// Add 'selected' class to dropdowns when an option is chosen
document.querySelectorAll('.dropdown-field').forEach(select => {
  select.addEventListener('change', function() {
      if (this.value) {
          this.classList.add('selected');
      } else {
          this.classList.remove('selected');
      }
  });
});