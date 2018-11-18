import  React  from 'react'
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
export default class TemperatureInput extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render(){
    return(
      <div className='TemperatureInput'>
        <fieldset>
        <legend>在{scaleNames[this.props.scale]}:中输入温度数值</legend>
        <input value={this.props.temperature}
               onChange={this.handleChange} />
      </fieldset>
      </div>
    )
  }
}