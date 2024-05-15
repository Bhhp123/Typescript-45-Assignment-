function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
      console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  return magicians.map((magician) => `The Great ${magician}`);
}

const magicians = ['Harry Houdini', 'David Copperfield', 'Dynamo'];
const greatMagicians = make_great([...magicians]);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);