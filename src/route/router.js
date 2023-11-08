import {createBrowserRouter} from 'react-router-dom'
import Navigation from '../components/Navigation'
import Home from '../pages/Home'
import About from '../pages/About'
import Productpage from '../pages/Productpage'
import SingleProduct from '../pages/SingleProduct'
import Registration from '../pages/Registration'

export const router = createBrowserRouter([
    {
        element: <Navigation/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/products",
                element: <Productpage/>
            },
            {
                path: "/products/:id",
                element: <SingleProduct/>
            },
            {
                path: "/registration",
                element: <Registration/>
            }
        ]
    }
])