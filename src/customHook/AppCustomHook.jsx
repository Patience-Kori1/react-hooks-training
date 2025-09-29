import '../App.css'
import ClickSayHello from './firstCustomHook/ClickSayHello'
import MyContact from './secondCustomHook/MyContact'

function AppCustomHook() {
  return (

    <div className="App">
        <h2>Hook personnalisé</h2>
        <ClickSayHello/>
        <MyContact/>

    </div>
  )
}

export default AppCustomHook


