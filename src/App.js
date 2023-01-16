import {useEffect, useState, useCallback} from 'react'

// components
import ButtonList from './components/ButtonList'

// contexts
import ButtonContextProvider from './context/ButtonContext'

function App() {
  const [result, setResult] = useState('')

  // useEffect
  useEffect(() => {
    const localData = window.localStorage.getItem('Result')
    if(localData !== null ) setResult(JSON.parse(localData))
  }, [])

  useEffect(() => {
      window.localStorage.setItem('Result', JSON.stringify(result))
  }, [result])

  // actions
  const handleClick = useCallback((e) => {
    setResult(result.concat(e.target.name))
  }, [result]) 

  const clear = useCallback(() => {
    setResult('')
  }, [result])

  const del = useCallback(() => {
    setResult(result.slice(0, -1))
  }, [result])

  const calculate = useCallback(() => {
    try{
      setResult(eval(result).toString())
    } catch(err){
      setResult("Invalid")
    }
  }, [result])
      
  return (
    <div className="calculator-wrap">
      <ButtonContextProvider>
        <div className="output">
          <input type="text" defaultValue={result}   />
        </div>
        <ButtonList props={{handleClick,clear,del,calculate}} />
      </ButtonContextProvider>
    </div>
  );
}

export default App;
