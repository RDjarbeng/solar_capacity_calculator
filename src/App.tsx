// @ts-ignore
import React from 'react';
import { SolarCalculator } from './components/SolarCalculator';
import { SolarExample } from './components/SolarExample';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Solar Panel Calculator</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-center mb-6">Interactive Calculator</h2>
            <SolarCalculator />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-center mb-6">Example Case Study</h2>
            <div className="text-center mb-4">
              <p className="text-gray-300">Using a 6V, 0.3W solar panel to charge two 18650 batteries (4800mAh each)</p>
            </div>
            <SolarExample />
          </section>

          <section className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">Key Considerations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Formula Breakdown</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Power (W) = Voltage (V) × Current (A)</li>
                  <li>Charging Time (hours) = Battery Capacity (mAh) / Charging Current (mA)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Real-world Factors</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Solar panel efficiency</li>
                  <li>Battery configuration</li>
                  <li>Sunlight availability</li>
                  <li>Temperature effects</li>
                  <li>Charging efficiency losses</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;