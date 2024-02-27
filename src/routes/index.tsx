import { useRoutes } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Homepageforseller from '../components/Homepageforseller';
import SellProduct from '../components/SellProduct';


const MyRoutes = () => {
  let element = useRoutes([
    {
      path: '/',
      element: (
         <Login></Login>
      ),
    }, 
    {
        path: '/signup',
        element: (
           <Signup></Signup>
        ),
    },
    {
      path: '/home',  
      element: (
        <Homepageforseller></Homepageforseller>
      ),
    },
    {
      path: '/sell product',
      element: (
        <SellProduct></SellProduct>
      ),
    },
  ]);
  return element;
};

export default MyRoutes;