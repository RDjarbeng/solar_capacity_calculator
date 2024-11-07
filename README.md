# Solar Panel Calculator

An interactive calculator for solar panel charging calculations, built with React and TailwindCSS.

## Features

- Real-time calculation of charging parameters
- Interactive inputs for solar panel specifications
- Battery configuration options
- Automatic current calculation based on voltage and power
- Charging time estimation in hours and days
- Example case study with common configurations

## Technical Stack

- React 18
- TypeScript
- TailwindCSS
- Vite

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Enter your solar panel specifications:
   - Voltage (V)
   - Power (W)
2. Input battery details:
   - Single battery capacity (mAh)
   - Number of batteries
3. View the results:
   - Charging current (mA)
   - Total battery capacity
   - Estimated charging time

## Calculations

The calculator uses these fundamental electrical formulas:
- Current (A) = Power (W) / Voltage (V)
- Charging time (hours) = Battery Capacity (mAh) / Charging Current (mA)

## Contributing

Feel free to open issues and pull requests for any improvements or bug fixes.