function loadSkill() {
  fetch('../resource.json')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.container#skills');
      data.skills.forEach(skill => {
        const card = document.createElement('div');
        card.classList.add('skill-card');

        const name = document.createElement('h3');
        name.textContent = skill; // skill is now directly the string
        card.appendChild(name);

        container.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

function loadProjects() {
  fetch('../resource.json')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.project-container');
      data.projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        const name = document.createElement('h3');
        name.textContent = project.name;
        card.appendChild(name);

        const description = document.createElement('p');
        description.textContent = project.description;
        card.appendChild(description);

        const url = document.createElement('a');
        url.href = project.url;
        url.textContent = 'View Project';
        url.target = '_blank';
        card.appendChild(url);

        container.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

function loadExperience() {
  fetch('../resource.json')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.experience-container');
      data.experience.forEach(exp => {
        const card = document.createElement('div');
        card.classList.add('experience-card');

        const title = document.createElement('h3');
        title.textContent = exp.role;
        card.appendChild(title);

        const company = document.createElement('p');
        company.textContent = `${exp.company}`;
        card.appendChild(company);

        const duration = document.createElement('p');
        duration.textContent = `${exp.duration}`;
        card.appendChild(duration);

        const responsibilities = document.createElement('ul');
        exp.responsibilities.forEach(responsibility => {
          const listItem = document.createElement('li');
          listItem.textContent = responsibility;
          responsibilities.appendChild(listItem);
        });
        card.appendChild(responsibilities);

        container.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

function loadLinks() {
  fetch('../resource.json')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.link-container');
      data.links.forEach(link => {
        const card = document.createElement('div');
        card.classList.add('link-card');

        const name = document.createElement('h3');
        name.textContent = link.name;
        card.appendChild(name);

        const spacer = document.createElement('div');
        card.appendChild(spacer);

        const url = document.createElement('a');
        url.href = link.url;
        url.textContent = 'Visit Link';
        url.target = '_blank';
        card.appendChild(url);

        container.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

function updateFooter() {
  const currentYear = new Date().getFullYear();
  const email = "botan.celik@icloud.com";
  const footerElement = document.querySelector('footer');
  
  if (footerElement) {
      footerElement.innerHTML = `${currentYear} <a href="mailto:${email}">Botan Celik</a>`;
  } else {
      console.error('Footer element not found in the document.');
  }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  updateFooter();
});

if (window.location.pathname.endsWith('projects.html')) {
  loadProjects();
} else if (window.location.pathname.endsWith('experience.html')) {
  loadExperience();
} else if (window.location.pathname.endsWith('links.html')) {
  loadLinks();
} else {
  loadSkill();
}