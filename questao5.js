function inverterString(string) {
  let inverter = '';
  for (let i = string.length - 1; i >= 0; i--) {
    inverter += string[i];
  }
  return inverter;
}
console.log(inverterString('Grazi'));
