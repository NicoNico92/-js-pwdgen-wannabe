alert('Ciao!')

var name = prompt('Qual è il tuo nome?');
console.log(name);
var surname = prompt('Ora inserisci il tuo cognome');
console.log(surname);
var color = prompt('Infine scrivi il tuo colore preferito');
console.log(color);

document.getElementById('password-generata').innerHTML = name + surname + color + '19';
document.getElementById('password-generata').setAttribute('class','visibile');
