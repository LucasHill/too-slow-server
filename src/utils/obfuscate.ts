import { Worker } from 'worker_threads';
import workerpool from 'workerpool';


export function obfuscate(n: number) {
  return n + 3166666766666663;
}

const pool = workerpool.pool({
  minWorkers: 1,
  maxWorkers: 1
})

export function obfuscateWorker(n: number) {
  return pool.exec(obfuscate, [n]);
}