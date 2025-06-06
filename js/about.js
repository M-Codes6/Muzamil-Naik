const aboutContainer = document.getElementById("about-container");

if (aboutContainer) {
 
  const aboutContent = document.createElement("div");
  aboutContent.className = "about-content";
  
  // Create the about text div
  const aboutText = document.createElement("div");
  aboutText.className = "about-text";
  
  const paragraphs = [
    "I'm a Computer Science student with a passion for web development and data structures & algorithms. Currently pursuing my BSc in Computer Science from Sopore, Kashmir.",
    "My journey in tech began with curiosity about how websites work, which led me to dive deep into HTML, CSS, and JavaScript. I'm constantly learning and expanding my skill set to become a better developer.",
    "When I'm not coding, you can find me solving DSA problems or exploring the beautiful landscapes of Kashmir."
  ];
  
  // Create and append each paragraph
  paragraphs.forEach(text => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    aboutText.appendChild(paragraph);
  });
  
  aboutContent.appendChild(aboutText);
  aboutContainer.appendChild(aboutContent);
  
  const handleResize = () => {
    if (window.innerWidth < 768) {
      aboutContent.style.flexDirection = "column";
    } else {
      aboutContent.style.flexDirection = "row";
    }
  };
  
  // Initial call and event listener for resize
  handleResize();
  window.addEventListener('resize', handleResize);
}
