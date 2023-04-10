
// Pages : 
import Layout from './Components/Layout/Layout.jsx';
import Accueil from './Pages/Accueil.jsx' ;
import Description from './Pages/Description.jsx';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Accueil/>}/>
        <Route path='Description' element={<Description/>}/>
      </Route >
      
));

function App() {
  return (
    <div className=''>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;



 