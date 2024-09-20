import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // States for different metrics inputs
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [age, setAge] = useState('');
  const [calories, setCalories] = useState('');
  const [restingHeartRate, setRestingHeartRate] = useState('');
  const [maxHeartRate, setMaxHeartRate] = useState('');

  const [results, setResults] = useState([]);

  // Functions to calculate the different metrics
  const calculateBMI = () => {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    return `BMI: ${bmi}`;
  };

  const calculateWHR = () => {
    const whr = (waist / hip).toFixed(2);
    return `Waist-to-Hip Ratio (WHR): ${whr}`;
  };

  const calculateIBW = () => {
    // A basic formula for Ideal Body Weight (in kg) could be:
    const ibw = (height - 100) - ((height - 150) / 4);
    return `Ideal Body Weight (IBW): ${ibw.toFixed(2)} kg`;
  };

  const calculateHRR = () => {
    const hrr = maxHeartRate - restingHeartRate;
    return `Heart Rate Reserve (HRR): ${hrr} bpm`;
  };

  const calculateCalories = () => {
    return `Caloric Needs: ${calories} kcal/day`;
  };

  // Function to handle all calculations
  const calculateMetrics = () => {
    const bmi = calculateBMI();
    const whr = calculateWHR();
    const ibw = calculateIBW();
    const hrr = calculateHRR();
    const caloricNeeds = calculateCalories();

    setResults([bmi, whr, ibw, hrr, caloricNeeds]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Enter Your Metrics</h2>

        {/* BMI Calculation */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">BMI Calculation</h3>
          <label className="block mb-2 font-semibold">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your height in cm"
          />
          <label className="block mb-2 font-semibold">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your weight in kg"
          />
        </div>

        {/* WHR Calculation */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Waist-to-Hip Ratio (WHR) Calculation</h3>
          <label className="block mb-2 font-semibold">Waist (cm)</label>
          <input
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your waist circumference in cm"
          />
          <label className="block mb-2 font-semibold">Hip (cm)</label>
          <input
            type="number"
            value={hip}
            onChange={(e) => setHip(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your hip circumference in cm"
          />
        </div>

        {/* IBW Calculation */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Ideal Body Weight (IBW)</h3>
          <p>Calculated automatically based on height for simplicity</p>
        </div>

        {/* HRR Calculation */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Heart Rate Reserve (HRR)</h3>
          <label className="block mb-2 font-semibold">Max Heart Rate (bpm)</label>
          <input
            type="number"
            value={maxHeartRate}
            onChange={(e) => setMaxHeartRate(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your max heart rate"
          />
          <label className="block mb-2 font-semibold">Resting Heart Rate (bpm)</label>
          <input
            type="number"
            value={restingHeartRate}
            onChange={(e) => setRestingHeartRate(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your resting heart rate"
          />
        </div>

        {/* Calories Calculation */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Caloric Needs Calculation</h3>
          <label className="block mb-2 font-semibold">Calories (kcal/day)</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your caloric needs"
          />
        </div>

        <button
          onClick={calculateMetrics}
          className="bg-green-500 text-white p-3 rounded w-full mt-4 font-semibold"
        >
          Calculate and List Results
        </button>

        {/* Results Section */}
        <ul className="mt-6 space-y-2">
          {results.map((result, index) => (
            <li key={index} className="p-4 bg-gray-200 rounded">
              {result}
            </li>
          ))}
        </ul>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
