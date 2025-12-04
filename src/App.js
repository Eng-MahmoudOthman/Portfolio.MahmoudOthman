import { RouterProvider , createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Home from './Components/Home/Home.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import './App.css';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';



const routers = createHashRouter([
	{path:"/" , element:<Layout /> , children:[
		{index:true , element:<Home/>} , 
		{path:"About" , element:<About/>} , 
		{path:"Projects" , element:<Projects/>} , 
		{path:"Testimonials" , element:<Testimonials/>} , 
		{path:"ContactUs" , element:<ContactUs/>} , 
		{path:"*" , element:<NotFound />} , 
	]}
])




function App() {
	return (
		<>
			<RouterProvider router={routers} ></RouterProvider>
		</>
	);
}

export default App;
