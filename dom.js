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

menuLinks.forEach((menulink) => {
  menulink.addEventListener('click', () => {
    nav.classList.remove('visible');
  });
});

/* ------------------Array--------------------*/
const projects = [
  {
    name: 'Leaderboard',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/projects/mario.png',
    technologies: ['HTML', 'Javascript', 'Ruby'],
    liveLink: 'https://bohaz.github.io/Leaderboard/dist/',
    sourceLink: 'https://github.com/bohaz/First-mobile-project',
  },
  {
    name: 'To-do-list',
    description: 'This is a minimalist to-do list that alows users to organize daily activities.',
    image: 'img/projects/todo2.png',
    technologies: ['React', 'Javascript', 'Bootstrap'],
    liveLink: 'https://todo-react-xktv.onrender.com/',
    sourceLink: 'https://github.com/bohaz/todo-react',
  },
  {
    name: 'Rodeo web page',
    description: 'The Finals Rodeo website is a final project created with HTML, CSS and Javascript where we apply all the knowledge acquired during module 1',
    image: 'img/projects/rodeo.png',
    technologies: ['HTML', 'Javascript', 'CSS3'],
    liveLink: 'https://bohaz.github.io/Capstone-project1/',
    sourceLink: 'https://github.com/bohaz/Capstone-project1',
  },
  {
    name: 'TransactTrends',
    description: 'TransactTrends is a web application designed to help you manage and keep a detailed track of your financial transactions.',
    image: 'img/projects/Trans3.png',
    technologies: ['Ruby', 'Rails', 'CSS3'],
    liveLink: 'https://transacttrends.onrender.com',
    sourceLink: 'https://github.com/bohaz/Budget-app',
  },
  {
    name: 'Math-magicians',
    description: 'It is a Single Page Application that allows users to make simple math operations.',
    image: 'img/projects/Math2.png',
    technologies: ['React', 'Redux', 'CSS3'],
    liveLink: 'https://ricardo-math-magicians.onrender.com/',
    sourceLink: 'https://github.com/bohaz/math-magicians',
  },
  {
    name: 'Air quality monitoring app',
    description: 'Air Quality Monitoring App is an intuitive single Page Application (SPA) displaying real-time air pollution levels across Venezuelan states.',
    image: 'img/projects/Airapp.png',
    technologies: ['React', 'Redux', 'CSS3'],
    liveLink: 'https://air-quality-monitoring-app.onrender.com/',
    sourceLink: 'https://github.com/bohaz/air-quality-monitoring-app',
  },
];

/* ------------------Creating cards dynamically---------------------*/

const projectsContainer = document.querySelector('#projects-container');

projects.forEach((project) => {
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
  viewDetailsButton.setAttribute('data-index', projects.indexOf(project));
  projectCard.appendChild(viewDetailsButton);

  projectsContainer.appendChild(projectCard);
});

/* --------------------Modal pop up----------------*/
const body = document.querySelector('body');
const openModal = document.querySelectorAll('.project-card button, .multi-post-nav');
openModal.forEach((button) => {
  button.addEventListener('click', () => {
    const projectIndex = button.getAttribute('data-index');
    const project = projects[projectIndex];
    const popSection = document.createElement('div');
    const popUp = document.createElement('div');
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
              <a href="${project.liveLink}" target="_blank"><button><img src="img/seelive.png"></button></a>
              <a href="${project.sourceLink}" target="_blank"><button><img src="img/seesource.png"></button></a>
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
