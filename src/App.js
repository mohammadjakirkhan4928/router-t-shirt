
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Component/Home/Home';
import Order from './Component/Order/Order';
import Grandpa from './Component/Grandpa/Grandpa';

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:() => fetch('tshirt.json'),
          element:<Home></Home>
        },
        {
          path:'/order',
          element:<Order></Order>
        },
        {
          path:'/grandpa',
          element:<Grandpa></Grandpa>
        }
      ]
    }
  ])
  return (
    <div className="App">
         <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
