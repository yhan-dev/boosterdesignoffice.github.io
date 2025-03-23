const text = document.getElementById('changingText');

function changingText()
{
    if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
    {
        text.textContent=text.textContent=='our vision' ? 'our mission' : text.textContent=='our mission' ? 'your requests' : 'our vision';
    }
    else if(window.location.pathname=='/boosterdesignoffice.github.io/tr/tr.html')
    {
        text.textContent=text.textContent=='vizyonumuz' ? 'misyonumuz' : text.textContent=='misyonumuz' ? 'istekleriniz' : 'vizyonumuz';
    }
    
}

setInterval(changingText,1000);


    
