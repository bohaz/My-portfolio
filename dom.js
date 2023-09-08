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
    image: 'img/mario.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://bohaz.github.io/Leaderboard/dist/',
    sourceLink: 'https://github.com/bohaz/First-mobile-project',
  },
  {
    name: 'To-do-list',
    description: 'This is a minimalist to-do list that alows users to organize daily activities.',
    image: 'img/todo.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://bohaz.github.io/First-mobile-project/',
    sourceLink: 'https://github.com/bohaz/First-mobile-project',
  },
  {
    name: 'Rodeo web page',
    description: 'The Finals Rodeo website is a final project created with HTML, CSS and Javascript where we apply all the knowledge acquired during module 1',
    image: 'img/rodeo.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://bohaz.github.io/First-mobile-project/',
    sourceLink: 'https://github.com/bohaz/First-mobile-project',
  },
  {
    name: 'Book-list',
    description: 'Book-list is a Single Page Application that allows users to add and remove amazing books.',
    image: 'img/Booklist.png',
    technologies: ['React', 'Redux', 'Bootstrap'],
    liveLink: 'https://bohaz.github.io/First-mobile-project/',
    sourceLink: 'https://github.com/bohaz/First-mobile-project',
  },
  {
    name: 'Math-magicians',
    description: 'It is a Single Page Application that allows users to make simple math operations.',
    image: 'img/Math.png',
    technologies: ['React', 'Redux', 'CSS'],
    liveLink: 'https://bohaz.github.io/First-mobile-project/',
    sourceLink: 'https://github.com/bohaz/First-mobile-project',
  },
  {
    name: 'Air quality monitoring app',
    description: 'Air Quality Monitoring App is an intuitive single Page Application (SPA) displaying real-time air pollution levels across Venezuelan states.',
    image: 'img/Airapp.png',
    technologies: ['React', 'Redux', 'CSS'],
    liveLink: 'https://bohaz.github.io/First-mobile-project/',
    sourceLink: 'https://github.com/bohaz/First-mobile-project',
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
  projectCard.appendChild(viewDetailsButton);

  projectsContainer.appendChild(projectCard);
});

/* --------------------Modal pop up----------------*/
const body = document.querySelector('body');
const openModal = document.querySelectorAll('.project-card button, .multi-post-nav');
openModal.forEach((button) => {
  button.addEventListener('click', () => {
    const popSection = document.createElement('div');
    const popUp = document.createElement('div');
    popUp.innerHTML = `
  <div class="pop-up-content" id="pop-up-container">
    
  <div class="pop-box">
   <h3 class="mobileh3">Multi Post Stories</h3>
   <h3 class="deskh3">Keeping track of hundreds  of components website</h3>
   <a class="pop-close"><img src="img/popclose.png"></a>
  </div>
   
  <ul class="pop-up-ul">
     <li><img src="img/pophtml.png"></li>
     <li><img src="img/popboots.png"></li>
     <li><img src="img/popruby.png"></li>
  </ul>
  
  <div class="pop-box2">
   
    <img class="popimage" src="img/popimage.png" alt="popimg">
  
    <div class="pop-box3">
      <p class="deskp">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
      <div class="popbuttons">
      <a href="https://bohaz.github.io/First-mobile-project/" target="_blank"><button><img src="img/seelive.png"></button></a>
      <a href="https://github.com/bohaz/First-mobile-project" target="_blank"><button><img src="img/seesource.png"></button></a>
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
