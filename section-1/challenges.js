const { check, runTest, skipTest } = require('../test-api/index.js');

// Exercise 1
runTest('checking multiTypeArray', function () {
  const multiTypeArray = ['I am a string', 42, true, [1, 2, 3]];

  check(typeof('string')).isEqualTo(typeof multiTypeArray[0]);
  check(typeof(42)).isEqualTo(typeof multiTypeArray[1]);
  check(typeof(true)).isEqualTo(typeof multiTypeArray[2]);
  check(typeof([1,2,3])).isEqualTo(typeof multiTypeArray[3]);
});


// Exercise 2
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest('checking alphaSample', function () {
  const alphaSample = ['a', 'b', 'c'];
  alphaSample.push('d');
  alphaSample.push('g');

  check(['a', 'b', 'c', 'd', 'g']).isEqualTo(alphaSample);

  const lastItem = alphaSample.pop();
console.log(lastItem)
  check('g').isEqualTo(lastItem);
  check(['a', 'b', 'c', 'd']).isEqualTo(alphaSample);
});

// Exercise 3
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest('working with nested arrays', function () {
  const rows = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
  ];

  check(['a', 'b', 'c']).isEqualTo(rows[0]);
  check(['d', 'e', 'f']).isEqualTo(rows[1]);
  check(['g', 'h', 'i']).isEqualTo(rows[2]);

  const firstRow = rows[0];
  check(firstRow[0]).isEqualTo('a');
  check(firstRow[1]).isEqualTo('b');

  check(rows[1][1]).isEqualTo('e');
  check(rows[2][0]).isEqualTo('g');
  check(rows[0][2]).isEqualTo('c');
});

// Exercise 4
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest('check object properties', function () {
  const father = {
    firstName: 'Michael',
    lastName: 'Bluth',
    age: 33,
  };
console.log(father.firstName)
  check(father.firstName).isEqualTo(father.firstName);
  check(father.lastName).isEqualTo(father.lastName);
  check(father.firstname).isEqualTo(father.firstname);
  check(father.age).isEqualTo(father.age);
});

// Exercise 5
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest('remove object properties', function () {
  const brotherInLaw = {
    name: 'Tobias',
    lastname: 'Funke',
    job: 'therapist',
  };

  check(brotherInLaw.job).isEqualTo(brotherInLaw.job);
  delete brotherInLaw.job;
  check(brotherInLaw.job).isEqualTo(brotherInLaw.job);
});

// Exercise 6
// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest('working with nested objects', function () {
  const bluthFamily = {
    father: {
      name: 'George',
    },
    mother: {
      name: 'Lucille',
    },
    sons: [{ name: 'GOB' }, { name: 'Michael' }, { name: 'Buster' }],
    daughters: [{ name: 'Lindsay' }],
  };

  check(bluthFamily.father.name).isEqualTo(bluthFamily.father.name);
  check(bluthFamily.mother.name).isEqualTo(bluthFamily.mother.name);
  check(bluthFamily.daughters[0].name).isEqualTo('Lindsay');
});

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var FILL_ME_IN;
