function getRandomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.charAt(Math.floor(Math.random() * letters.length));
}

function getRandomDigit() {
    return Math.floor(Math.random() * 10).toString();
}

export function generateRFC() {
    // Função para gerar letras aleatórias
    // Gerar as 3 letras iniciais
    let rfc = '';
    for (let i = 0; i < 3; i++) {
        rfc += getRandomLetter();
    }

    // Gerar a data de registro no formato YYMMDD
    let year = ('0' + getRandomDigit() + getRandomDigit()).slice(-2);
    let month = ('0' + (Math.floor(Math.random() * 12) + 1)).slice(-2);
    let day = ('0' + (Math.floor(Math.random() * 28) + 1)).slice(-2); // Limita a 28 dias para simplicidade
    rfc += year + month + day;

    // Gerar a homoclave (3 caracteres)
    for (let i = 0; i < 3; i++) {
        if (Math.random() < 0.5) {
            rfc += getRandomLetter();
        } else {
            rfc += getRandomDigit();
        }
    }

    return rfc;
}