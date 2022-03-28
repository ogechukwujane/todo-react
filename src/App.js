import './App.css';
import Header from './pages/Header';
import Login from './pages/Login';
import TodoHeader from './pages/TodoHeader';
import {Toaster} from 'react-hot-toast'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TodoContent from './pages/TodoContent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      {/* <TodoHeader /> */}
      <Toaster />
      

      
      {/* <Login /> */}
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/todo" element={<TodoHeader /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
