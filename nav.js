function openModal(title) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalContent").innerHTML = `
      <h2>${title}</h2>
      <p>This is the ${title} screen.</p>
      <p>Scroll works like a real app.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>More content here...</p>
    `;
    document.getElementById("appModal").classList.add("active");
}

function closeModal() {
    document.getElementById("appModal").classList.remove("active");
}