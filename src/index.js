const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let splitCode = [];
    let word = '';

	splitCode.push(expr.slice(0, 10))
    for(let i = 0; i < expr.length; i++) {
        if((i + 1) % 10 === 0) {
          splitCode.push(expr.slice((i - 9), (i + 1)))
        }
    } 
   splitCode.splice(0, 1);
   	
    var morze = splitCode.map(function(numbers) {
 	numbers = numbers.replace(/00/g,'');
    numbers = numbers.replace(/10/g,'.');
    numbers = numbers.replace(/11/g,'-');
    if (numbers === '**********') {
  	    numbers = ' '
     }  
        return numbers
    })
    
    for(let j = 0; j < morze.length; j++) {
        word += (morze[j] === ' ') ? ' ' : MORSE_TABLE[morze[j]];
    }
    return word
}

module.exports = {
    decode
}