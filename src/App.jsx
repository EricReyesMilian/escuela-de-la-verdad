import Header from './components/Header'
import Footer from './components/Footer'
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
      <Footer />
    </div>
  )
}

export default App