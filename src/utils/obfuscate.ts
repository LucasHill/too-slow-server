import { Worker } from 'worker_threads';
import workerpool from 'workerpool';


export function obfuscate(n: number) {
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

const pool = workerpool.pool({
  minWorkers: 1,
  maxWorkers: 1
})

export function obfuscateWorker(n: number) {
  return pool.exec(obfuscate, [n]);
}