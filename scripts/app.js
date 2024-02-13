// import ‘../node_modules/<package name>/<css file to import>’;


// If statement to inject the correct text
if (document.title === 'Product Page') {
  injectProductContent();
} else if (document.title === 'About Us') {
  injectAboutUsContent();
} else if (document.title === 'Services Page') {
  injectServicesContent();
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// Function to inject content into the HTML page
function injectAboutUsContent() {
  // Injecting content for 'About Chase' section
  document.getElementById('aboutChaseHeading').innerText = 'About Chase';
  document.getElementById('aboutChaseText').innerText = `Hi, I'm Chase, a passionate person who loves exploring new ideas and creating meaningful connections. 
  Outside of work, you can often find me spending time with my friends, at home on my computer, or if it's warm out, I'd be out on my bike.`;
  document.getElementById('aboutChaseImage').src = './images/about_chase.png';

  // Injecting content for 'About Daniel' section
  document.getElementById('aboutDanielHeading').innerText = 'About Daniel';
  document.getElementById('aboutDanielText').innerText = `Hi, I'm Daniel Cameron. I am enthusiastic about [describe yourself].`;
  document.getElementById('aboutDanielImage').src = './images/about_daniel.png';

  // Injecting content for 'Our Hobbies' section
  document.getElementById('ourHobbiesHeading').innerText = 'Our Hobbies';
  document.getElementById('ourHobbiesText').innerText = `We both like to invest a lot of our time into video games.`;
  document.getElementById('ourHobbiesImage').src = './images/family_pets_image.png';
}



// Function to inject content into the HTML page
function injectProductContent() {
  // Injecting content for 'Valorant' section
  document.getElementById('valorantHeading').innerText = 'Valorant';
  document.getElementById('valorantText').innerText = `Valorant is a free-to-play multiplayer tactical first-person shooter developed and published by Riot Games.
      The game was announced with the codename Project A in October 2019 and was released on June 2, 2020. Valorant
      has gained immense popularity for its strategic gameplay, unique character abilities, and engaging competitive
      scene.`;
  document.getElementById('valorantImage').src = './images/valorant_image.png';

  // Injecting content for 'J. Cole' section
  document.getElementById('jcoleHeading').innerText = 'J. Cole';
  document.getElementById('jcoleText').innerText = `J. Cole is a critically acclaimed rapper, singer, songwriter, and record producer known for his introspective
      lyrics and socially conscious themes. Born on January 28, 1985, in Fayetteville, North Carolina, J. Cole has
      released several successful albums, including "2014 Forest Hills Drive" and "KOD", earning widespread praise
      for his storytelling ability and thought-provoking content.`;
  document.getElementById('jcoleImage').src = './images/jcole_image.png';

  // Injecting content for 'Harry Potter' section
  document.getElementById('harryPotterHeading').innerText = 'Harry Potter';
  document.getElementById('harryPotterText').innerText = `Harry Potter is a globally beloved fantasy book series written by British author J.K. Rowling. The series
      follows the life and adventures of a young wizard, Harry Potter, and his friends Hermione Granger and Ron
      Weasley as they attend Hogwarts School of Witchcraft and Wizardry. The series consists of seven books,
      which have been adapted into eight successful films, numerous spin-offs, and a dedicated fanbase worldwide.`;
  document.getElementById('harryPotterImage').src = './images/harrypotter_image.png';
}

// Function to inject content into the HTML page
function injectServicesContent() {
  // Injecting content for 'Digital Marketing' section
  document.getElementById('digitalMarketingHeading').innerText = 'Digital Marketing';
  document.getElementById('digitalMarketingText').innerText = `Our digital marketing services are designed to help businesses increase their online presence, attract
      more customers, and drive sales. From search engine optimization (SEO) and social media marketing to
      email campaigns and content creation, we offer comprehensive strategies tailored to your business goals.`;
  document.getElementById('digitalMarketingImage').src = './images/digital_marketing_image.png';

  // Injecting content for 'Graphic Design' section
  document.getElementById('graphicDesignHeading').innerText = 'Graphic Design';
  document.getElementById('graphicDesignText').innerText = `Our graphic design services cover a wide range of visual communication needs. Whether you need a new
      logo, branding materials, or marketing collateral, our team of talented designers will bring your ideas
      to life with creativity and precision.`;
  document.getElementById('graphicDesignImage').src = './images/graphic_design_image.png';

  // Injecting content for 'Financial Consulting' section
  document.getElementById('financialConsultingHeading').innerText = 'Financial Consulting';
  document.getElementById('financialConsultingText').innerText = `Our financial consulting services provide businesses with expert advice and guidance to improve their
      financial performance and achieve their goals. From budgeting and forecasting to investment strategies
      and risk management, we offer personalized solutions to help you navigate the complexities of finance
      and maximize profitability.`;
  document.getElementById('financialConsultingImage').src = './images/financial_consulting_image.png';
}


