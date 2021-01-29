import {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState[0];
  const [bottles, setBottles] = useState[0];
  const [time, setTime] = useState[0];
  const [gender, setGender] = useState[0];

  

  function calculate(e) {
    e.preventDefault();
    const litres = (bottles * 0.33);
    const grams = (litres * 8 * 4.5);
    const burning = (weight / 10);
    const gramsleft = (grams - (burning * time));

    const result = (grams / (weight * 0.7));
    setLevel(result);
  }

  return (
 <div style={{padding: 30}}>
   <h3>Calculating blood alcohol level</h3>
   <form onSumbit={calculate}>
     <div>
       <output>Weight</output>
       <label></label>
       <output></output>
       <label></label>
       <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
     </div>
     <div>
       <output>Bottles</output>
       <label></label>
       <output></output>
       <label></label>
       <input type="number" value={bottles} onChange={e => setBottles(e.target.value)}></input>
       </div>
       <div>
       <output>Time</output>
       <label></label>
       <output></output>
       <label></label>
       <input type="number" value={time} onChange={e => setTime(e.target.value)}></input>
       </div>
       <div>
       <output>Gender</output>
       <label></label>
       <output></output>
       <label></label>
       <input type="checkbox" value={gender} onChange={e => setGender(e.target.value)}></input>Male
       <input type="checkbox" value={gender} onChange={e => setGender(e.target.value)}></input>Female
       </div>
       <div>
       <label>Level</label>
       <output>{level}</output>
       </div>
     <button>Calculate</button>
   </form>
 </div>
  );
}
export default App;
