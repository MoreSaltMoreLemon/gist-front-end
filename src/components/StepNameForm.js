
import React, { Component } from 'react';
import { GithubPicker } from 'react-color'
import { defaultColors, randomColor } from '../helpers/colors'


const blankStep = {
  color: randomColor(), 
  name: '',
}

class StepNameForm extends Component {
  constructor(props) {
    super(props)
    
    let step = props.step || blankStep

    this.state = {
      showColorPicker: false,
      color: step.color,
      name: step.name,
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  
  handleColorChange = e => {
    console.log(e.hsl)
    this.setState({ color: e.hex, showColorPicker: false })
  }
  
  showColorPickerDisplay = () => this.setState({ showColorPicker: true })
  hideColorPickerDisplay = () => this.setState({ showColorPicker: false })

  handleSubmit = e => {
    e.preventDefault()
    console.log("SUBMIT INGREDIENT STATE", this.state)
  }

  render() {
    return (
      <form 
        className='step-name-container form'
        onSubmit={this.handleSubmit}>
        <div className='step-properties'>
          <input 
            name='name' 
            type="text" 
            className='step-name'
            placeholder='Step Name'
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
        </div>
        <div 
            className='step-color-swatch'
            style={{backgroundColor: this.state.color}}
            onClick={this.showColorPickerDisplay}
            onMouseEnter={this.showColorPickerDisplay}
            onMouseLeave={this.hideColorPickerDisplay}
        >
          {this.state.showColorPicker ? 
            <GithubPicker 
              name='color'
              className='step-color-picker'
              color={this.state.color}
              colors={defaultColors}
              onChange={this.handleColorChange} 
            /> 
            :
            null
          }
        </div>
      </form>
    )
  }
};

export default StepNameForm;