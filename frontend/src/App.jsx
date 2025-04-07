import AppRoute from './routes/AppRoute'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StudentContextProvider from './Context/StudentContextProvider'

function App() {

 
  return (
    // wrap whole app in Context provider
    <StudentContextProvider>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} /> 
        <AppRoute/>
      </BrowserRouter>
    </StudentContextProvider>
  )
}

export default App
