import {useContext} from 'react'

// context
import {ButtonContext} from '../context/ButtonContext'

const ButtonList = ({props}) => {
	const {buttons} = useContext(ButtonContext)
	return(
		<div className="button-list">
				{buttons.map((button, index) => {
					// buttons array
					const clear = (index == 0 && <button onClick={props.clear} key={index}>{button}</button>)
					const del = (index == 1 && <button onClick={props.del} key={index}>{button}</button>)
					const handleClick = (index != 0 && index != 1  && index != 17 && <button onClick={props.handleClick} name={button} key={index}>{button}</button>)
					const calculate = (index == 17 && <button onClick={props.calculate} key={index}>{button}</button>)

					const buttonsArr = [clear, del, handleClick, calculate]
					return buttonsArr
				})}
		</div>
	)
}

export default ButtonList