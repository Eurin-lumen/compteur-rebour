function afficherTempsRestant() {
    const dateRentree = new Date("2023-11-01"); // Remplacez cette date par la date de rentrée souhaitée au format "YYYY-MM-DD".
    const maintenant = new Date();
    const difference = dateRentree - maintenant;

    if (difference <= 0) {
        document.getElementById('temps-restant').textContent = "La rentrée est maintenant !";
    } else {
        const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
        const heures = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.floor((difference % (1000 * 60)) / 1000);

        const tempsRestant = `${jours} jours, ${heures} heures, ${minutes} minutes et ${secondes} secondes`;
        document.getElementById('temps-restant').textContent = tempsRestant;
    }
}

// Appel initial pour afficher le temps restant au chargement de la page
afficherTempsRestant();

// Mise à jour du compte à rebours toutes les secondes
setInterval(afficherTempsRestant, 1000);
