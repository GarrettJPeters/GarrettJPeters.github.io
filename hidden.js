
const keySequence = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];
const keySequence2 = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'a',
  'b',
];
let userInput = new Array( keySequence.length );
window.addEventListener( 'keydown', ( { key } ) => {
userInput = [ ...userInput.slice( 1 ), key ];

if ( keySequence.every( ( v, k ) => v === userInput[ k ] ) ) {
  document.getElementById("hiddengame").className = "show"
}
if ( keySequence2.every( ( v, k ) => v === userInput[ k ] ) ) {
  document.getElementById("hiddengame2").className = "show"
}
} );
