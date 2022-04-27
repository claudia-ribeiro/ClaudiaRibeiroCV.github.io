const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3 
    }
}

$(document).ready(function(){


        $nav = $('.nav');
        $toggleCollapse = $('.toggle-collapse');

        /** click event on toggle menu **/
        $toggleCollapse.click(function(){
            $nav.toggleClass('collapse');
        })


        //owl-carousel for blog
        $('.owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 3000, 
            dots: false,
            nav: true,
            navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
            responsive: responsive
        });


        //click to scroll top
        $('.scroll_down').click(function(){
            $('html,body').animate({
                scrollTop:0
            }, 1000);
        })



        //AOS Instance
        AOS.init();

        //Scroll sections active link~
        const sections = document.querySelectorAll('section[id]')

        function scrollActive(){
            const scrollY = window.pageYOffset

            sections.forEach(current =>{
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50;
                sectionId = current.getAttribute('id')

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
                
                }
                else {
                    document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
                
            })

        }
        window.addEventListener('scroll', scrollActive)

});