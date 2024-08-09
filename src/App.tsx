import {Intro} from './Components/intro'
import {Hiw} from './Components/HIW.tsx'
import {Mmodel} from './Components/mmodel.tsx'
import {RoadMap} from "./Components/roadmap.tsx"
import {ChannelBtn} from "./Components/channelBtn"
import './App.css'

function App() {
  return (
      <div className="conteiner mx-auto bg-black justify-center">
          <Intro/>
          <Hiw/>
          <Mmodel/>
          <RoadMap/>
          <ChannelBtn/>
      </div>
  )
}

export default App
