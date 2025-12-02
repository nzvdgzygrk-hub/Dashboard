/* ----------------------------------------
   FATIH'S DASHBOARD – SCRIPT.JS
   Kategorie-Filter + Animation
-----------------------------------------*/

// Buttons & Cards auswählen
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

// Fade-in Animation (nur beim Laden)
cards.forEach((card, i) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(12px)";
  setTimeout(() => {
    card.style.transition = "0.35s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 60 * i);
});

// Filter-Funktion
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    // Aktiven Button markieren
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Karten anzeigen / verstecken
    cards.forEach(card => {
      const cat = card.dataset.category;

      if (filter === "all" || cat === filter) {
        card.style.display = "flex";
        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";
        setTimeout(() => {
          card.style.transition = "0.25s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 30);
      } else {
        card.style.transition = "0.18s ease";
        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 180);
      }
    });
  });
});
