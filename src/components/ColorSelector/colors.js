const colors = {
  'BOLD-BLUE': 'rgb(84, 132, 237)',
  'BLUE': 'rgb(164, 189, 252)',
  'TURQUOISE': 'rgb(70, 214, 219)',
  'GREEN': 'rgb(122, 231, 191)',
  'BOLD-GREEN': 'rgb(81, 183, 73)',
  'YELLOW': 'rgb(251, 215, 91)',
  'ORANGE': 'rgb(255, 184, 120)',
  'RED': 'rgb(255, 136, 124)',
  'BOLD-RED': 'rgb(220, 33, 39)',
  'PURPLE': 'rgb(219, 173, 255)',
  'GRAY': 'rgb(225, 225, 225)'
}

export const colorKeys = Object.keys(colors);

function* colorMaker(index = 0) {
  while (true) {
    yield colors[colorKeys[index++]];
  }
}

export const genNextColor = colorMaker();

export default colors;
