import { Request, Response } from "express";
import { generatePrimes } from "../utils/generatePrimes";
import { obfuscate } from "../utils/obfuscate";

export function encryptPassword(req: Request, res: Response) {
  const password = req.body.password;

  const prime = findPrime(100000);
  const secondPrime = findPrime(10000);
  
  const result = obfuscate(password*prime*secondPrime);

  res.send({ encryptPassword: result });
}

function findPrime(nthPrime: number): number {
  const generator = generatePrimes();
  for(var i=1; i< nthPrime; i ++) {
      generator.next()
  }

  return generator.next().value
}