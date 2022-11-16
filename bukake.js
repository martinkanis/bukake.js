console.log(null);
console.log(!null);
console.log(!!null);
console.log('**********');
console.log(undefined);
console.log(!undefined);
console.log(!!undefined);
console.log('**********');
console.log('');
console.log(!'');
console.log(!!'');
console.log('**********');
console.log(0);
console.log(!0);
console.log(!!0);
console.log('**********');
console.log(5);
console.log(!5);
console.log(!!5);
console.log('**********');
console.log([]);
console.log(![]);
console.log(!![]);
console.log('**********');
console.log([1, 2, 3, 4, 5, 6]);
console.log(![1, 2, 3, 4, 5, 6]);
console.log(!![1, 2, 3, 4, 5, 6]);
console.log('**********');
console.log([0, 1, 2, 3, 4, 5, 6, '', null, undefined]
  .filter(num => num)
);
console.log([0, 1, 2, 3, 4, 5, 6, '', null, undefined]
  .filter(num => !num)
);
console.log([0, 1, 2, 3, 4, 5, 6, '', null, undefined]
  .filter(num => !!num)
);
console.log('**********');
