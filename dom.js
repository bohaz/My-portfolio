/* -------------Mobile menu----------------*/

const nav = document.querySelector('#nav');
const openButton = document.querySelector('#open');
const closeButton = document.querySelector('#close');

openButton.addEventListener('click', () => {
  nav.classList.add('visible');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('visible');
});

const menuLinks = document.querySelectorAll(".mobile-menu a[href^='#']");

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    nav.classList.remove('visible');
  });
});

/* ------------------Array--------------------*/
const projects = [
  {
    name: 'Finan-Pet',
    description: 'Finanpet is a finance management application built on Ruby on Rails, leveraging Stimulus.js and Tailwind CSS for a responsive UI. This project allows users to efficiently track their incomes and expenses, featuring a relational database schema to ensure data integrity.',
    technologies: ['Ruby', 'Rails', 'Tailwind', 'Postgres'],
    image: 'img/projects/Finanpet.png',
    liveLink: '#',
    sourceLink: 'https://github.com/bohaz/FinanPet',
  },
  {
    name: 'Pet Fashion',
    description: 'This is a simple website that provides online visibility for our business. Its sleek, user-friendly design ensures effortless navigation, improving customer engagement and accessibility',
    image: 'img/projects/Petfashion.png',
    technologies: ['React', 'Tailwind', 'CSS3'],
    liveLink: 'https://petfashion.vercel.app/',
    sourceLink: 'https://github.com/bohaz/petfashion',
  },
  {
    name: 'Medica',
    description: 'Is a dynamic web application for managing doctor directories and bookings. It offers an easy-to-use interface to seamlessly view, add, update and delete medical records',
    image: 'img/projects/Medica.png',
    technologies: ['React', 'Rails', 'Postgres', 'Tailwind'],
    liveLink: 'https://two4hours-doctor-frontend.onrender.com/',
    sourceLink: 'https://github.com/bohaz/24hour_doctor-front_end',
  },
  {
    name: 'Transac Trends',
    description: 'TransactTrends is a web application designed to help you manage and keep a detailed track of your financial transactions',
    image: 'img/projects/Trend.png',
    technologies: ['Ruby', 'Rails', 'Postgres', 'CSS3'],
    liveLink: '#',
    sourceLink: 'https://github.com/bohaz/Budget-app',
  },
  {
    name: 'Space Travelers Hub',
    description: 'Web Page connected with the real live data from the SpaceX API, to provide commercial and scientific space travel services, users can book rockets and join selected space missions.',
    image: 'img/projects/Space.png',
    technologies: ['React', 'Redux', 'Bootstrap', 'API'],
    liveLink: 'https://space-travelers-hub-g5v6.onrender.com',
    sourceLink: 'https://github.com/bohaz/Space-Travelers-Hub',
  },
  {
    name: 'Air Quality Monitoring App',
    description: 'Air Quality Monitoring App is an intuitive single Page Application (SPA) displaying real-time air pollution levels across Venezuelan states.',
    image: 'img/projects/Airapp.png',
    technologies: ['React', 'Javascript', 'CSS3', 'API'],
    liveLink: 'https://air-quality-monitoring-app.onrender.com/',
    sourceLink: 'https://github.com/bohaz/air-quality-monitoring-app',
  },
  {
    name: 'Movie World',
    description: 'MovieWorld is an application that renders Tv Shows from TVMaze API and also has features like fetching and posting comments and Likes using the Involvment API. This is a collaborative project where we have applied all the skills obtained throughout the javascript module.',
    image: 'img/projects/Movie.png',
    technologies: ['Javascript', 'HTML5', 'CSS3'],
    liveLink: 'https://java-script-capstone-navy.vercel.app/',
    sourceLink: 'https://github.com/bohaz/JavaScript-Capstone',
  },
];

/* ------------------Creating cards dynamically---------------------*/

const projectsContainer = document.querySelector('#projects-container');

projects.slice(1).forEach((project, index) => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  const projectImageContainer = document.createElement('div');
  projectImageContainer.classList.add('project-card-image');
  projectImageContainer.style.backgroundImage = `url(${project.image})`;
  projectCard.appendChild(projectImageContainer);

  const projectName = document.createElement('h3');
  projectName.textContent = project.name;
  projectCard.appendChild(projectName);

  const projectDescription = document.createElement('p');
  projectDescription.textContent = project.description;
  projectCard.appendChild(projectDescription);

  const projectTechnologies = document.createElement('ul');
  project.technologies.forEach((technology) => {
    const technologyItem = document.createElement('li');
    technologyItem.textContent = technology;
    projectTechnologies.appendChild(technologyItem);
  });
  projectCard.appendChild(projectTechnologies);

  const viewDetailsButton = document.createElement('button');
  viewDetailsButton.textContent = 'See project';
  viewDetailsButton.setAttribute('data-index', index + 1);
  projectCard.appendChild(viewDetailsButton);

  projectsContainer.appendChild(projectCard);
});

/* --------------------Modal pop up----------------*/
const body = document.querySelector('body');
const openModal = document.querySelectorAll('.project-card button, .main-project-container button');

openModal.forEach((button) => {
  button.addEventListener('click', () => {
    const projectIndex = button.getAttribute('data-index');
    const project = projects[projectIndex];

    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal-background');
    body.appendChild(modalBackground);

    const popSection = document.createElement('div');
    const popUp = document.createElement('div');
    popUp.classList.add('pop-up-content');
    popUp.innerHTML = `
      <div class="pop-up-content" id="pop-up-container">
        <div class="pop-box">
          <h3 class="mobileh3">${project.name}</h3>
          <h3 class="deskh3">${project.description}</h3>
          <a class="pop-close"><img src="img/popclose.png"></a>
        </div>
        <ul class="pop-up-ul">
          ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
        <div class="pop-box2">
          <img class="popimage" src="${project.image}" alt="${project.name}">
          <div class="pop-box3">
            <p class="deskp">${project.description}</p>
            <div class="popbuttons">
              <a href="${project.liveLink}" target="_blank"><button class="live-button">See Live <img src="img/icons/live.svg"></button></a>
              <a href="${project.sourceLink}" target="_blank"><button class="source-button">See source <img src="img/icons/github.svg"></button></a>
            </div>
          </div>
        </div>
      </div>
    `;

    popSection.appendChild(popUp);
    body.appendChild(popSection);

    const popCloseButton = popSection.querySelector('.pop-close');
    popCloseButton.addEventListener('click', () => {
      popSection.remove();
      modalBackground.remove();
    });
  });
});

/* --------------------Form Validation------------------------*/

const form = document.querySelector('.form');
const errorElement = document.querySelector('.error-message');
const submitButton = document.querySelector('.getintouch');

function populateFormFields(formData) {
  const emailInput = document.getElementById('mail');
  emailInput.value = formData.email;
}

function getFormData() {
  const emailInput = document.getElementById('mail');
  const formData = {
    email: emailInput.value,
  };
  return formData;
}

window.addEventListener('load', () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    populateFormFields(formData);
  }
});

form.addEventListener('input', () => {
  const formData = getFormData();
  localStorage.setItem('formData', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  const formData = getFormData();

  if (formData.email !== formData.email.toLowerCase()) {
    errorElement.textContent = 'El correo electrónico debe estar en minúsculas';
    submitButton.parentNode.insertBefore(errorElement, submitButton);

    event.preventDefault();
  } else {
    errorElement.textContent = '';
    localStorage.removeItem('formData');
  }
});

/* ------------------Active link---------------------*/

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.desktop-bar ul li a');

  const updateActiveLink = () => {
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveLink);
});
