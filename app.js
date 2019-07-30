let signin = document.querySelector('#sign');



signin.addEventListener('click', function(e) {
    e.preventDefault();

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    let access_grant = document.querySelector('#access_grant');
    let access_deny = document.querySelector('#access_deny');

    let grant_div = document.querySelector('.access_grant');
    let deny_div = document.querySelector('.access_deny');

    let card = document.querySelector('.card');
    let alarm = document.querySelector('#alarm');

    let warning = document.querySelector('#warning');
    let warning_message = document.querySelector('#unautho');

    if (username !== 'test' || password !== '1234'){
        access_deny.play();
        

        deny_div.style.display = "block";

        card.style.display = "none";

        warning.style.display = "block";
        warning_message.style.display = "block";

        warning.setAttribute('class', 'text-center display-3 pt-4 animated flash infinite');
        warning_message.setAttribute('class', 'mt-5 mx-auto text-center animated flash infinite');

        setTimeout(function() {
            deny_div.style.display = "none";
            card.style.display = "block";
            alarm.play();
        }, 2000);

        clearDivs();
        
        
    } else {
        access_grant.play();

        grant_div.style.display = "block";

        card.style.display = "none";

        warning.style.display = "none";
        warning_message.style.display = "none";

        setTimeout(function() {
            grant_div.style.display = "none";
            card.style.display = "block";
        }, 2000);

        clearDivs();
        alarm.pause();
    }
});

function clearDivs() {
    username.value = '';
    password.value = '';
}

