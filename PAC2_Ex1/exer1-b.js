/* the constant variable `findOne` stores a function */
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  /* run the inner code below after a delay of two seconds */
  setTimeout(() => {
    /* check if the given values exist in the array of object instances. */
    const element = list.find(element => element[key] === value);
    /* ternary sentence, equal to:
         if (element) // it found the element,
           onSuccess(element);
        else // it didn't find the element,
           onError({ msg: 'ERROR: Element Not Found' });
       note `onSuccess` and `onError` are callback functions
    */
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
  }, 2000);
};

/*
   The constant variable `onSuccess` stores a function, witch prints the given
   username `name` on the console
*/
const onSuccess = ({ name }) => console.log(`user: ${name}`);
/*
   The constant variable `onError` stores a function, witch prints the given
   message `msg` on the console
*/
const onError = ({ msg }) => console.log(msg);

/* Declare users variable as const, an array of objects with two instances.
   Each instance sets two attributes: name, rol  */
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
  Call the function `findOne` with 3 arguments:
  1st argument: the array of objects to look for
  2nd argument: an object with two text named attributes
  3rd argument: an object with two const variables, perviously declared, assigned
                to an inline function
  Note the key and value already exists in the object array, so it should display
  the username
*/
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

/* print `findOne error` on the console */
console.log('findOne error');
/*
  Call the function `findOne` with 3 arguments:
  1st argument: the array of objects to look for
  2nd argument: an object with two text named attributes
  3rd argument: an object with two const variables, perviously declared, assigned
                to an inline function
  Note there is not an occurrence with the given name in the object array, so it
  should print an error message
*/
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
