// functioning of navbar menus

let homeBtn = document.querySelector('#home').addEventListener('click',()=>{
    e.preventDefault()
    homeBtn.scrollTo()
})

// form validation

let orderBtn = document.querySelector('.order-btn')
let nameBox = document.querySelector('#name-box')
let emailBox = document.querySelector('#email-box')
let messageBox = document.querySelector('#message-box')
let submitText = document.querySelector('#submit-text')

function isValid(){
    if(!nameBox.value || !emailBox.value || !messageBox.value){
        submitText.innerHTML = 'Please fill all the fields';
        return false
    }
    return true
}

orderBtn.addEventListener('click', (e)=>{
    e.preventDefault()
       if(isValid()){ 
        nameBox.value = '';
        emailBox.value = '';
        messageBox.value = '';
        submitText.innerHTML = 'Your email is submitted succesfully';
    }})

// footer bar

let lastScrollTop = 0;

const footerBar = document.getElementById('footer-bar');

const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    const heroHeight = heroSection.offsetHeight;

    if (currentScroll > heroHeight) {
        if (currentScroll > lastScrollTop) {
            footerBar.classList.add('hidden');
        } else {
            footerBar.classList.remove('hidden');
        }
    } else {
        footerBar.classList.add('hidden');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
   
// gsap on hero section

let tl = gsap.timeline()

// navbar

tl.from('.navbar .logo',{
    y: 20,
    opacity: 0,
    duration: 0.5,
    scrub: 1,
})
tl.from('.nav-links',{
    y: 10,
    opacity: 0,
    duration: 0.1,
    scrub: 1,
})
tl.from('.navbar .search',{
    y: 10,
    opacity: 0,
    duration: 0.5,
    scrub: 1,
    stagger: 1,
})

// cards

tl.from('.t-card-1',{
    y: 10,
    opacity: 0,
    duration: 0.5,
    scrub: 1,
})
tl.from('.t-card-2',{
    y: 10,
    opacity: 0,
    duration: 0.5,
    scrub: 1,
})
tl.from('.t-card-3',{
    y: 10,
    opacity: 0,
    duration: 0.5,
    scrub: 1,
})

// see more

gsap.from('.see-more .see-more-text',{
    y: 10,
    opacity: 0,
    duration: 1,
    scrub: 1,
    scrollTrigger: {
        trigger: '.t-card-3',
        start: 'top 50%',
        end: 'bottom 70%',
}
})
gsap.from('.see-more .see-more-btn',{
    y: 10,
    opacity: 0,
    duration: 2,
    scrub: 1,
    scrollTrigger: {
        trigger: '.t-card-3',
        start: 'top 45%',
        end: 'bottom 65%',
    }
})

// gsap on about section

gsap.from('.about-card',{
    y:20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.hero',
        start: 'bottom 50%',
        end: 'bottom bottom',
    }
})

// section name

gsap.from('.section-name #about, .section-name .circle-icon-1',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 60%',
        end: 'bottom bottom',
    }
})
gsap.from('.card-text h2',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 60%',
        end: 'bottom bottom',
    }
})
gsap.from('.card-text p',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 40%',
        end: 'bottom bottom',
    }
})

// about card right side

gsap.from('.right-side #p-1',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 60%',
        end: 'bottom bottom',
    }
})
gsap.from('.right-side #h2-1',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 60%',
        end: 'bottom bottom',
    }
})
gsap.from('.right-side #img-1',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 60%',
        end: 'bottom bottom',
    }
})
gsap.from('.right-side #p-2',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 40%',
        end: 'bottom bottom',
    }
})
gsap.from('.right-side #h2-2',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 40%',
        end: 'bottom bottom',
    }
})
gsap.from('.right-side #img-2',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 40%',
        end: 'bottom bottom',
    }
})
gsap.from('.right-side #p-3',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 20%',
        end: 'bottom bottom',
    }
})
gsap.from('.right-side #h2-3',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 20%',
        end: 'bottom bottom',
    }
})
gsap.from('.right-side #img-3',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 20%',
        end: 'bottom bottom',
    }
})

// features section gsap


gsap.from('.features .section-name',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.features',
        start: 'top 30%',
        end: 'bottom bottom',
    }
})

gsap.from('.features .features-wrapper .features-title',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.features',
        start: 'top 25%',
        end: 'bottom bottom',
    }
})

gsap.from('.features .features-wrapper .sub-title',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.features',
        start: 'top 20%',
        end: 'bottom bottom',
    }
})

// features section horizontal slider with gsap

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    ScrollTrigger.create({
        trigger: '.slider-imgs',
        start: 'top top',
        end: '+=1000vh',
        scrub: 1,
        pin: true,
        markers: true,
        onUpdate: (self) => {
            gsap.to('.slider-imgs', {
                x: `${-350 * self.progress}vw`,
                duration: 0.5,
                ease: 'power3.out',
            });
        }
    });
});

// closer look section gsap


gsap.from('.closer-look .section-name',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.closer-look',
        start: 'bottom 20%',
        end: 'bottom bottom',
    }
})

gsap.from('.closer-look .features-wrapper h2',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.closer-look',
        start: 'bottom 15%',
        end: 'bottom bottom',
    }   
})

gsap.from('.closer-look .features-wrapper .sub-title',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.closer-look',
        start: 'bottom 10%',
        end: 'bottom bottom',
    }
})

// contact section gsap

gsap.from('.contact .section-name',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.contact',
        start: 'bottom 60%',
        end: 'bottom bottom',
    }
})

gsap.from('.contact .features-wrapper h2',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.contact',
        start: 'bottom 55%',
        end: 'bottom bottom',
    }   
})

gsap.from('.contact .features-wrapper .sub-title',{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.contact',
        start: 'bottom 50%',
        end: 'bottom bottom',
    }
})
gsap.from('.contact .t-form input, .t-form textarea, .t-form p',{
    x: -10,
    opacity: 0,
    duration: 0.5,
    stagger: 1,
    scrollTrigger: {
        trigger: '.contact',
        start: 'bottom 40%',
        end: 'bottom bottom',
    }
})

// contact elem animation

gsap.to('.contact-elem',{
    y:-5,
    duration: 1,
    scrub: 1,
    yoyo: true,
    repeat: -1,
})
// gsap.from('.contact-elem',{
//     y: 3,
//     opacity: 0,
//     duration: 1.5,
//     scrollTrigger: {
//         trigger: '.contact',
//         start: 'bottom 40%',
//         end: 'bottom bottom',
//     }
// })