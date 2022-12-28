const even = () => {
  let result = [];

  for (let i = 2; i <= 50; i += 2) {
    result.push(i);
  }
  return console.log(result);
};

even();
