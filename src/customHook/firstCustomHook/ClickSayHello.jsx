import {useState, useEffect} from 'react'
import useUpdateDocTitle from './CustomHook';

function ClickSayHello() {

    const [text, setText]= useState('');
    const [isTrue, setIsTrue] = useState(true);

    useEffect(() => {

      if(isTrue) {
        setText("Bonjour")
      } else {
        setText("Bonsoir")
      }

    }, [isTrue]

    )

    // Custom Hook
    useUpdateDocTitle(text)
    console.log(isTrue)
    
  return (
    <button onClick={() => setIsTrue(!isTrue)}> Cliquez </button>
  )
}

export default ClickSayHello
