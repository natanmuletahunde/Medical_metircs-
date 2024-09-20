import { useState } from 'react';
import './App.css';

function App() {
  const [bodyFat, setBodyFat] = useState('');
  const [whr, setWhr] = useState('');
  const [calories, setCalories] = useState('');
  const [ibw, setIbw] = useState('');
  const [hrr, setHrr] = useState('');
  const [nutrition, setNutrition] = useState('');
  const [results, setResults] = useState([]);

  const calculateMetrics = () => {
    const bodyFatPercentage = `Body Fat Percentage: ${bodyFat}%`;
    const whrCalculation = `Waist-to-Hip Ratio (WHR): ${whr}`;
    const caloricNeeds = `Caloric Needs: ${calories} kcal/day`;
    const idealBodyWeight = `Ideal Body Weight (IBW): ${ibw} kg`;
    const heartRateReserve = `Heart Rate Reserve (HRR): ${hrr} bpm`;
    const nutritionalNeeds = `Nutritional Needs: ${nutrition} g/day`;

    setResults([
      bodyFatPercentage,
      whrCalculation,
      caloricNeeds,
      idealBodyWeight,
      heartRateReserve,
      nutritionalNeeds,
    ]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 text-center text-3xl font-bold">
        Medical Metric Calculator
      </header>

      {/* Main Section */}
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Enter Your Metrics</h2>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Body Fat Percentage (%)</label>
          <input
            type="number"
            value={bodyFat}
            onChange={(e) => setBodyFat(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your body fat percentage"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Waist-to-Hip Ratio (WHR)</label>
          <input
            type="number"
            value={whr}
            onChange={(e) => setWhr(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your WHR"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Caloric Needs (kcal/day)</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your caloric needs"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Ideal Body Weight (kg)</label>
          <input
            type="number"
            value={ibw}
            onChange={(e) => setIbw(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your ideal body weight"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Heart Rate Reserve (HRR) (bpm)</label>
          <input
            type="number"
            value={hrr}
            onChange={(e) => setHrr(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your heart rate reserve"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Nutritional Needs (g/day)</label>
          <input
            type="number"
            value={nutrition}
            onChange={(e) => setNutrition(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your nutritional needs"
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
      <footer className="bg-indigo-600 text-white text-center p-4">
        &copy; 2024 Medical Metric - All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
