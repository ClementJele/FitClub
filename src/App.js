import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Subscription from './components/Subscription/subscription';

function App() {
  return (
    <div className="App">
       <Hero/>
       <Programs/>
       <Reasons/>
       <Subscription/>
    </div>
  );
}

export default App;
