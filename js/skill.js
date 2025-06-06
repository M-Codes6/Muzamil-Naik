const skillContainer = document.getElementById("skill-container");

// Check if the container exists
if (skillContainer) {
 
  const skillContent = document.createElement("div");
  skillContent.className = "skill-content";

  // Create the skills div
  const skillsDiv = document.createElement("div");
  skillsDiv.className = "skills";
  
  // Skills with proficiency percentages
  const skills = [
    { name: "HTML5", proficiency: 80 },
    { name: "CSS3", proficiency: 80 },
    { name: "JavaScript", proficiency: 40 },
    { name: "Python", proficiency: 30 },
    { name: "React", proficiency: 10 },
    { name: "DSA", proficiency: 30 },
    { name: "Git", proficiency: 40 },
    { name: "Responsive Design", proficiency: 70 }
  ];
  
  // Create skill items container
  const skillItemsContainer = document.createElement("div");
  skillItemsContainer.className = "skill-items-container";
  
  skills.forEach(skill => {
    const skillItem = document.createElement("div");
    skillItem.className = "skill-item";
    
    const skillInfo = document.createElement("div");
    skillInfo.className = "skill-info";
    
    const skillName = document.createElement("span");
    skillName.className = "skill-name";
    skillName.textContent = skill.name;
    
    const skillPercentage = document.createElement("span");
    skillPercentage.className = "skill-percentage";
    skillPercentage.textContent = `${skill.proficiency}%`;
    
    skillInfo.appendChild(skillName);
    skillInfo.appendChild(skillPercentage);
    
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    
    const progress = document.createElement("div");
    progress.className = "progress";
    progress.style.width = `${skill.proficiency}%`;
    
    progressBar.appendChild(progress);
    
    skillItem.appendChild(skillInfo);
    skillItem.appendChild(progressBar);
    
    // Add skill item to skill items container
    skillItemsContainer.appendChild(skillItem);
  });
  
  skillsDiv.appendChild(skillItemsContainer);
  skillContent.appendChild(skillsDiv);
  skillContainer.appendChild(skillContent);
  
  const handleResize = () => {
    if (window.innerWidth < 768) {
      skillContent.style.flexDirection = "column";
    } else {
      skillContent.style.flexDirection = "row";
    }
  };
  
  // Initial call and event listener for resize
  handleResize();
  window.addEventListener('resize', handleResize);
}