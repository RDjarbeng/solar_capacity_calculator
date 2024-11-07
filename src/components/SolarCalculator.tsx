import React, { useState, useMemo } from 'react';

export const SolarCalculator: React.FC = () => {
  const [solarVoltage, setSolarVoltage] = useState<number>(6);
  const [solarPower, setSolarPower] = useState<number>(0.3);
  const [batteryCapacity, setBatteryCapacity] = useState<number>(4800);
  const [numBatteries, setNumBatteries] = useState<number>(2);
  const [customChargingTime, setCustomChargingTime] = useState<number | null>(null);

  const chargingCurrent = useMemo(() => {
    return (solarPower / solarVoltage) * 1000; // Convert to mA
  }, [solarPower, solarVoltage]);

  const totalCapacity = useMemo(() => {
    return batteryCapacity * numBatteries;
  }, [batteryCapacity, numBatteries]);

  const calculatedChargingTime = useMemo(() => {
    return totalCapacity / chargingCurrent;
  }, [totalCapacity, chargingCurrent]);

  const chargingTime = customChargingTime ?? calculatedChargingTime;

  const handleResetTime = () => {
    setCustomChargingTime(null);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-gray-800 rounded-lg shadow-xl">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300">Solar Panel Voltage (V)</label>
            <input 
              type="number"
              value={solarVoltage}
              onChange={(e) => setSolarVoltage(Number(e.target.value))}
              className="mt-1 block w-full rounded bg-gray-700 border-gray-600 text-white px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Solar Panel Power (W)</label>
            <input 
              type="number"
              value={solarPower}
              onChange={(e) => setSolarPower(Number(e.target.value))}
              className="mt-1 block w-full rounded bg-gray-700 border-gray-600 text-white px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Single Battery Capacity (mAh)</label>
            <input 
              type="number"
              value={batteryCapacity}
              onChange={(e) => setBatteryCapacity(Number(e.target.value))}
              className="mt-1 block w-full rounded bg-gray-700 border-gray-600 text-white px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Number of Batteries</label>
            <input 
              type="number"
              value={numBatteries}
              onChange={(e) => setNumBatteries(Number(e.target.value))}
              className="mt-1 block w-full rounded bg-gray-700 border-gray-600 text-white px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Charging Time (hours)
              {customChargingTime !== null && (
                <button 
                  onClick={handleResetTime}
                  className="ml-2 text-xs text-blue-400 hover:text-blue-300"
                >
                  Reset to calculated
                </button>
              )}
            </label>
            <input 
              type="number"
              value={chargingTime.toFixed(1)}
              onChange={(e) => setCustomChargingTime(Number(e.target.value))}
              className="mt-1 block w-full rounded bg-gray-700 border-gray-600 text-white px-3 py-2"
            />
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Results:</h3>
          <div className="space-y-2 text-gray-200">
            <p>Charging Current: {chargingCurrent.toFixed(2)} mA</p>
            <p>Total Battery Capacity: {totalCapacity} mAh</p>
            <p>
              {customChargingTime === null ? (
                <>Calculated Charging Time: {calculatedChargingTime.toFixed(1)} hours ({(calculatedChargingTime / 24).toFixed(1)} days)</>
              ) : (
                <>Custom Charging Time: {customChargingTime.toFixed(1)} hours ({(customChargingTime / 24).toFixed(1)} days)</>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};