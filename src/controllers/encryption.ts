import { Request, Response } from "express";
import { generatePrimes } from "../utils/generatePrimes";
import { obfuscateWorker } from "../utils/obfuscate";

export async function encryptPassword(req: Request, res: Response) {
  const password = req.body.password;

  const prime = 1299709;
  const secondPrime = 104729;
  
  const worker = obfuscateWorker(password*prime*secondPrime);

  const result = await worker;
  res.send({ encryptedPassword: result });
}

function findPrime(nthPrime: number): number {
  const generator = generatePrimes();
  for(var i=1; i< nthPrime; i ++) {
      generator.next()
  }

  return generator.next().value
}