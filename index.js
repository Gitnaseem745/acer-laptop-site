
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
   