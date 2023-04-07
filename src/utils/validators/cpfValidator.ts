export default function isValidCPF(cpf: string): boolean {
    const cpfClean = cpf.replace(/[^\d]+/g, '');

    if (cpfClean.length !== 11) {
        return false;
    }

    // Verificando se todos os dígitos são iguais
    const cpfArray = Array.from(cpfClean);
    const allEqual = cpfArray.every((digit) => digit === cpfArray[0]);
    if (allEqual) {
        return false;
    }

    // Calculando o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i += 1) {
        sum += parseInt(cpfArray[i], 10) * (10 - i);
    }
    let remainder = sum % 11;
    const firstDigit = remainder < 2 ? 0 : 11 - remainder;

    // Calculando o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i += 1) {
        sum += parseInt(cpfArray[i], 10) * (11 - i);
    }
    remainder = sum % 11;
    const secondDigit = remainder < 2 ? 0 : 11 - remainder;

    // Verificando se os dígitos verificadores estão corretos
    return parseInt(cpfArray[9], 10) === firstDigit && parseInt(cpfArray[10], 10) === secondDigit;
}
