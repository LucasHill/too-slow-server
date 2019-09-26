export function obfuscate(n: number) {
  const waitTill = new Date(new Date().getTime() + 1000); 
  while(waitTill > new Date()){}; // TODO: Remove

  for(let i = 1; i<= 100000000; i++) {
    if(i % 2 === 0) {
      n = n + i;
    } else if (i % 3 === 0 ) {
      n = n - 1;
    } else if (i % 5 === 0 ) {
      n = n + 2*i;
    }
  }

  return n;
}