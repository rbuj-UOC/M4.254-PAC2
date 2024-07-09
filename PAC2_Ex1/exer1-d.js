const resolveAfter2Seconds = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    /* run the inner code below after a delay of two seconds */
    setTimeout(() => {
      /* check if the given values exist in the array of object instances. */
      const element = list.find((element) => element[key] === value);
      /* ternary sentence, equal to:
          if (element) // it found it, resolve the promise returning the element
            resolve(element);
          else // it didn't find it, rejects the promise setting the rejection reason
            reject(new Error('ERROR: Element Not Found'));
      */
      element ? resolve(element['name']) : reject(new Error('ERROR: Element Not Found'));
    }, 2000);
  });
};

const findOne = async (list, { key, value }) => {
  try {
    /* wait until the promise is done */
    const name = await resolveAfter2Seconds(list, { key, value });
    /* write the user name on the console */
    console.log(`user: ${name}`);
  } catch (error) {
    /* write the error message when it caught an error, ie the item doesn't exist */
    console.log(error.message);
  }
};

/* Declare users variable as const, an array of two object instances.
   Each instance has the same attributes: name, rol  */
const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];

/* print `findOne success` on the console */
console.log('findOne success');
/*
  Run the async functions in parallel. The first promise won't fail because
  the item exists in the array. In contrast, the second promise will fail
  because the item doesn't exits.
*/
Promise.all([findOne(users, { key: 'name', value: 'Carlos' }), findOne(users, { key: 'name', value: 'Fermin' })]);

/* print `findOne error` on the console */
console.log('findOne error');

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
