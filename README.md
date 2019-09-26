# Too Slow Server

## About
Bill was asked to step out of his comfort zone and write a new JavaScript microservice. He's heard bad things about JavaScript, but the syntax looks familiar enough. People say that Node.js web services are non-blocking and can handle many concurrent connections allowing for high throughput. 

Bill's microservice only needs to encrypt passwords. Bill is very wary of 3rd party software, so he decides to implement his own encryption algorithm.

When the service gets deployed, the team notices it has very low throughput, and gets many timed out requests. What's going on? Node.js is supposed to handle many concurrent connections? There must be something wrong with JavaScript. Or could it be something else?


## Requirements
1. Node.js ([NVM](https://github.com/nvm-sh/nvm#installation-and-update) recommended) version 10.
2. wrk:  `brew install wrk`.
   
## Setup
1. Clone repo, and cd into root of project.
2. Run `yarn` or `npm install` .
3. For development run `yarn watch` and `yarn serve`.

## Testing
1. Run `yarn test` to run jest tests.
2. Tests can be added in the test folder.

## Benchmark
1. Run `yarn benchmark`.

## Other
1. See `sample.curl.txt` to see and example usage of this service.