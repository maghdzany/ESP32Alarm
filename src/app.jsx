import { ToggleButton } from './ToggleButton';
import Waktu from './Waktu';
import Navbar from './components/Navbar';
import TestPage from './components/TestPage';
import NavMenu from './components/Navmenu';
import TimeCard from './components/Time';
import Alarm from './components/Alarm';
import Tes from './components/Tes';
import AddNew from './components/AddNew';
import Home from './pages/Home';
import Greeting from './components/Greeting';
import TimeSetting from './components/TimeSetting';

function App() {
  return (
    <>
    <Navbar/>
    <Greeting/>
    {/* <TimeSetting/> */}
    <Home/>
    {/* <Alarm/>
    <AddNew/> */}
    {/* <Tes/> */}
    {/* <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl font-bold my-6">ESP32 LED Control with Time</h1>
      
      <Waktu />
      <ToggleButton />
    </div> */}
    {/* <TestPage/>
    <NavMenu/> */}
    </>
  );
}
export default App;