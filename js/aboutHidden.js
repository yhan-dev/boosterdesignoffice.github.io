const aboutUs=document.getElementById('aboutus');

function hiddenAboutUs()
{
    aboutUs.classList.add('hidden');
}

function removeHidden()
{
    aboutUs.classList.remove('hidden');
}

window.addEventListener('scroll',(e)=>
{
    if(Math.ceil(window.scrollY)>=50)
    {
        hiddenAboutUs();
    }
    else
    {
        removeHidden();
    }
}
);
