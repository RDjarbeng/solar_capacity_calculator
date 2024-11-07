import React from 'react';

const SolarExample: React.FC = () => {
  const voltage = 6;
  const power = 0.3;
  const singleBatteryCapacity = 4800;
  const batteries = 2;

  const current = (power / voltage) * 1000; // in mA
  const totalCapacity = singleBatteryCapacity * batteries;
  const chargingTime = totalCapacity / current;

  return (
    <div className="p-4 bg-white/10 rounded-lg max-w-md mx-auto">
      <div className="space-y-2">
        <p>Solar Panel Current: {current.toFixed(2)} mA</p>
        <p>Total Battery Capacity: {totalCapacity} mAh</p>
        <p className="font-bold">Charging Time: {chargingTime.toFixed(1)} hours</p>
        <p className="text-sm opacity-75">(Approximately {(chargingTime / 24).toFixed(1)} days)</p>
      </div>
    </div>
  );
};

export default SolarExample;