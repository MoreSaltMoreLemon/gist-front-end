const units = [
  { value: 1, label: "g", gram_conversion_factor: 1 },
  { value: 2, label: "kg", gram_conversion_factor: 1000 },
  { value: 3, label: "lb", gram_conversion_factor: 453.59 },
  { value: 4, label: "oz", gram_conversion_factor: 28.35 },
  { value: 5, label: "fl oz", gram_conversion_factor: 28.35 },
  { value: 6, label: "each", gram_conversion_factor: 1 },
  { value: 7, label: "bunch", gram_conversion_factor: 1 },
  { value: 8, label: "pkg", gram_conversion_factor: 1 },
  { value: 9, label: "can", gram_conversion_factor: 1 },
  { value: 10, label: "container", gram_conversion_factor: 1 }
];

const convertToGrams = (unitValueId, quantity) => {
  // debugger
  const unit = units.find(unit => unit.value === unitValueId)
  return unit.gram_conversion_factor * quantity;
};

const convertGramsToUnitById = (unitValueId, quantity) => {
  // debugger
  const unit = units.find(unit => unit.value === unitValueId)
  return quantity / unit.gram_conversion_factor;
}

export default units;
export { convertToGrams, convertGramsToUnitById };
