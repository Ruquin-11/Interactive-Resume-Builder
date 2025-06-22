document.getElementById("name").addEventListener("input", () => {
  document.getElementById("preview-name").textContent = document.getElementById("name").value || "Your Name";
});
document.getElementById("email").addEventListener("input", () => {
  document.getElementById("preview-email").textContent = document.getElementById("email").value;
});
document.getElementById("phone").addEventListener("input", () => {
  document.getElementById("preview-phone").textContent = document.getElementById("phone").value;
});
document.getElementById("summary").addEventListener("input", () => {
  document.getElementById("preview-summary").textContent = document.getElementById("summary").value;
});
function addEducation() {
  const container = document.getElementById("education-container");
  const input = document.createElement("input");
  input.placeholder = "e.g., BTech - CSE, SVCE College, 2025";
  input.oninput = updateEducation;
  container.appendChild(input);
  updateProgressBar();
}
function updateEducation() {
  const container = document.getElementById("education-container");
  const preview = document.getElementById("preview-education");
  preview.innerHTML = "";
  Array.from(container.children).forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.textContent = input.value;
      preview.appendChild(li);
    }
  });
}
function addExperience() {
  const container = document.getElementById("experience-container");
  const input = document.createElement("input");
  input.placeholder = "e.g., Intern at XYZ Company - 2024";
  input.oninput = updateExperience;
  container.appendChild(input);
  updateProgressBar();
}
function updateExperience() {
  const container = document.getElementById("experience-container");
  const preview = document.getElementById("preview-experience");
  preview.innerHTML = "";
  Array.from(container.children).forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.textContent = input.value;
      preview.appendChild(li);
    }
  });
}
function updateSkills() {
  const checkboxes = document.querySelectorAll(".skills input[type=checkbox]");
  const selected = [];
  checkboxes.forEach(box => {
    if (box.checked) selected.push(box.value);
  });
  document.getElementById("preview-skills").textContent = selected.join(", ");
  updateProgressBar();
}
function clearForm() {
  document.getElementById("resume-form").reset();
  document.getElementById("education-container").innerHTML = "";
  document.getElementById("experience-container").innerHTML = "";
  document.getElementById("preview-name").textContent = "Your Name";
  document.getElementById("preview-email").textContent = "";
  document.getElementById("preview-phone").textContent = "";
  document.getElementById("preview-summary").textContent = "";
  document.getElementById("preview-education").innerHTML = "";
  document.getElementById("preview-experience").innerHTML = "";
  document.getElementById("preview-skills").textContent = "";
  updateProgressBar();
}
function updateProgressBar() {
  let filled = 0;
  const total = 5;
  if (document.getElementById("name").value.trim()) filled++;
  if (document.getElementById("email").value.trim()) filled++;
  if (document.getElementById("phone").value.trim()) filled++;
  if (document.getElementById("summary").value.trim()) filled++;
  if (document.querySelectorAll(".skills input:checked").length > 0) filled++;
  const percent = (filled / total) * 100;
  document.getElementById("progress-bar").style.width = `${percent}%`;
}