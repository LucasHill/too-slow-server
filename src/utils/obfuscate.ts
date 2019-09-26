export function obfuscate(n: number) {
  const waitTill = new Date(new Date().getTime() + 1000); 
  while(waitTill > new Date()){}; // TODO: Remove

  for(let i = 1; i<= 1000000000; i++) {
    n = n + i*2;
  }

  return n;
}