// Rotating titles configuration
const titles = ["I AM A STUDENT", "I AM A DESIGNER", "I AM A PROGRAMMER"];
let currentIndex = 0;

// Typewriter effect function
function typeWriterEffect(text, i, callback) {
  const titleElement = document.querySelector('.rotating-title');
  if (i < text.length) {
    // Add a character to the title element
    titleElement.textContent += text.charAt(i);
    // Schedule the next character after a delay (100ms)
    setTimeout(() => typeWriterEffect(text, i + 1, callback), 100);
  } else {
    // After all characters are typed, wait 2 seconds before calling the callback
    setTimeout(callback, 2000);
  }
}

// Title rotation function
function rotateTitle() {
  const titleElement = document.querySelector('.rotating-title');
  // Clear the existing title
  titleElement.textContent = '';
  // Start the typewriter effect for the current title
  typeWriterEffect(titles[currentIndex], 0, () => {
    // Update the current index and loop back if needed
    currentIndex = (currentIndex + 1) % titles.length;
    // Call rotateTitle again to display the next title
    rotateTitle();
  });
}

// Project Data
const projects = [
  {
      title: "📚 Research on Student Perception of Responsible Parenthood and Reproductive Health in Personal Development 📚",
      description: "This research explores how students perceive the integration of responsible parenthood and reproductive health into their personal development. The findings highlight the importance of comprehensive education in shaping informed attitudes and behaviors towards these crucial topics.",
      image: "626067b2-a38f-4fc5-ba92-343acaf067a8 (1).jfif",
  },
  {
      title: "🚀 Entrepreneurship: Drips 🚀",
      description: "I started Drips, a project where we sell tasty chips and refreshing drinks while learning to entertain our customers. This venture highlights my entrepreneurial spirit, creativity, and ability to connect with people. Through Drips, I have gained valuable skills in running a business, marketing, and engaging with our audience. It's been a rewarding experience that has taught me a lot about business and customer relations. I'm proud of the growth and success of Drips and excited about its future potential.",
      image: "collage.jfif",
  },
  {
      title: "📚 The King of Mystery 📚",
      description: "I wrote and illustrated a short story called The King of Mystery, which showcases my writing and artistic skills. The story is about a mysterious king and a villager named Elara, highlighting themes of curiosity and knowledge. This project reflects my creativity and dedication to storytelling.",
      image: "669f7e81-9ff6-4a64-8134-846670c50bc5.jfif",
  }
];

// Current States
let currentProjectIndex = 0;

// DOM Elements
const rotatingTitle = document.getElementById('rotating-title');
const projectTitle = document.getElementById('project-title');
const projectDescription = document.getElementById('project-description');
const projectImage = document.getElementById('project-img');
const projectCounter = document.querySelector('.project-counter');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Initialize Stars
function initializeStars() {
  const starsContainer = document.getElementById('stars-container');
  for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.setProperty('--duration', `${Math.random() * 3 + 1}s`);
      starsContainer.appendChild(star);
  }
}

// Update Project Display
function updateProject() {
  const project = projects[currentProjectIndex];
  
  // Fade out existing elements
  projectTitle.style.opacity = '0';
  projectDescription.style.opacity = '0';
  projectImage.style.opacity = '0';
  
  setTimeout(() => {
      projectTitle.textContent = project.title;
      projectDescription.textContent = project.description;
      projectImage.src = project.image;
      projectImage.alt = project.title;
      projectCounter.textContent = `${currentProjectIndex + 1} / ${projects.length}`;
      
      // Fade in new content
      projectTitle.style.opacity = '1';
      projectDescription.style.opacity = '1';
      projectImage.style.opacity = '1';
  }, 300);
}

// Navigation Functions
function nextProject() {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  updateProject();
}

function prevProject() {
  currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
  updateProject();
}

// Event Listeners for Project Navigation
prevButton.addEventListener('click', prevProject);
nextButton.addEventListener('click', nextProject);

// Initialize all features when DOM is loaded
function initialize() {
  initializeStars();
  updateProject();
  rotateTitle(); // Start rotating titles
}

// Start everything when the DOM is ready
document.addEventListener('DOMContentLoaded', initialize);

// Function to update the circular progress based on the percentage
function updateProgressCircle(element, percentage) {
  const circle = element.querySelector('.progress-circle');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

// Initialize progress circles when the window loads
function initProgressCircles() {
  const progressCircles = document.querySelectorAll('.circle-skill');
  
  // Example skill percentages
  const skillPercentages = {
    html: 85,
    css: 75,
    javascript: 90,
    react: 80
  };

  progressCircles.forEach((circle, index) => {
    const skillKey = Object.keys(skillPercentages)[index];
    const percentage = skillPercentages[skillKey];
    
    updateProgressCircle(circle, percentage);

    const label = circle.querySelector('.skill-label');
    if (label) {
      label.textContent = `${percentage}%`;
    }
  });
}

// Create twinkling stars
function createStars() {
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--duration', `${Math.random() * 3 + 1}s`);
    document.body.appendChild(star);
  }
}

// Create shooting stars
function createShootingStars() {
  const shootingStar = document.createElement('div');
  shootingStar.className = 'shooting-star';
  shootingStar.style.left = `${Math.random() * 100}%`;
  shootingStar.style.top = `${Math.random() * 100}%`;
  document.body.appendChild(shootingStar);

  setTimeout(() => {
    shootingStar.remove();
    createShootingStars();
  }, 3000);
}

// Intersection Observer for section animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => observer.observe(section));

// Initialize everything when the window loads
window.addEventListener('load', () => {
  createStars();
  createShootingStars();
  initProgressCircles(); // Initialize progress circles
});

// Video/Image Transition for About Section
document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('myVideo');
  const image = document.getElementById('profileImg');
  const aboutSection = document.getElementById('about');
  let hasPlayed = false;

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting && !hasPlayed) {
              image.classList.add('fade-out');
              video.classList.add('fade-in');
              setTimeout(() => {
                  video.play()
                      .catch(function(error) {
                          console.log("Video play failed:", error);
                      });
                  image.style.display = 'none';
              }, 500);
              hasPlayed = true;
          }
      });
  }, { threshold: 0.5 });

  observer.observe(aboutSection);
});
