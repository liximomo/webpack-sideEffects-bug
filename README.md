## Problem
webpack bundled the wrong module when enable sideEffects at `components/*`


## Expection
The out bundle should include `src/index` and `components/A/index.js`.

## What actually happened
The out bundle have `src/index` and `components/A/A.js` in it.

## Reproduction
1. `yarn`
2. `yarn build`
3. Check `dist/main.js`


