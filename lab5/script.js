document.addEventListener("DOMContentLoaded", () => {
  // task1
  const submitButton = document.getElementById("submitButton");

  const validateValue = (value, regex) => regex.test(value);

  let fullName = document.getElementById('fullName');
  let idCard = document.getElementById('idCard');
  let birthDate = document.getElementById('birthDate');
  let address = document.getElementById('address');
  let email = document.getElementById('email');

  submitButton.addEventListener("click", () => {

    const validateFullName = validateValue(fullName.value, /^[A-Za-z]{6} [A-Za-z]\.[A-Za-z]\.$/);
    const vlalidateIdCard = validateValue(idCard.value, /^[A-Za-z]{2} №\d{6}$/);
    const vlalidateBirthDate = validateValue(birthDate.value, /^\d{2}\.\d{2}\.\d{4}$/);
    const vlalidateAddress = validateValue(address.value, /^м\.\d{6}$/);
    const validateEmail = validateValue(email.value, /^[a-z]{5}@[a-z]{5}\.com$/);

      if (!validateFullName) {
        fullName.value = "";
      }
      if (!vlalidateIdCard) {
        idCard.value = "";
      }
      if (!vlalidateBirthDate) {
        birthDate.value = "";
      }
      if (!vlalidateAddress) {
        address.value = "";
      }
      if (!validateEmail) {
        email.value = "";
      } else {
        const valuesToShow = {
          fullName: fullName.value,
          idCard: idCard.value,
          birthDate: birthDate.value,
          address: address.value,
          email: email.value
        };
    
        const resultsWindow = window.open("", "data");
          resultsWindow.document.write(
            `<html><head><title>data</title></head><body><pre>${JSON.stringify(
              valuesToShow,
              null,
              2
            )}</pre></body></html>`
          );
      }
  });
});