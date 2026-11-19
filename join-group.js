document.addEventListener('DOMContentLoaded', () => {
  if(typeof lucide !== 'undefined') lucide.createIcons();

  const overlay = document.getElementById("overlay");
  const publicBtn = document.getElementById("publicGroupBtn");
  const privateBtn = document.getElementById("privateGroupBtn");
  const publicModal = document.getElementById("publicGroupsModal");
  const privateModal = document.getElementById("privateGroupModal");

  // Open modals
  publicBtn.addEventListener("click", () => {
    publicModal.style.display = "block";
    overlay.style.display = "block";
  });

  privateBtn.addEventListener("click", () => {
    privateModal.style.display = "block";
    overlay.style.display = "block";
  });

  // Close modals
  document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      publicModal.style.display = "none";
      privateModal.style.display = "none";
      overlay.style.display = "none";
    });
  });

  // Click outside to close
  overlay.addEventListener("click", () => {
    publicModal.style.display = "none";
    privateModal.style.display = "none";
    overlay.style.display = "none";
  });
});