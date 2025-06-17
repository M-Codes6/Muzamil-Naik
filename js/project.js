const projects = [
  {
    title: "DuaMate",
    description: "Islamic dua search app for Muslims around the world. You can search duas from Quran and Hadith with their references.",
    image: "assets/images/Duamate.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://duamate.vercel.app",
    code: "https://github.com/M-Codes6/DuaMate"
  },
  {
    title: "Elemind",
    description: "Elemind is an interactive periodic table web app designed to help students learn and memorize element positions through an engaging drag-and-drop interface. With a responsive design, Elemind delivers an optimal experience across desktops, tablets, and smartphones.",
    image: "assets/images/elemind.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://elemind.vercel.app/",
    code: "https://github.com/M-Codes6/Elemind--Periodic-Playground-"
  },
  {
    title: "ZuZuu",
    description: "Your interactive chat companion crafted with HTML, CSS, and JavaScript. This responsive chat bot offers a seamless experience across all devices, providing engaging conversations with its pre-defined responses.",
    image: "assets/images/zuzu.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://zuzuu.vercel.app/",
    code: "https://github.com/M-Codes6/ZuzuChat"
  }
];

const container = document.getElementById("project-container");

if (container) {
  projects.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("project-card");
    div.innerHTML = `
      <div class="project-image">
        <img src="${p.image}" alt="${p.title}">
      </div>
      <div class="project-content">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span>${t}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${p.live}" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>
          <a href="${p.code}" target="_blank"><i class="fab fa-github"></i>source code</a>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
} else {
  console.error("No container with ID 'project-container' found.");
}
