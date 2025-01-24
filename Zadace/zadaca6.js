document.getElementById('provjera-btn').addEventListener('click', function() {
    // Prompt za unos broja
    let broj = prompt("Unesite broj:");
    
    // Provjera unosa
    if (broj > 10) {
      alert("Broj je veći od 10.");
    } else {
      alert("Broj nije veći od 10.");
    }
  });