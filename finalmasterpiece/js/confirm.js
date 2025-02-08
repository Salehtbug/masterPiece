function goToPrevious() {
    window.location.href = "payment.html";  // Go back to payment section
}

function submitJob() {
    alert("تم نشر الوظيفة بنجاح!");
    window.location.href = "dahsboarduser.html"; // Redirect to dashboard
}

function cancelJob() {
    window.history.back();  // Go back to the previous page
}
