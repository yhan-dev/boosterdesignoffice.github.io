const brandInfo = document.createElement('div');
const brandInfoText = document.createElement('p');
brandInfo.style.display='none';
brandInfo.style.position='absolute';
brandInfo.style.top='0';
brandInfo.style.left='0';
brandInfo.style.padding='0.2rem';
brandInfoText.style.fontSize='0.7rem';                                          //the brand info box and text's styles
brandInfo.style.width='max-content';
brandInfo.style.background='var(--clr-dark-accent)';
brandInfoText.textContent='';
brandInfo.style.zIndex='6';
brandInfoText.style.color='var(--clr-fourth)';
brandInfo.appendChild(brandInfoText);
html.appendChild(brandInfo);

const brandImage = document.querySelectorAll('.brands__wrapper>img');

brandImage.forEach(image=>
    {
        image.addEventListener('mousemove',(e)=>
            {
                var x = e.pageX;                                            //Follow the cursor
                var y = e.pageY;
                brandInfo.style.top=`${y+16}px`;
                brandInfo.style.left=`${x+8}px`; 
                brandInfo.style.display='block';
                brandInfoText.textContent=e.target.alt;
                document.body.style.overflowX='hidden';

                if(document.body.classList.contains('dark'))
                {
                    if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                    {
                        e.target.setAttribute('src',`./src/img/dark mode/${e.target.id}.svg`);
                    }
                    else
                    {
                        e.target.setAttribute('src',`./../src/img/dark mode/${e.target.id}.svg`);
                    }
                }

                else
                {
                    if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                    {
                        e.target.setAttribute('src',`./src/img/brands with color/${e.target.id}.svg`);
                    }
                    else
                    {
                        e.target.setAttribute('src',`./../src/img/brands with color/${e.target.id}.svg`);
                    }
                }
                
            }
        );
    }
);

brandImage.forEach(image=>
    {
        image.addEventListener('mouseout',(e)=>
            {                                                           //Hidden the brand info box and text
                brandInfo.style.display='none';

                if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                {
                    image.setAttribute('src',`./src/img/brands without color/${e.target.id}.svg`);
                }
                else
                {
                    image.setAttribute('src',`./../src/img/brands without color/${e.target.id}.svg`);
                }
                
            }
        );
    }
);
