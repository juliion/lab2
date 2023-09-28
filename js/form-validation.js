const regForFullName = /^[А-ЩЮЯЇІЄҐ][а-щьюяїієґ]*([-][А-ЩЮЯЇІЄҐа-щьюяїієґ]+)*\s([А-ЩЮЯЇІЄҐ]{1}.){2}$/;
const regForIdCard = /^[А-ЩЮЯЇІЄҐ]{2} №\d{6}$/;
const regForPhNum = /^[(]*\d{3}[)]*-\d{3}-\d{2}-\d{2}$/;
const regForFaculty = /^[А-ЩЮЯЇІЄҐ]{4}$/;
const regForBirthday = /^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)\d\d$/;

function validate(inputId, regExp) {
    const input = document.getElementById(inputId);
    const value = input.value;

    if(regExp.test(value)) {
        input.style.boxShadow = '0 0 7px rgb(23, 197, 0)';
        return;
    }

    input.style.boxShadow = '0 0 7px red';
}


function addValidateListeners(inputId, regExp) {
    const input = document.getElementById(inputId);
    const value = input.value;
    
    input.addEventListener('blur', () => {
        validate(inputId, regExp);
    })
}

function addAllValidateListeners() {
    addValidateListeners('full-name', regForFullName);
    addValidateListeners('id-card', regForIdCard);
    addValidateListeners('ph-number', regForPhNum);
    addValidateListeners('faculty', regForFaculty);
    addValidateListeners('birthday', regForBirthday);
}

function formIsValid() {
    const fullName = document.getElementById('full-name', regForFullName).value;
    const idCard = document.getElementById('id-card', regForIdCard).value;
    const phNum = document.getElementById('ph-number', regForPhNum).value;
    const faculty = document.getElementById('faculty', regForFaculty).value;
    const birthday = document.getElementById('birthday', regForBirthday).value;

    return !!fullName && regForFullName.test(fullName)
        && !!idCard && regForIdCard.test(idCard)
        && !!phNum && regForPhNum.test(phNum)
        && !!faculty && regForFaculty.test(faculty)
        && !!birthday && regForBirthday.test(birthday);
}

function addSubmitListener() {
    const form = document.getElementById("form");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log('test');
        if(formIsValid()) {
            this.displayResults();
        } else {
            alert("Дані не прошли валідацію");
        }
    })
}


function displayResults() {
    const formResults = document.getElementById('form-results');

    const fullName = document.getElementById('full-name', regForFullName).value;
    const idCard = document.getElementById('id-card', regForIdCard).value;
    const phNum = document.getElementById('ph-number', regForPhNum).value;
    const faculty = document.getElementById('faculty', regForFaculty).value;
    const birthday = document.getElementById('birthday', regForBirthday).value;
    
    const data = `
        <p><b>ПІБ:</b> ${fullName}</p>
        <p><b>Id-card:</b> ${idCard}</p>
        <p><b>Номер телефону:</b> ${phNum}</p>
        <p><b>Факультет:</b> ${faculty}</p>
        <p><b>День народження:</b> ${birthday}</p>
    `;

    formResults.insertAdjacentHTML('afterbegin', data);
}






