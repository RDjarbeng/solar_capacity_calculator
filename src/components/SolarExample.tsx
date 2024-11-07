import React, { useMemo } from 'react';

export const SolarExample: React.FC = () => {
  const voltage = 6;
  const power = 0.3;
  const singleBatteryCapacity = 4800;
  const batteries = 2;

  const current = useMemo(() => (power / voltage) * 1000, []); // in mA
  const totalCapacity = useMemo(() => singleBatteryCapacity * batteries, []);
  const chargingTime = useMemo(() => totalCapacity / current, [totalCapacity, current]);

  return (
    <div className="p-6 bg-gray-800 rounded-lg max-w-md mx-auto shadow-xl">
      <div className="space-y-3">
        <p className="text-gray-300">Solar Panel Current: <span className="font-semibold text-white">{current.toFixed(2)} mA</span></p>
        <p className="text-gray-300">Total Battery Capacity: <span className="font-semibold text-white">{totalCapacity} mAh</span></p>
        <p className="text-gray-300">Charging Time: <span className="font-semibold text-white">{chargingTime.toFixed(1)} hours</span></p>
        <p className="text-sm text-gray-400">(Approximately {(chargingTime / 24).toFixed(1)} days)</p>
      </div>
    </div>
  );
};