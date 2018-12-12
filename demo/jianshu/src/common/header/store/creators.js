import actionTypies from './actionTypies'
const handleFocused = () => ({type:actionTypies.Focused})
const handleBlur = () => ({type:actionTypies.Blur})
export default {
  handleFocused,
  handleBlur
}