const parseInput = (rawInput: string) => rawInput.split('\n');

export const part1 = (rawInput: string) => {
  const parsedInput = parseInput(rawInput).map((line) => {
    const nums = line.replace(/\D/g, '');
    const num1 = nums[0];
    if (nums.length === 1) return Number(num1 + num1);
    const num2 = nums.at(-1);

    return Number(num1 + num2);
  });

  return parsedInput.reduce((a, b) => a + b, 0);
};

export const part2 = (rawInput: string) => {
  const forwardMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const backwardMap = {
    eno: 1,
    owt: 2,
    eerht: 3,
    ruof: 4,
    evif: 5,
    xis: 6,
    neves: 7,
    thgie: 8,
    enin: 9,
  };

  const parsedInput = parseInput(rawInput).map((line) => {
    const forwardMatch = line
      .replace(
        new RegExp(Object.keys(forwardMap).join('|'), 'g'),
        (matched) => forwardMap[matched]
      )
      .replace(/\D/g, '');
    const num1 = forwardMatch[0];
    const backwardsMatch = line
      .split('')
      .reverse()
      .join('')
      .replace(
        new RegExp(Object.keys(backwardMap).join('|'), 'g'),
        (matched) => backwardMap[matched]
      )
      .replace(/\D/g, '');
    const num2 = backwardsMatch[0];

    return Number(num1 + num2);
  });

  return parsedInput.reduce((a, b) => a + b, 0);
};
