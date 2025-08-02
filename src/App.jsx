import Header from './components/Header'
import DownloadButtons from './components/DownloadButtons'
import './index.css'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
function App() {
  return (
    <div className="app">
      <Header />
      <DownloadButtons />
    </div>
  )
}

export default App