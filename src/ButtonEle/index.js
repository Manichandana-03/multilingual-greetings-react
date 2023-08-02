import './index.css'

const ButtonEle = props => {
  const {details, isActive, onButtonClick} = props
  const {id, buttonText} = details

  const onTabClick = () => {
    onButtonClick(id)
  }

  const className = isActive ? 'fill-red' : 'no-fill'

  return (
    <li className="li-ele">
      <button
        type="button"
        onClick={() => onTabClick(id)}
        className={className}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonEle
