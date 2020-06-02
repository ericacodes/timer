const args = process.argv.splice(2);

for (const element of args) {
  // Coercing a string into a number will return NaN, which is falsy
  if (Number(element) && element >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      }, element); 
  }
}

