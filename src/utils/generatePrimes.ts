interface PrimeHash {
  [key: number]: [number];
}

export function* generatePrimes(): IterableIterator<number> {
  const markedNotPrime: PrimeHash = {};
  let valueToCheck = 2;
  while(true) {
      if (!(valueToCheck in markedNotPrime)) {
          yield valueToCheck
          markedNotPrime[valueToCheck**2] = [valueToCheck]
      } else {
          let primes = markedNotPrime[valueToCheck];
          primes.forEach(prime=> {
              let nextMultipleOfPrime = prime + valueToCheck;
              if (nextMultipleOfPrime in markedNotPrime) {
                  markedNotPrime[nextMultipleOfPrime].push(prime);
              } else {
                  markedNotPrime[nextMultipleOfPrime] = [prime];
              }
          })
          delete markedNotPrime[valueToCheck];
      }
      valueToCheck += 1
  }
}