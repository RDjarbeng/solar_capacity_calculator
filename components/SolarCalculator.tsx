import React, { useState, useMemo } from 'react';

const SolarCalculator: React.FC = () => {
  const [solarVoltage, setSolarVoltage] = useState<number>(6);
  const [solarPower, setSolarPower] = useState<number>(0.3);
  const [batteryCapacity, setBatteryCapacity] = useState<number>(4800);
  const [numBatteries, setNumBatteries] = useState<number>(2);

  const chargingCurrent = useMemo(() => {
    return (solarPower / solarVoltage) * 1000; // Convert to mA
  }, [solarPower, solarVoltage]);

  const totalCapacity = useMemo(() => {
    return batteryCapacity * numBatteries;
  }, [batteryCapacity, numBatteries]);

  const chargingTime = useMemo(() => {
    return totalCapacity / chargingCurrent;
  }, [totalCapacity, chargingCurrent]);

  return (
    <div className="p-4 max-w-xl mx-auto bg-white/10 rounded-lg">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Solar Panel Voltage (V)</label>
            <input 
              type="number"
              value={solarVoltage}
              onChange={(e) => setSolarVoltage(Number(e.target.value))}
              className="mt-1 block w-full rounded border-gray-300 bg-white/20 px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Solar Panel Power (W)</label>
            <input 
              type="number"
              value={solarPower}
              onChange={(e) => setSolarPower(Number(e.target.value))}
              className="mt-1 block w-full rounded border-gray-300 bg-white/20 px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Battery Capacity (mAh)</label>
            <input 
              type="number"
              value={batteryCapacity}
              onChange={(e) => setBatteryCapacity(Number(e.target.value))}
              className="mt-1 block w-full rounded border-gray-300 bg-white/20 px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Number of Batteries</label>
            <input 
              type="number"
              value={numBatteries}
              onChange={(e) => setNumBatteries(Number(e.target.value))}
              className="mt-1 block w-full rounded border-gray-300 bg-white/20 px-2 py-1"
            />
          </div>
        </div>

        <div className="mt-6 p-4 bg-white/5 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Results:</h3>
          <div className="space-y-2">
            <p>Charging Current: {chargingCurrent.toFixed(2)} mA</p>
            <p>Total Battery Capacity: {totalCapacity} mAh</p>
            <p>Estimated Charging Time: {chargingTime.toFixed(1)} hours ({(chargingTime / 24).toFixed(1)} days)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;