import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import { UsersContextProvider } from './context/UserContext'
import {ToastContainer} from "react-toastify"

function App() {



  
  return (
    <div> 
      
      <AuthProvider>
        <UsersContextProvider>
           <AppRouter/>
        </UsersContextProvider>
      </AuthProvider>
    
    <ToastContainer/>
     
    </div>
  );
}

export default App;
