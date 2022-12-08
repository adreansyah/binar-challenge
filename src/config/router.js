import { useRoutes } from 'react-router-dom';
import Home from 'page/home';
import RentCar from 'page/rent-resources/rent';
import Forms from 'page/create-form';
import HomeForm from 'page/home-form';


const routerSource = (props) => ([
    { index: true, path: '/', element: <HomeForm {...props} title="Home" /> },
    { index: true, path: '/start-rent-car', element: <RentCar  {...props} title="Rent Car" /> },
    { index: true, path: '/create-form', element: <Forms  {...props} title="Create Car" /> },
    { index: true, path: '/create-form/:id', element: <Forms  {...props} title="Create Car" /> },
    // { index: true, path: '/create-form-car', element: <FormsCar  {...props} title="Create Car" /> },
    // { index: true, path: '/create-form-car/:id', element: <FormsCar  {...props} title="Create Car" /> },
    { index: true, path: '/*', element: <>ERROR</> }
])

const AppRoutes = (props) => {
    const routers = routerSource(props);
    let routes = useRoutes(routers);
    return routes
}

export default AppRoutes