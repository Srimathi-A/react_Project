import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App(){
    return (
        <div className='App'>
            <h1>React Login or Singup Page</h1>
            <BrowserRouter>
            <Routes>
                <Route path='/'element={<Login />}/>
                <Route path='/home'element={<Home/>}/>
                <Route path='/signup'element={<Signup />}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;