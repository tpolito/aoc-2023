const parseInput = (rawInput: string) => rawInput.split('\n');

const colors = ['red', 'green', 'blue'] as const;
export const part1 = (rawInput: string) => {
  let sum = 0;
  let maxPerColor = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const parsedInput = parseInput(rawInput).forEach((line, i) => {
    const game = line.split(':')[1].split(';');
    const revealed = game.map((set) => set.split(','));
    const maxColors: { [key: string]: number } = {
      red: 0,
      green: 0,
      blue: 0,
    };
    let color = '';
    let num = 0;

    revealed.forEach((reveal) => {
      reveal.forEach((cube) => {
        colors.forEach((c) => {
          if (cube.includes(c)) {
            color = c;
            num = +cube.replace(/\D/g, '');

            maxColors[color] = Math.max(maxColors[color], num);
          }
        });
      });
    });

    if (
      maxColors.red <= maxPerColor.red &&
      maxColors.green <= maxPerColor.green &&
      maxColors.blue <= maxPerColor.blue
    ) {
      sum += i + 1;
    }
  });

  return sum;
};

export const part2 = (rawInput: string) => {
  let power = 0;
  let maxPerColor = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const parsedInput = parseInput(rawInput).forEach((line, i) => {
    const game = line.split(':')[1].split(';');
    const revealed = game.map((set) => set.split(','));
    const maxColors: { [key: string]: number } = {
      red: 0,
      green: 0,
      blue: 0,
    };
    let color = '';
    let num = 0;

    revealed.forEach((reveal) => {
      reveal.forEach((cube) => {
        colors.forEach((c) => {
          if (cube.includes(c)) {
            color = c;
            num = +cube.replace(/\D/g, '');

            maxColors[color] = Math.max(maxColors[color], num);
          }
        });
      });
    });

    power += maxColors.red * maxColors.green * maxColors.blue;
  });

  return power;
};
