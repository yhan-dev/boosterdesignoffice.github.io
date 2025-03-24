const navlinks = document.querySelectorAll('.header__link');
const dropdownItem = document.querySelector('.dropdown__item');
const dropdownArrow = document.querySelector('.dropdown__arrow');
const headerBurger=document.querySelector('.header__burger');
const headerClose=document.querySelector('.header__close');
const dropdownMenu = document.querySelector('.dropdown__menu');
const header = document.querySelector('header');

navlinks.forEach(links=>links.addEventListener('click', (e)=>
    {                                                                             //Header active links
        navlinks.forEach(links=>links.classList.remove('active'))

        if(links==navlinks[1] && dropdownItem.classList.contains!='show-dropdown')
        {
            dropdownItem.classList.toggle('show-dropdown');
            navlinks[1].classList.add('active');
            sessionStorage.setItem('bg','visible');
            document.body.classList.toggle('overflow-hidden');
            const menuOpenEng = new Audio("./src/audio/ui-click.wav");
            const menuOpenTr = new Audio("./../src/audio/ui-click.wav");
            if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
            {
                menuOpenEng.play();
            }
            else
            {
                menuOpenTr.play();
            }
            
            
            if(window.innerWidth>=1526)
            {
                html.classList.toggle('bg-added');
            }
            else
            {
                html.classList.add('bg-added');
            }
            
            document.addEventListener('click',(e)=>
                {
                    if(e.target!=dropdownMenu && e.target!=copyDark && e.target.className!='bx bxs-moon moon-icon' && e.target.className!='bx bxs-sun sun-icon') 
                    {
                        dropdownItem.classList.remove('show-dropdown');
                        html.classList.remove('bg-added');
                        sessionStorage.setItem('bg','hidden');
                        document.body.classList.remove('overflow-hidden');

                    }
                }
            );
            e.stopPropagation();
        }
        else 
        {
            links.classList.add('active');
            dropdownItem.classList.remove('show-dropdown');
            html.classList.remove('bg-added');
            sessionStorage.setItem('bg','hidden');          
        }

    }   
)
)
const infoBoxChildren = document.querySelectorAll('.socialmedia__icon>.info-box p');

infoBoxChildren.forEach(item=>
    {
        item.textContent=item.id; 
    }
);

const headerNavbar = document.querySelector('.header__navbar');
const headerToggle = document.querySelector('.header__toggle');
const ToggleStorage=sessionStorage.getItem('toggle');
const toggleIcon = sessionStorage.getItem('toggleIcon');
const bgStorage = sessionStorage.getItem('bg');
const html = document.querySelector('html');

headerToggle.addEventListener('click',(e)=>                                  //Show navBar and Close icon
    {
        if(headerNavbar.classList.contains('show-menu'))
        {
            hideSidebar();
            document.body.classList.remove('.overflow-hidden');
            
        }

        else
        {
            if(window.innerWidth<1526)
            {
            openSidebar();
            document.body.classList.add('overflow-hidden');
            e.stopPropagation();

            body.addEventListener('click',(e)=>
                {
                    if(e.target!=headerNavbar)
                    {
                        hideSidebar();
                        document.body.classList.remove('overflow-hidden');
                    }
                }
            );
            }
            
            
        }
    }
);

if(toggleIcon=='closeIcon')
{
    sessionStorage.setItem('toggleIcon','closeIcon');
    headerToggle.classList.add('show-icon');
}

else
{
    sessionStorage.setItem('toggleIcon','burgerIcon');
    headerToggle.classList.remove('show-icon'); 
}

window.addEventListener('resize',(e)=>
    {
        
        if(headerNavbar.classList.contains!='show-menu' && window.innerWidth>768 && window.innerWidth<1526)
        {
            headerNavbar.style.transition='none';

            headerToggle.addEventListener('click',(e)=>{if(window.innerWidth>768 && window.innerWidth<1526){headerNavbar.style.transition='.3s margin-right';}if(window.innerWidth<768){headerNavbar.style.transition='.3s top';}});

        }
    }
);

