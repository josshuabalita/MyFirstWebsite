/**
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Group 2: Josshua Balita, Woraphot Khuanchanthuek
*/

//Profile Page

//header slideshow 
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
showSlides();

//FOOTER
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

//show photo after 10 seconds
const profilePhoto = document.getElementById('profile-image');
profilePhoto.style.display = 'none';
setTimeout(() => {
    profilePhoto.style.display = 'inline-block';
    profilePhoto.style.margin = 'auto';
}, 10000);

const profilePhoto2 = document.getElementById('profile-image2');
profilePhoto2.style.display = 'none';
setTimeout(() => {
    profilePhoto2.style.display = 'inline-block';
    profilePhoto2.style.margin = 'auto';
}, 10000);




