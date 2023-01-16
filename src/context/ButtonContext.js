import {createContext, useState, useReducer} from 'react'

export const ButtonContext = createContext()

const ButtonContextProvider = (props) => {
	const [buttons, setButtons] = useState([
		'AC','DEL','/','1','2','3','*','4','5','6','+','7','8','9','-','.','0','='
	])
	return(
		<ButtonContext.Provider value={{buttons}}>
			{props.children}
		</ButtonContext.Provider>	
	)
}

export default ButtonContextProvider