if(ToggleStorage=='opened')
{
    sessionStorage.setItem('toggle','opened');
    headerNavbar.classList.add('show-menu');

    
}
else
    {
        sessionStorage.setItem('toggle','closed');
        headerNavbar.classList.remove('show-menu');
    }


    window.addEventListener('load',(e)=>
        {
            if(ToggleStorage=='opened')
                {
                    
                    sessionStorage.setItem('toggle','opened');
                    headerNavbar.style.transition='none';
                    if(window.innerWidth<1526)
                    {
                    html.classList.add('bg-added');
                    sessionStorage.setItem('bg','visible');
                    document.body.classList.add('overflow-hidden');
                    }
                    
                    
                    body.addEventListener('click',(e)=>
                        {
                            if(e.target!=headerNavbar)
                            {
                                hideSidebar();
                                document.body.classList.remove('overflow-hidden');
                                if(window.innerWidth>768 && window.innerWidth<1526)
                                {
                                    headerNavbar.style.transition='.3s margin-right';
                                }
                                else
                                {
                                    headerNavbar.style.transition='.3s top';
                                }
                            }
                        }
                    );

                    window.addEventListener('resize',(e)=>

                        {if(window.innerWidth>=1526)
                            {
                              hideSidebar();  
                            }
                        
                        }
                    );
                    
                    
                    headerToggle.addEventListener('click',(e)=>
                        {
                            if(window.innerWidth<=768)
                            {
                                headerNavbar.style.transition='.3s top';
                            }
                        }
                    );

                    headerCloseSec.addEventListener('click',(e)=>
                        {
                            headerNavbar.style.transition='.3s margin-right';

                            headerToggle.addEventListener('click',(e)=>
                                {
                                   if(window.innerWidth>768 && window.innerWidth<1526)
                                    {   
                                        headerNavbar.style.transition='.3s margin-right';
                                    }

                                    else if(window.innerWidth<=768)
                                    {
                                        headerNavbar.style.transition='.3s top';
                                    }
                                }
                            );

                        }
                    );
                    
                }
        }
    );

const logo = document.querySelector('.header__logo img');
const lightDark = document.querySelector('.light-dark-mode');
const headerLogo = document.querySelector('.header__logo img');
var storage = sessionStorage.setItem('dark','disabled');
const body=document.body;
const favIcon = document.querySelectorAll('[rel="icon"]');
const favStorage = sessionStorage.getItem('fav');

function favIconPrimary()
{
    favIcon.forEach(fav=>
        {
            if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
            {
                fav.setAttribute('href','./src/img/favicon/primary.png');
            }

            else
            {
                fav.setAttribute('href','./../src/img/favicon/primary.png');
            }
        }
    );
}

function favIconDarkMode()
{
    favIcon.forEach(fav=>
        {
            if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
            {
                fav.setAttribute('href','./src/img/favicon/darkmode.png');
            }

            else
            {
                fav.setAttribute('href','./../src/img/favicon/darkmode.png');
            }
        }
    );
    
}

const employeeImage = document.querySelectorAll('.employee>img');
const testimonialBrands = document.querySelectorAll(".testimonial>.testimonial__info>img");
const switchSoundEng = new Audio("./src/audio/torch-click.wav");
const switchSoundTr = new Audio("./../src/audio/torch-click.wav");

function darkMode()
{
    if(body.classList.contains('dark'))
        {
            body.classList.remove('dark');
            favIconPrimary();
            sessionStorage.setItem('fav','primary');
            sessionStorage.setItem('dark','disabled');
            scrollTopButton.style.background='var(--clr-primary)';
            
            employeeImage.forEach(image=>
                {
                    if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                    {
                        image.setAttribute('src',`./src/img/meet our team/${image.alt}/${image.alt}-primary-default.svg`);
                    }

                    else
                        {
                            image.setAttribute('src',`./../src/img/meet our team/${image.alt}/${image.alt}-primary-default.svg`);
                        }
                    
                }
            );

            testimonialBrands.forEach(image=>
                {
                    if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                        {
                            image.setAttribute('src',`./src/img/brands with color/${image.alt}.svg`);
                        }
        
                        else
                            {
                                image.setAttribute('src',`./../src/img/brands with color/${image.alt}.svg`);
                            }
                }
            );

            if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
            {
                switchSoundEng.play();
            }
            else
            {
                switchSoundTr.play();
            }
        }

        else
        {
            body.classList.add('dark');
            favIconDarkMode();
            sessionStorage.setItem('dark','enabled');
            sessionStorage.setItem('fav','dark');
            scrollTopButton.style.background='var(--clr-dark-secondary)';
            employeeImage.forEach(image=>
                {
                    if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                        {
                            image.setAttribute('src',`./src/img/meet our team/${image.alt}/${image.alt}-dark-default.svg`);
                        }
    
                        else
                            {
                                image.setAttribute('src',`./../src/img/meet our team/${image.alt}/${image.alt}-dark-default.svg`);
                            }
                }
            );
            testimonialBrands.forEach(image=>
                {
                    if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                        {
                            image.setAttribute('src',`./src/img/brands without color/${image.alt}.svg`);
                        }
        
                        else
                            {
                                image.setAttribute('src',`./../src/img/brands without color/${image.alt}.svg`);
                            }
                }
            );

            if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                {
                    switchSoundEng.play();
                }
                else
                {
                    switchSoundTr.play();
                }
        }
}

