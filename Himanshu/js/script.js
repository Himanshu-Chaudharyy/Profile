

  var typed = new Typed('.multiple-text', {
	strings: ['Front-end Developer', 'Back-end Developer', 'Full-stack Developer'],
	typeSpeed: 50,
	backSpeed: 30, // backspacing speed
	startDelay: 500, // time before typing starts
	backDelay: 500, // time before backspacing starts
	loop: true // loop indefinitely
  });
  
  

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})

