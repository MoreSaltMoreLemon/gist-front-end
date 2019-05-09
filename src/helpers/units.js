const units = [
  { value: 1, label: "g", gram_conversion_factor: 1 },
  { value: 2, label: "kg", gram_conversion_factor: 1000 },
  { value: 3, label: "lb", gram_conversion_factor: 453.59 },
  { value: 4, label: "oz", gram_conversion_factor: 28.35 },
  { value: 5, label: "fl oz", gram_conversion_factor: 28.35 },
  { value: 6, label: "each", gram_conversion_factor: null },
  { value: 7, label: "bunch", gram_conversion_factor: null },
  { value: 8, label: "pkg", gram_conversion_factor: null },
  { value: 9, label: "can", gram_conversion_factor: null },
  { value: 10, label: "container", gram_conversion_factor: null }
];

const convertToGrams = (unitValueId, quantity) => {
  const unit = units.find(unit => unit.value === unitValueId)
  return unit.gram_conversion_factor * quantity;
};

export default units;
export { convertToGrams };
