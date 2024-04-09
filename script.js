let numeroCasuale = Math.floor(Math.random() * 100) + 1;

function verificaNumero() {
    let tentativo = parseInt(document.getElementById('userGuess').value);
    let feedback = document.getElementById('feedback');
    
    if (!tentativo) {
        feedback.textContent = 'Per favore, inserisci un numero valido.';
        feedback.style.color = '#d32f2f'; // Rosso per errore
        return;
    }
    if (tentativo === numeroCasuale) {
        feedback.textContent = 'Complimenti! Hai indovinato il numero.';
        feedback.style.color = '#388e3c'; // Verde per successo
        setTimeout(function() {
            window.location.reload(); // Ricarica la pagina per un nuovo gioco
        }, 4000); // Attesa di 4 secondi prima di ricaricare
    } else {
        let messaggio = tentativo < numeroCasuale ? 'Più alto. Prova ancora!' : 'Più basso. Prova ancora!';
        feedback.textContent = messaggio;
        feedback.style.color = '#ffa000'; // Arancione per feedback
    }
}

function mostraPopup() {
    document.getElementById('popup').style.display = 'flex';
}
