import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signin from './components/Signin';
import Document from './components/Document';
function App() {
return(
  <Router>
    <Routes>
      <Route path="/" element={<Signin />}/>
      <Route path="/document" element= {<Document/>}/>
    </Routes>
  </Router>
)
 
}

export default App
