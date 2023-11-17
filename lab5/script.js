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

  // task2
  const table = document.getElementById("colorfulTable");

  const fillTable = () => {
    let counter = 1;

    for (let i = 0; i < 6; i++) {
      const row = table.insertRow();

      for (let j = 0; j < 6; j++) {
        const cell = row.insertCell();
        cell.textContent = counter++;
      }
    }
  }

  const randomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  }

  fillTable();

  const twelfthElement = table.rows[1].cells[5];
  let randColor;

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "white";
  }

  twelfthElement.addEventListener("mouseover", () => {
    randColor = randomColor()
    twelfthElement.style.backgroundColor = randColor;
    twelfthElement.addEventListener("mouseout", handleMouseOut);
  });

  twelfthElement.addEventListener("click", () => {
    twelfthElement.removeEventListener("mouseout", handleMouseOut);
    twelfthElement.style.backgroundColor = randColor;
  });

  twelfthElement.addEventListener("dblclick", () => {
    for (let i = 0; i < table.rows.length; i++) {
      const cell = table.rows[i].cells[1]; 
      cell.style.backgroundColor = randColor;
    }
  });
});