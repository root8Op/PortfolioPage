// functions for left Icons starts here

document.addEventListener('DOMContentLoaded', function() {
    const htmlIcon = document.getElementById('htmlIcon');
    const upperIcon1 = htmlIcon.closest('.upperIcon1');
    htmlIcon.addEventListener('click', function() {
        upperIcon1.classList.toggle('show-others');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const jsIcon = document.getElementById('jsIcon');
    const lowerIcon1 = jsIcon.closest('.lowerIcon1');
    jsIcon.addEventListener('click', function() {
        lowerIcon1.classList.toggle('show-others3');
    });
});

// functions for left Icons ends here


// fumctions for right Icons starts here

document.addEventListener('DOMContentLoaded', function() {
    const cssIcon = document.getElementById('cssIcon');
    const upperIcon2 = cssIcon.closest('.upperIcon2');
    cssIcon.addEventListener('click', function() {
        upperIcon2.classList.toggle('show-others2');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const webIcon = document.getElementById('webIcon'); 
    const lowerIcon2 = webIcon.closest('.lowerIcon2');
    webIcon.addEventListener('click', function() {
        lowerIcon2.classList.toggle('show-others4');
    });
});

// functions for right Icons ends here