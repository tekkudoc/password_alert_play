// Form submit button
let signin = document.querySelector('#sign');

signin.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Form inputs
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    usernameHashed = CryptoJS.SHA256(username).toString()
    passwordHashed = CryptoJS.SHA256(password).toString()

    const correctUsernameHashed = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';
    const correctPasswordHashed = '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4';

    // Alert sounds
    let access_grant = document.querySelector('#access_grant');
    let access_deny = document.querySelector('#access_deny');
    let alarm = document.querySelector('#alarm');

    // Alert messages
    let grant_div = document.querySelector('.access_grant');
    let deny_div = document.querySelector('.access_deny');
    let warning = document.querySelector('#warning');
    let warning_message = document.querySelector('#unautho');

    // Card holding Form inputs
    let card = document.querySelector('.card');
    
    if (usernameHashed != correctUsernameHashed 
        || passwordHashed != correctPasswordHashed){
        // Access denied alert sound start
        access_deny.play();
        
        // Display Access Denied message
        deny_div.style.display = "block";

        // Hide Form
        card.style.display = "none";

        // Display more messages
        warning.style.display = "block";
        warning_message.style.display = "block";

        // Style message div's
        warning.setAttribute('class', 'text-center display-3 pt-4 animated flash infinite');
        warning_message.setAttribute('class', 'mt-5 mx-auto text-center animated flash infinite');

        // 2's timeout for messages and raise alarm
        setTimeout(function() {
            deny_div.style.display = "none";
            card.style.display = "block";
            alarm.play();
        }, 2000);

        // Empty form username & password inputs
        clearDivs();
        
        
    } else {
        // Access granted alert sound start
        access_grant.play();

        // Access granted message display
        grant_div.style.display = "block";

        // Hide Form
        card.style.display = "none";

        // Hide access denied messages if any displayed
        warning.style.display = "none";
        warning_message.style.display = "none";

        // 2's hide access granted alert and redisplay the form again
        setTimeout(function() {
            grant_div.style.display = "none";
            card.style.display = "block";
        }, 2000);

        // Empty form username & password inputs
        clearDivs();

        // Pause alarm if raised
        alarm.pause();
    }
});

// Clears form inputs
function clearDivs() {
    username.value = '';
    password.value = '';
}

