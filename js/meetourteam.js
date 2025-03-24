employeeImage.forEach(image=>
    {
        image.addEventListener('mouseover',(e)=>
            {
                if(document.body.classList.contains('dark'))
                {
                    if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                    {
                        e.target.setAttribute('src',`./src/img/meet our team/${e.target.alt}/${e.target.alt}-dark-hover.svg`);
                    }
                    else
                    {
                        e.target.setAttribute('src',`./../src/img/meet our team/${e.target.alt}/${e.target.alt}-dark-hover.svg`);
                    }
                }
                else
                {
                    if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                    {
                        e.target.setAttribute('src',`./src/img/meet our team/${e.target.alt}/${e.target.alt}-primary-hover.svg`);
                    }
                    else
                    {
                        e.target.setAttribute('src',`./../src/img/meet our team/${e.target.alt}/${e.target.alt}-primary-hover.svg`);
                    }
                }
            }
        );

        image.addEventListener('mouseout',(e)=>
            {
                if(document.body.classList.contains('dark'))
                    {
                        if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                        {
                            e.target.setAttribute('src',`./src/img/meet our team/${e.target.alt}/${e.target.alt}-dark-default.svg`);
                        }
                        else
                        {
                            e.target.setAttribute('src',`./../src/img/meet our team/${e.target.alt}/${e.target.alt}-dark-default.svg`);
                        }
                    }
                    else
                    {
                        if(window.location.pathname=='/boosterdesignoffice.github.io/' || window.location.pathname=='/boosterdesignoffice.github.io/index.html')
                        {
                            e.target.setAttribute('src',`./src/img/meet our team/${e.target.alt}/${e.target.alt}-primary-default.svg`);
                        }
                        else
                        {
                            e.target.setAttribute('src',`./../src/img/meet our team/${e.target.alt}/${e.target.alt}-primary-default.svg`);
                        }
                    }
            }
        );
    }
);