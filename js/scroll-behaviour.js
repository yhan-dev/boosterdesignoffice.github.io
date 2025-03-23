const scrollTopButton = document.createElement('div');
scrollTopButton.setAttribute('class','scroll__button');
const arrowUp = document.createElement('i');
arrowUp.setAttribute('class','ri-arrow-up-line');
scrollTopButton.appendChild(arrowUp);
scrollTopButton.style.visibility='hidden';
scrollTopButton.style.opacity='0';
scrollTopButton.style.cursor='pointer';
scrollTopButton.style.width='2.5rem';
scrollTopButton.style.height='2.5rem';
scrollTopButton.style.display='flex';
scrollTopButton.style.justifyContent='center';
scrollTopButton.style.alignItems='center';
scrollTopButton.style.borderRadius='100%';
scrollTopButton.style.position='fixed';
scrollTopButton.style.bottom='48px';
scrollTopButton.style.right='20px';
scrollTopButton.style.color='var(--clr-fourth)';
scrollTopButton.style.zIndex='1';
scrollTopButton.style.position='fixed';
scrollTopButton.style.fontSize='1.25rem';
scrollTopButton.style.transition='.5s opacity,.5s visibility';
scrollTopButton.style.background='var(--clr-primary)';

html.appendChild(scrollTopButton);

scrollTopButton.addEventListener('mouseover',(e)=>
    {
        if(document.body.classList.contains('dark'))
        {
            scrollTopButton.style.background='var(--clr-dark-accent)';
        }
        else
        {
            scrollTopButton.style.background='var(--clr-secondary)';
        }
    }
);

scrollTopButton.addEventListener('mouseout',(e)=>
    {
        if(document.body.classList.contains('dark'))
            {
                scrollTopButton.style.background='var(--clr-dark-secondary)';
            }
            else
            {
                scrollTopButton.style.background='var(--clr-primary)';
            }
    }
);

window.addEventListener('scroll',(e)=>
    {
        if(window.scrollY>=Math.ceil(200))
        {
            scrollTopButton.style.visibility='visible';
            scrollTopButton.style.opacity='1';
            document.body.classList.add('scroll');

        }

        else
        {
            scrollTopButton.style.visibility='hidden';
            scrollTopButton.style.opacity='0';
            document.body.classList.remove('scroll');
        }
    }
);
function scroll(e)
{
    window.scrollTo({top:0,left:0,behavior:'smooth'}); 
}

scrollTopButton.addEventListener('click',(e)=>
    {
        scroll();
    }
);

const allHeaderLogo = document.querySelectorAll('.header__logo');

allHeaderLogo.forEach(logo=>
    {
        logo.addEventListener('click',scroll);
    }
);




