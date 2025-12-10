import { RouterProvider , createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Home from './Components/Home/Home.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import './App.css';
import Projects from './Components/Projects/Projects.jsx';



const routers = createHashRouter([
	{path:"/" , element:<Layout /> , children:[
		{index:true , element:<Home/>} , 
		{path:"Projects" , element:<Projects/>} , 
		{path:"Contact" , element:<ContactUs/>} , 
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
