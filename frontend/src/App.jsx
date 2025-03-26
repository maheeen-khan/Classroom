import AppRoute from './routes/AppRoute'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {

 
  return (
    
    <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} /> 
      <AppRoute/>
    </BrowserRouter>
  )
}

export default App
