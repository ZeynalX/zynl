/*
    Bu, Unreal Engine'deki 'OnClicked' (Tıklandığında)
    ve 'Branch' (Eğer) mantığının JavaScript karşılığıdır.
*/
function checkPlanet(planetId, correctAnswer) {
    
    // 1. Girdi kutusunu ve geri bildirim yazısını bul
    const inputId = 'input-' + planetId;
    const feedbackId = 'feedback-' + planetId;
    
    const inputElement = document.getElementById(inputId);
    const feedbackElement = document.getElementById(feedbackId);
    
    // 2. Kullanıcının girdiği değeri al
    const userGuess = inputElement.value;
    
    // 3. Karşılaştır (Büyük/küçük harf duyarsız)
    if (userGuess.toLowerCase() === correctAnswer.toLowerCase()) {
        // Doğruysa
        feedbackElement.textContent = 'Sen bir dahisin!';
        feedbackElement.className = 'feedback correct'; // Yeşil renk için class ekle
    } else {
        // Yanlışsa
        feedbackElement.textContent = 'Malesef tekrar denemelisin';
        feedbackElement.className = 'feedback incorrect'; // Kırmızı renk için class ekle
    }
}
