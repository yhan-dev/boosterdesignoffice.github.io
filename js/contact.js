const allInfoIcon = document.querySelectorAll('.contact__wrapper>.info__wrapper>.info>.info__icon');

allInfoIcon.forEach((info,index,array)=>
    {
        info.addEventListener('click',(e)=>
            {
                if(info.id=='eMail')
                {
                    window.location.href='mailto:info@boosterdesignoffice.com';
                }
                else if(info.id=='location')
                {
                    window.open("https://maps.app.goo.gl/d3NtAXSM9re2bfem9");
                }
                else
                {
                    window.open("https://www.whatsapp.com/?lang=tr_TR");
                }

            }
        );
    }
);