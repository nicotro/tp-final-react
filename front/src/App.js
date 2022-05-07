import { BrowserRouter, useNavigate } from 'react-router-dom';
import './App.css';
import AddApp from './components/app-add';


const FakeBrowser = (props) => {
  const navigate = useNavigate()
  return (
    <AddApp navigate={navigate}></AddApp>
  )
}

function App() {
  return (
    <BrowserRouter>
      <FakeBrowser/>
    </BrowserRouter>
  );
}

export default App;
