import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'
import Home from './Components/Home'
import { useThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
    <div id='app' className={theme}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App