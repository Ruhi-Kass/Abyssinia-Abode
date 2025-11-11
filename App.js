import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import PropertyListPage from './pages/PropertyListPage';
import MainPage from './pages/Main_Page';
import AccountPage from './pages/Account_Page';
import AddPropertyPage from './pages/AddProperty_page';
import HomePage from './pages/Home_Page';
import PropertyDetail from './pages/propertyDetailsPage';
import EditAccount from './components/EditAccount';
import Privacy from './pages/privacyPage';
import Terms from './pages/termsPage';
import MyProperties from './pages/MyProperties';
import EditProperty from './components/EditProperty'
import Register from './pages/Register';
import Signup from './pages/Signup';
import NotFound from './components/NotFound';
import Rooms from './pages/Rooms_page'
import AddEvent from './components/AddEvent';
import EventDetails from './pages/EventDetailsPage';
import ReservationDetails from './pages/ReservationDetails';


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<LoginPage />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/termsPage' element={<Terms />} />
                    <Route path='/notFound' element={<NotFound />} />
                    <Route element={<MainPage />}>
                        <Route path='/home' element={<HomePage />} />
                        <Route path='/properties' element={<PropertyListPage />} />
                        <Route path='/account' element={<AccountPage />} />
                        <Route path='/addProperty' element={<AddPropertyPage />} />
                        <Route path='/propertyDetails/:name' element={<PropertyDetail />} />
                        <Route path='/EventDetails/:name' element={<EventDetails />} />
                        <Route path='/ReservationDetails/:name' element={<ReservationDetails/>} />
                        <Route path='/editaccount' element={<EditAccount />} />
                        <Route path='/privacyPage' element={<Privacy />} />
                        <Route path='/myproperties' element={<MyProperties />} />
                        <Route path='/editproperty/:id' element={<EditProperty />} />
                        <Route path='/rooms' element={<Rooms />} />
                        <Route path='/addevent' element={<AddEvent />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;