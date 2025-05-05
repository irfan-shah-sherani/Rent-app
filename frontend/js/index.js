<script>
  const hamburger = document.getElementById("hamburger-icon");
  const sideMenu = document.getElementById("side-menu");

  hamburger.addEventListener("click", () => {
    sideMenu.style.display = sideMenu.style.display === "flex" ? "none" : "flex";
  });

  // Optional: hide menu when clicking outside (mobile only)
  document.addEventListener("click", function (event) {
    if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
      if (window.innerWidth <= 480) {
        sideMenu.style.display = "none";
      }
    }
  });
</script>
