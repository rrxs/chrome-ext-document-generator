function getRandomInt(min:number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function calcularDV(rut: string) {
    let soma = 0;
    let multiplicador = 2;
    for (let i = rut.length - 1; i >= 0; i--) {
        soma += parseInt(rut[i]) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    let resto = 11 - (soma % 11);
    if (resto === 11) return '0';
    if (resto === 10) return 'K';
    return resto.toString();
}
export function generateRUT() {
let baseRUT = getRandomInt(1000000, 25000000).toString();

let dv = calcularDV(baseRUT);

return baseRUT + dv;
}
