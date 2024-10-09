function translateText() {
    const englishText = document.getElementById('englishText').value;
    const hindiText = document.getElementById('hindiText');

    // Mock translation logic
    const translations = {
        "hello": "नमस्ते",
        "how are you": "आप कैसे हैं",
        "thank you": "धन्यवाद",
        "good morning": "सुप्रभात",
        "good night": "शुभ रात्रि"
    };

    const translatedText = translations[englishText.toLowerCase()] || "Translation not available";

    hindiText.value = translatedText;
}
