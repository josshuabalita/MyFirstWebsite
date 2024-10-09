/**
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Group 2: Josshua Balita, Woraphot Khuanchanthuek
*/

//Grade Page

//footer
function getCurrentDateTime() {
    const currentDate = new Date();
    const day = currentDate.toLocaleString('en-us', { weekday: 'long' });
    const month = currentDate.toLocaleString('en-us', { month: 'long' });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const formattedDateTime = `${day}, ${month} ${date}, ${year} - ${hours}:${minutes}`;
    return formattedDateTime;
}
document.getElementById('current-time').textContent = getCurrentDateTime();

//Converter 
function convertMark() {
    const subject = document.getElementById('subject').value;
    const markInput = document.getElementById('mark').value;
    const mark = parseInt(markInput);

    if(isNaN(mark) || mark < 0 || mark > 100) {
        document.getElementById('final-grade').innerText = '';
        const validationMsg = "Invalid Mark Input, please enter nonnegative number less than 101!!";
        document.querySelector('.validation-message').innerText = validationMsg;
    }
    else {
        document.querySelector('.validation-message').innerText = '';
        let grade;
        if (mark > 90)
            grade = 'A';
        else if (mark > 80)
            grade = 'B';
        else if (mark > 70)
            grade = 'C';
        else if (mark > 50)
            grade = 'D';
        else 
            grade = 'F';

            document.getElementById('final-grade').innerText = grade;

            //list of converted marks
            const userList = document.getElementById('user-record');
            const recordItem = document.createElement('li');
            recordItem.innerText = `${subject}:   ${mark}   (Grade: ${grade})`;
            userList.appendChild(recordItem);

            //clear input
            document.getElementById('subject').value = '';
            document.getElementById('mark').value = '';
    }
}

//convert to upper case auto for subject input
function convertToUppercase() {
    const subjectInput = document.getElementById('subject');
    subjectInput.value = subjectInput.value.toUpperCase();
}