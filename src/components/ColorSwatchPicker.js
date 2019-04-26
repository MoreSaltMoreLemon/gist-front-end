import React from 'react'

const ColorSwatchPicker = ({color}) => {
  return (
    <div 
        className='ingredient-color-swatch'
        style={{backgroundColor: this.state.color}}
        onClick={this.showColorPickerDisplay}
        onMouseEnter={this.showColorPickerDisplay}
        onMouseLeave={this.hideColorPickerDisplay}
    >
      {this.state.showColorPicker ? 
        <GithubPicker 
          name='color'
          className='ingredient-color-picker'
          color={this.state.color}
          colors={defaultColors}
          onChange={this.handleColorChange} 
        /> 
        :
        null
      }
    </div>
  )
}