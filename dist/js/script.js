function setActiveSection() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#nav-menu a");

  let current = "self_reminder"; // default aktif saat load

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    const diamond = link.querySelector("div > div");

    // reset semua diamond ke warna tidak aktif
    diamond.classList.remove("bg-blue-300");
    diamond.classList.add("bg-blue-300/20");

    // ubah warna diamond yang aktif
    if (link.getAttribute("href") === `#${current}`) {
      diamond.classList.add("bg-blue-300");
      diamond.classList.remove("bg-blue-300/20");
    }
  });
}

window.addEventListener("scroll", setActiveSection);
window.addEventListener("load", setActiveSection);
