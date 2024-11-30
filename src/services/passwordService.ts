
export default function generatePass() {
  let pass: string = '';
  let characters: string = 'Aa@$%28323HjhnN0pP/)!#';
  let passLength:number = 12;
  for(let i=0; i < passLength; i++) {
    pass += characters.charAt(Math.floor(Math.random()*characters.length));
  }

  return pass;
}
