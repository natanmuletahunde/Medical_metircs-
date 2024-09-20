/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  // States for different metrics inputs
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
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

  // Function to reset inputs and results
  const resetMetrics = () => {
    setHeight('');
    setWeight('');
    setWaist('');
    setHip('');
    setAge('');
    setCalories('');
    setRestingHeartRate('');
    setMaxHeartRate('');
    setResults([]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Div below the header with background image */}
      <div
  className="bg-cover bg-center h-96" 
  style={{
    backgroundImage: `url('https://dashboardfox.com/wp-content/uploads/2020/07/healthcaremetrics.facebook-ad-link.jpg')`,
  }}
>
</div>


      {/* Main Section */}
      <main className="flex-grow container mx-auto p-4">
        {/* Centered container for the metrics */}
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Medical Metric Calculator</h2>

          {/* BMI Calculation */}
          <div className="w-full mb-6">
            <h3 className="font-semibold text-lg mb-2">BMI Calculation</h3>
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
          <div className="w-full mb-6">
            <h3 className="font-semibold text-lg mb-2">Waist-to-Hip Ratio (WHR) Calculation</h3>
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
          <div className="w-full mb-6">
            <h3 className="font-semibold text-lg mb-2">Ideal Body Weight (IBW)</h3>
            <p className="text-sm text-gray-600">Calculated automatically based on height.</p>
          </div>

          {/* HRR Calculation */}
          <div className="w-full mb-6">
            <h3 className="font-semibold text-lg mb-2">Heart Rate Reserve (HRR)</h3>
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
          <div className="w-full mb-6">
            <h3 className="font-semibold text-lg mb-2">Caloric Needs Calculation</h3>
            <label className="block mb-2 font-semibold">Calories (kcal/day)</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your caloric needs"
            />
          </div>

          {/* Calculate or Reset Button */}
          {results.length === 0 ? (
            <button
              onClick={calculateMetrics}
              className="bg-green-500 text-white p-3 rounded w-full mt-4 font-semibold hover:bg-green-600 transition-all duration-300"
            >
              Calculate and List Results
            </button>
          ) : (
            <button
              onClick={resetMetrics}
              className="bg-red-500 text-white p-3 rounded w-full mt-4 font-semibold hover:bg-red-600 transition-all duration-300"
            >
              Reset
            </button>
          )}

          {/* Results Section */}
          <ul className="mt-6 space-y-2 w-full">
            {results.map((result, index) => (
              <li key={index} className="p-4 bg-gray-100 text-center rounded shadow-md">
                {result}
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
