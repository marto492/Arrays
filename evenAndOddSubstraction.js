function evenAndOddSubstract(numbers) {
  let sum = 0;
  for (let num of numbers) {
    if (num % 2 == 0) {
      sum += Number(num);
    } else {
      sum -= Number(num);
    }
  }

  console.log(sum);
}
evenAndOddSubstract([1, 2, 3, 4, 5, 6]);
evenAndOddSubstract([3, 5, 7, 9]);
