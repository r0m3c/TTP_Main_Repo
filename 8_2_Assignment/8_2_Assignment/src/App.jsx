import './App.css'
import TeamProvider from './TeamProvider'
import TeamSelection from './TeamSelection'
import TeamData from './TeamData'

function App() {

  return (
    <>
      <TeamProvider>
        <TeamSelection />
        <TeamData />
      </TeamProvider>
    </>
  )
}

export default App
