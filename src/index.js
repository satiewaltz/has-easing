// @flow

/**
 * This function checks if an input is a valid transition timing function.
 * @param easing String to check if it's a valid timing function.
 * @returns Boolean of whether the timing function is valid.
 */

const hasEasing = (easing: string): boolean => {
  const regexBezier = /cubic-bezier\((\s?-?(((0|1)?\.\d+)|(0|1))\s?,){3}(\s?-?(((0|1)?\.\d+)|(0|1))\s?)\)/;
  const regexSteps = /(steps\(\s?\d+\s?(,\s?(\d+|(start)|(end))\s?)?\))|(step-(start|end))/;
  const regexFrames = /frames\(\s?([1-9]([0-9]+)?)\s?\)/;

  if (easing && easing.match(regexBezier)) return true;
  if (easing && easing.match(regexFrames)) return true;
  if (easing && easing.match(regexSteps)) return true;

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
