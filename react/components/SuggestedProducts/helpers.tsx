import { CustomProperty, FinalArray } from "./types";

const createFinalArrayStructure = (values: string[]): FinalArray[] => {
  const finalArray: FinalArray[] = [];
  values.forEach((val) => {
    finalArray.push({
      principal: val,
      sugerido1: '',
      sugerido2: '',
      sugerido3: ''
    });
  });
  return finalArray;
}

const updateFinalArrayValues = (transformedArray: FinalArray[], values: string[], index: number): void => {
  values.forEach((val, idx) => {
    switch (index) {
      case 0:
        transformedArray[idx].principal = val;
        break;
      case 1:
        transformedArray[idx].sugerido1 = val;
        break;
      case 2:
        transformedArray[idx].sugerido2 = val;
        break;
      case 3:
        transformedArray[idx].sugerido3 = val;
        break;
      default:
        break;
    }
  })
}

export const finalArray = (originalArray: CustomProperty[]): FinalArray[] => {
  const transformedArray: FinalArray[] = [];
  for (let i = 0; i < originalArray.length; i++) {
    const values = originalArray[i].values[0].split(',');
    if (i === 0) {
      const newArrayStructure = createFinalArrayStructure(values);
      transformedArray.push(...newArrayStructure);
    }
    updateFinalArrayValues(transformedArray, values, i);
  }
  return transformedArray;
}