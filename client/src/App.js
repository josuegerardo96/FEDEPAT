import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import { UsersContextProvider } from './context/UserContext'

function App() {
  return (
    <div> 
      
      <AuthProvider>
        <UsersContextProvider>
           <AppRouter/>
        </UsersContextProvider>
      </AuthProvider>
    
     
     
    </div>
  );
}

export default App;
