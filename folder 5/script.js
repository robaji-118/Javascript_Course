'use strict';

// const x = '23';

// if (x === 23) console.log(23);

// const calcAge = birthYear => 2025 - birthYear;

// console.log(calcAge(Number(prompt())));

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([3, 7, 4, 1, 8]);

// const amplitutide = calcTempAmplitude(temperatures);

/////////////////////////////// -----------------------------------------------------

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1, 9, 0, 5]);
// console.log(amplitudeNew);

////////////////////////

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degress celcius :')),
    };

    console.log(measurement);
    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(measureKelvin());