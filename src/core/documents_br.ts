function calcularDV(cnpj: string, peso: number[]) {
    let soma = 0;
    for (let i = 0; i < cnpj.length; i++) {
        soma += parseInt(cnpj[i]) * peso[i % peso.length];
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}
function getRandomInt(min: number, max:number ) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateCnpj = () => {
        
        let cnpj = '';
        for (let i = 0; i < 8; i++) {
            cnpj += getRandomInt(0, 9).toString();
        }
    
        cnpj += '0001';
    
        const pesosPrimeiroDV = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const pesosSegundoDV = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
        let primeiroDV = calcularDV(cnpj, pesosPrimeiroDV);
        cnpj += primeiroDV.toString();
    
        let segundoDV = calcularDV(cnpj, pesosSegundoDV);
        cnpj += segundoDV.toString();
    
        return cnpj;
}

export function generateCPF() {
    let cpf = '';
    for (let i = 0; i < 9; i++) {
        cpf += getRandomInt(0, 9).toString();
    }

    const multiplicadoresPrimeiroDV = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const multiplicadoresSegundoDV = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    let primeiroDV = calcularDV(cpf, multiplicadoresPrimeiroDV);
    cpf += primeiroDV.toString();

    let segundoDV = calcularDV(cpf, multiplicadoresSegundoDV);
    cpf += segundoDV.toString();

    return cpf;
}
