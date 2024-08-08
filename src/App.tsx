import {Intro} from './Components/intro'
import {Hiw} from './Components/HIW.tsx'
import {Mmodel} from './Components/mmodel.tsx'
import {RoadMap} from "./Components/roadmap.tsx"
import {ChannelBtn} from "./Components/channelBtn"
import './App.css'

function App() {
  return (
      <div className="conteiner">
        <Intro/>
          <Hiw/>
          <Mmodel/>
          <RoadMap/>
          <ChannelBtn/>
      </div>
  )
}

export default App

/*
<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
 */