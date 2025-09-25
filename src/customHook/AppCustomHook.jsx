import '../App.css'
import ClickSayHello from './firstCustomHook/ClickSayHello'

function AppCustomHook() {
  return (

    <div className="App">
        <h2>Hook personnalisé</h2>
        <ClickSayHello/>

    </div>
  )
}

export default AppCustomHook


