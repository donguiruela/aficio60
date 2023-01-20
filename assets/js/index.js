const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav_link');   

function linkAction(){

  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home_title',{}); 
sr.reveal('.home_img',{origin: 'bottom', delay: 200}); 
sr.reveal('.home_social-icon',{interval: 200}); 
sr.reveal('.home_bg-img', {origin: 'bottom', interval:400});

sr.reveal('.about_img',{origin: 'left'}); 
sr.reveal('.about_subtitle',{delay: 400}); 
sr.reveal('.about_text',{delay: 400}); 

sr.reveal('.portfolio_hor-img',{origin: 'left', interval: 200}); /*Horizontal*/
sr.reveal('.portfolio_ver-img',{origin: 'right', interval: 200}); /*Vertical*/

sr.reveal('.youtube-videos', {origin: 'bottom', interval: 150});

sr.reveal('.contact_input',{interval: 200}); 
sr.reveal('.contact_info',{origin: 'left', interval: 200}); 
sr.reveal('.contact_button', {origin: 'right', interval: 200})
/*

Courtesy to Bedimcode Tutorials

Youtube Channel: https://www.youtube.com/channel/UCgkDs77BoEhMIgRUB4MKrtQ
Github: https://github.com/bedimcode

*/



