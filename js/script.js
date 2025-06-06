
const paragraphElement = document.getElementById("paragraph");
const lineElement = document.getElementById("line-text");
const body = document.querySelector('body');

const paragraphText = `I'm a BSc Computer Science student from Sopore, Kashmir, passionate about turning logic into lines of code. From tackling DSA challenges to designing sleek web apps, I see every bug as a plot twist waiting for a comeback. Every challenge is a new level—and I'm here to level up.`;
const lineText = "Code. Build. Repeat.";

let paragraphIndex = 0;
let lineIndex = 0;

function typeWords() {
  
  if (lineIndex < lineText.length) {
    lineElement.textContent = lineText.slice(0, ++lineIndex);
    setTimeout(typeWords, 30);
  }
  else if (paragraphIndex < paragraphText.length) {
    paragraphElement.textContent = paragraphText.slice(0, ++paragraphIndex);
    setTimeout(typeWords, 30);
  }
}

typeWords();

// Smooth scroll function
      function scrollToSection(event, sectionId) {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
      
      // Add active state to navigation links based on scroll position
      window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
          }
        });
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
          }
        });
      });

// Handle page load transition
document.addEventListener('DOMContentLoaded', () => {
  const transitionElement = createTransitionElement();
  transitionElement.classList.add('active');
  
  setTimeout(() => {
    transitionElement.classList.add('exit');
    setTimeout(() => {
      transitionElement.remove();
    }, 700);
  }, 500);
});

// Glitch effect on hover for the name
const glitchElement = document.querySelector('.glitch');
if (glitchElement) {
  glitchElement.addEventListener('mouseenter', () => {
    glitchElement.style.animation = 'none';
    setTimeout(() => {
      glitchElement.style.animation = '';
    }, 10);
  });
}


// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Project and blog card hover effects
const projectCards = document.querySelectorAll('.project-card');
const blogCards = document.querySelectorAll('.blog-card');

const addHoverEffect = (cards) => {
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    });
  });
};

addHoverEffect(projectCards);
addHoverEffect(blogCards);
