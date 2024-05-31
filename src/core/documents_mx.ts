const VALUES_MAP: any = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
    'G': 16,
    'H': 17,
    'I': 18,
    'J': 19,
    'K': 20,
    'L': 21,
    'M': 22,
    'N': 23,
    '&': 24,
    'O': 25,
    'P': 26,
    'Q': 27,
    'R': 28,
    'S': 29,
    'T': 30,
    'U': 31,
    'V': 32,
    'W': 33,
    'X': 34,
    'Y': 35,
    'Z': 36,
    ' ': 37,
    'Ñ': 38
  };
  
  const getScore = (string: string) => string.split('').reverse().reduce((sum, char, i) => {
    const index = i + 2;
    const value = VALUES_MAP[char] || 0;
    return sum + value * index;
  }, 0);
  
  function getDigit(input: string) {
    const rfc = input.length === 11 ? ` ${input}` : input;
    const score = getScore(rfc);
    const mod = (11000 - score) % 11;
    if (mod === 11) return '0';
    if (mod === 10) return 'A';
    return String(mod);
  };
  
  function getRandomLetter() {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return letters.charAt(Math.floor(Math.random() * letters.length));
  }
  
  function getRandomDate(start = new Date(1950, 0, 1), end = new Date()) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const year = date.getFullYear().toString().substring(2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}${month}${day}`;
  }
  
  function generateRandomAlphanumeric() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 2; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  export function generateRFC() {
      let rfc = '';
      for (let i = 0; i < 3; i++) {
        rfc += getRandomLetter();
      }
  
      rfc += getRandomDate() + generateRandomAlphanumeric();
    
      return rfc + getDigit(rfc);
  }
  
  export const generateRFC_PF = () => {
      let rfc = '';
      for (let i = 0; i < 4; i++) {
        rfc += getRandomLetter();
      }
  
      rfc += getRandomDate() + generateRandomAlphanumeric();
    
      return rfc + getDigit(rfc);
  }