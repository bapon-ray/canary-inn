
    // Set today's date as default for check-in
    const today = new Date().toISOString().split("T")[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

    document.getElementById("checkin").value = today;
    document.getElementById("checkout").value = tomorrow;

    document.getElementById("checkin").setAttribute("min", today);
    document.getElementById("checkout").setAttribute("min", tomorrow);

    // Update checkout min when checkin changes
    document.getElementById("checkin").addEventListener("change", function () {
      const checkinDate = new Date(this.value);
      const newMin = new Date(checkinDate.getTime() + 86400000).toISOString().split("T")[0];
      document.getElementById("checkout").setAttribute("min", newMin);
    });















let hamb = document.querySelector('.hamberger');
let back = document.querySelector('.back');
let navLinks = document.querySelector('.navLinks');
let navUl = document.querySelector('.navLinks-ul');

hamb.addEventListener('click', function () {

    if (navLinks.style.opacity == 0) {
        navLinks.style.opacity = 1;
        navLinks.style.viability = 'visible';
        navLinks.style.zIndex = 100;
        navUl.style.bottom = "-200px";

    } else {
        navLinks.style.opacity = 0;
        navLinks.style.viability = 'hidden';
        navLinks.style.zIndex = -1;
    }

});

back.addEventListener('click', function () {

    navLinks.style.opacity = 0;
    navLinks.style.viability = 'hidden';
    navLinks.style.zIndex = -1;
    navUl.style.bottom = '-100%';

});


// let submit = document.querySelector(".cta");

// submit.addEventListener("click", () => {
//     alert("Thanks For Submit.")
// });












