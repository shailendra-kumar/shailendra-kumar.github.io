let menuBtn = document.getElementById('menuBtn');
let sideNav = document.getElementById('sideNav');
let menu = document.getElementById('menu');
let logo = document.getElementById('logo');
let counters = document.querySelectorAll('.counter');
let scrollStarted = false;

sideNav.style.right = '-250px';

menuBtn.onclick = function(){
  if(sideNav.style.right === '-250px'){
    sideNav.style.right = '0';
    menu.src = '/img/close.png';
  } else {
    sideNav.style.right = '-250px'
    menu.src = '/img/menu.png'
  }
}


// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 51.511981, lng: -0.132004 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// Counter
document.addEventListener('scroll', scrollPage);

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });

}
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  const mailto = `mailto:advnitishkumar2533@gmail.com?subject=New Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
  window.location.href = mailto;
});


function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}

const twitterLink = document.getElementById('twitter-link');
twitterLink.addEventListener('click', () => {
  window.open('https://twitter.com/your_twitter_handle');
});

const facebookLink = document.getElementById('fb-link');
facebookLink.addEventListener('click', () => {
  window.open('https://www.facebook.com/your_facebook_page');
});

const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
  authStrategy:new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();


  window.addEventListener("load", function() {
    var chatButton = document.querySelector('a[href="https://wa.me/9021642885"]');
    chatButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.open("https://api.whatsapp.com/send?phone=9021642885", "_blank");
    });
  });


 
