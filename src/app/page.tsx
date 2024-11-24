'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('');
  const [equation, setEquation] = useState('');

  const handleNumber = (number: string) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + ' ' + operator + ' ');
    setDisplay('');
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation('');
    } catch (error) {
      setDisplay('Error');
      setEquation('');
    }
  };

  const handleClear = () => {
    setDisplay('');
    setEquation('');
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-gray-500 text-sm h-6">{equation}</div>
            <div className="text-3xl font-bold text-right">{display || '0'}</div>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {/* First row */}
            <button onClick={handleClear} className="col-span-2 p-4 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
              AC
            </button>
            <button onClick={() => handleOperator('/')} className="p-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
              ÷
            </button>
            <button onClick={() => handleOperator('*')} className="p-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
              ×
            </button>

            {/* Number pad */}
            {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                {num}
              </button>
            ))}

            {/* Operators */}
            <button onClick={() => handleOperator('-')} className="p-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
              -
            </button>
            <button onClick={() => handleOperator('+')} className="p-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
              +
            </button>

            {/* Bottom row */}
            <button onClick={() => handleNumber('0')} className="col-span-2 p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
              0
            </button>
            <button onClick={handleDecimal} className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
              .
            </button>
            <button onClick={handleEqual} className="p-4 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors">
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
