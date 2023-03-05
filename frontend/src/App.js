import{BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import {ToastContainer} from 'react-toastify'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import CreateClub from './pages/CreateClub'

function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element = {<Dashboard/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/register' element = {<Register/>}></Route>
        <Route path='/createClub' element = {<CreateClub/>}></Route>
      
      </Routes>
      <ToastContainer />
    </div>
    </Router>
    
    </>
  );
}

export default App;