if(storage=='enabled')
{
    sessionStorage.setItem('dark','enabled');
    body.classList.add('dark');
    favIconDarkMode();
    employeeImage.forEach(image=>
        {
            if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                {
                    image.setAttribute('src',`./src/img/meet our team/${image.alt}/${image.alt}-dark-default.svg`);
                }

                else
                    {
                        image.setAttribute('src',`./../src/img/meet our team/${image.alt}/${image.alt}-dark-default.svg`);
                    }
        }
    );

    testimonialBrands.forEach(image=>
        {
            if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                {
                    image.setAttribute('src',`./src/img/brands without color/${image.alt}.svg`);
                }

                else
                    {
                        image.setAttribute('src',`./../src/img/brands without color/${image.alt}.svg`);
                    }
        }
    );

    
}

else
{
    sessionStorage.setItem('dark','disabled');
    body.classList.remove('dark');
    favIconPrimary();
    employeeImage.forEach(image=>
        {
            if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                {
                    image.setAttribute('src',`./src/img/meet our team/${image.alt}/${image.alt}-primary-default.svg`);
                }

                else
                    {
                        image.setAttribute('src',`./../src/img/meet our team/${image.alt}/${image.alt}-primary-default.svg`);
                    }
        }
    );

    testimonialBrands.forEach(image=>
        {
            if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                {
                    image.setAttribute('src',`./src/img/brands with color/${image.alt}.svg`);
                }

                else
                    {
                        image.setAttribute('src',`./../src/img/brands with color/${image.alt}.svg`);
                    }
        }   
    );

    
}

var langSwitch = (event)=>
    {
        if(event.target.id=='turkce')
        {
            window.location.pathname='/boosterdesignoffice.github.io/tr/tr.html';
            sessionStorage.setItem('lang','turkce');
        }

        else
        {
            window.location.pathname='/boosterdesignoffice.github.io/';
            sessionStorage.setItem('lang','english');
        }

        if(event.target.id=='english' && window.location.pathname=='/boosterdesignoffice.github.io/index.html' || window.location.pathname=='/boosterdesignoffice.github.io/' && window.innerWidth<1526)
        {
            alert('Language is already english of your page!');
        }
        else if(event.target.id=='turkce' && window.location.pathname=='/boosterdesignoffice.github.io/tr/tr.html' && window.innerWidth<1526)
        {
            alert('Sayfanız zaten Türkçe!');    
        }
        
        
    }

const languageSwitchers = document.querySelectorAll('input[type="radio"]');

for(const item of languageSwitchers)
{
    item.addEventListener('click',langSwitch);
}

const headerItems = document.querySelector('.header__items');
const headerCloseSec=document.querySelector('.header__close--secondary');

function hideSidebar()
{


    headerNavbar.classList.remove('show-menu');
    sessionStorage.setItem('toggle','closed');
    sessionStorage.setItem('toggleIcon','burgerIcon');
    headerToggle.classList.remove('show-icon');
    html.classList.remove('bg-added');
    sessionStorage.setItem('bg','hidden');
    
    
}

function openSidebar()
{
headerNavbar.classList.add('show-menu');
sessionStorage.setItem('toggle','opened');
sessionStorage.setItem('toggleIcon','closeIcon');
headerToggle.classList.add('show-icon');
html.classList.add('bg-added');
sessionStorage.setItem('bg','visible');

}



const btnPrimary = document.querySelector('.btn--primary');
const socialMedia = document.querySelector('.socialmedia');
const headerContainer = document.querySelector('.header__container');
const langEng = document.querySelector('.lang-eng');
const langTurkce = document.querySelector('.lang-tr');
const languageContainer = document.querySelector('.language__container');

const langEngLast = langEng.lastElementChild;
const langTurkceLast = langTurkce.lastElementChild;

const copyBtn = btnPrimary.cloneNode(true);
const copyMedias = socialMedia.cloneNode(true);
const copyDark = lightDark.cloneNode(true);
const copyEng = langEngLast.cloneNode(true);
const copyTurkce = langTurkceLast.cloneNode(true);


headerContainer.appendChild(copyBtn);
headerContainer.appendChild(copyMedias);
headerContainer.appendChild(copyDark);

const langStorage=sessionStorage.getItem('lang');

if(window.location.pathname=="/boosterdesignoffice.github.io/" || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
{
    languageContainer.appendChild(copyTurkce);
    sessionStorage.setItem('lang','english');

}

else if(window.location.pathname=='/boosterdesignoffice.github.io/tr/tr.html')
{
    languageContainer.appendChild(copyEng);
    sessionStorage.setItem('lang','turkce');
}

const dropdownLinks = document.querySelectorAll('.dropdown__link');

   dropdownLinks.forEach((link,index,array)=>
    {
        link.addEventListener('mouseover',(e)=>
            {
                dropdownLinks.forEach(link=>
                    {
                        link.style.opacity='0.5';
                    }
                )

                link.style.opacity='1';
                
            }

        );

        link.addEventListener('mouseout',(e)=>
            {
                dropdownLinks.forEach(link=>{link.style.opacity='initial';});
            }
        );
    }
);
// function random(min,max)
// {
//     var result = (min+Math.random()*(max-min));  //only for practice
//     return result;

// }

// console.log(random(1,5));

