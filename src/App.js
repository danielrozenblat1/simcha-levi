import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/NewNav/NavBarNew';


import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import MatchingCriteria from './components/whoFits/WhoFits';
import ForthScreen from './screens/ForthScreen';
import { useEffect, useState } from 'react';
import Students from './components/recommends/Students';
import FifthScreen from './screens/FifthScreen';
import ByMe from './components/ByMe/ByMe';
import AboutMe from './components/me/Me';
import PrivacyPolicy from './privacy/Privacy';
function App() {

  
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  <FirstScreen scrolled={scrolled}/>
 <SecondScreen/>
{/* <ThirdScreen/> */}
<MatchingCriteria/>
<Students/>
<AboutMe/>
<ForthScreen/>
<FifthScreen/>
<PrivacyPolicy 
  ownerName="שמחה לוי" 
  email="simchalevi148@gmail.com" 
  phone="+972 54-390-5534" 
  domain="https://simchallevi.co.il/" 
/>
<ByMe/>
  {/* <ImageComparisonSlider leftImage={leftImage} rightImage={rightImage} logoImage={logoImage}/> */}
  </>
}

export default App;
