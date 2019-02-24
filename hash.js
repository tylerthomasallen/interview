const hash = require('string-hash');

class HashMap {
  constructor() {
    this.list = []
  }
  get(x) {
    let i = hash(x)

    if (!this.list[i]) {
      return undefined
    }

    let result

    this.list[i].forEach(pairs => {
      if (pairs[0] === x) {
        result = pairs[1]
      }
    })
    
    return result;
  }

  set(x, y) {
    let i = hash(x)

    if (!this.list[i]) {
      this.list[i] = []
    }

    this.list[i].push([x, y])
  }
}

let test = new HashMap();

test.set('a', 1);
console.log(test.get('a'))

console.time('with very few records');
test.get('non existent');
console.timeEnd('with very few records');

let bigTest = new HashMap();

for (x = 0; x < 10000; x++) {
  bigTest.set(`elements${x}`, x)
}

console.time('with a bigger record')
bigTest.get('non existent')
console.timeEnd('with a bigger record')