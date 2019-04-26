const defaultColors = [
  '#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e3191b'
]

const randomColor = () => defaultColors[Math.floor(Math.random() * defaultColors.length)]

export {
  defaultColors,
  randomColor
}