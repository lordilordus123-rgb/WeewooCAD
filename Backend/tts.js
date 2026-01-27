document.getElementById('speak-btn').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    if (text !== '') {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE'; // Sprache auf Deutsch setzen
        speechSynthesis.speak(utterance);
    } else {
        const utterance = new SpeechSynthesisUtterance('Bitte gib einen Text ein');
        utterance.lang = 'de-DE'; // Sprache auf Deutsch setzen
        speechSynthesis.speak(utterance);
    }
});
