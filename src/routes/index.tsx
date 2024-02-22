import { useRoutes } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';


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
    
  ]);
  return element;
};

export default MyRoutes;