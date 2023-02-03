import './App.css';
import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import { Home } from './pages/Home/Home';
import {Routes, Route } from 'react-router-dom';
import { Blog } from './pages/Blogs/Blogs';
import { Properties } from './pages/Properties/Properties';
import { Explore } from './pages/Explore/Explore';
import { Careers } from './pages/Careers/Careers';
import { Contact } from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import BookPage from './pages/Book/BookPage';
import ScrollToTop from './ScrollToTop';
import { ExploreCategary } from './pages/ExploreCategary/ExploreCategary';
import { ResortsInSrilanka } from './pages/Property-types/ResortsInSrilanka';
import { VillasInSrilanka } from './pages/Property-types/VillasInSrilanka';
import { HotelsInSrilanka } from './pages/Property-types/HotelsInSrilanka';
import { BungalowInSrilanka } from './pages/Property-types/BungalowInSrilanka';
import { Destination } from './pages/Destination/Destination';

const theme = {
   colors: {
    whiteColor : '#ffffff',
    primaryColor: '#051036',
    bodyTextColor: '#7B8496',
    primaryVarient: '#3554D1', 
    lightdarkColor: '#616D7E',
    darkWhiteColor: '#F2F2F0',
    formTextColor: "#211d41",
    trnsparentVarient: '#0105ff99',
    bodyHeading: "#23304b",
    bodyPrimaryColor: "#E5E5E5",
    PrimaryLiteColor: "#F5F5F5",
    
   },
  largeTab: '1200px',
  tab:'770px',
  mobile:'600px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    
      <div className="App">
      <GlobalStyle />
      <Navbar />

    <ScrollToTop>
      <Routes>
        <Route exact path='hotel-booking'  element={<Home />}> </Route>
        <Route path='property' element={<Properties />}></Route>
        <Route path='explore' element={<Explore />}> </Route>
        <Route path='explore/destination' element={<Destination />}> </Route>
        <Route path='explore-categary' element={<ExploreCategary />}> </Route>
        <Route path='careers' element={<Careers />}> </Route>
        <Route path='blog' element={<Blog />}> </Route>
        <Route path='contact' element={<Contact />}> </Route>
        <Route path='login' element={<Login />}> </Route>
        <Route path='register' element={<Register />}> </Route>
        <Route path='hotelbook' element={<BookPage />}> </Route>
        <Route path='property-type/hotels-in-sri-lanka' element={<HotelsInSrilanka />}> </Route>
        <Route path='property-type/resorts-in-sri-lanka' element={<ResortsInSrilanka />}> </Route>
        <Route path='property-type/villas-in-sri-lanka' element={<VillasInSrilanka />}> </Route>
        <Route path='property-type/bungalow-in-sri-lanka' element={<BungalowInSrilanka />}> </Route>
      </Routes>
      </ScrollToTop>
      <Footer />

    </div>
    
    </ThemeProvider>
  );
}

export default App;