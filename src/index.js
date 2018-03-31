// @flow

/**
 * This function checks if an input is a valid transition timing function.
 * @param easing String to check if it's a valid timing function.
 * @param strict Boolean if true throws errors on invalid input.
 * @returns The timing function passed in.
 */

const hasEasing = (easing: string): boolean => {
  const regex = /cubic-bezier\((\s?-?(((0|1)?\.\d+)|(0|1))\s?,){3}(\s?-?(((0|1)?\.\d+)|(0|1))\s?)\)/;
  if (easing && easing.match(regex)) return true;

  switch (easing) {
    case 'linear':
    case 'ease':
    case 'ease-in':
    case 'ease-out':
    case 'ease-in-out':
      return true;
  }

  return false;
};

export default hasEasing;
