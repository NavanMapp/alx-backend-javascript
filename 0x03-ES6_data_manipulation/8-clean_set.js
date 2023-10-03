export default function cleanSet(set, startString) {
    const cleanedValues = [];
    const setArray = [...set];
  
    for (const value of setArray) {
      if (value.startsWith(startString)) {
        cleanedValues.push(value.substring(startString.length));
      }
    }
    return cleanedValues.join('-');
  }
  