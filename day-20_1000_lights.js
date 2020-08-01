// 1000 Lights

// You have a bank of switches before you, numbered from 1 to count. Every
// switch is connected to exactly one light that is initially off. You walk
// down the row of switches and toggle every one of them, that is, you flip
// every switch. All the lights are now on. You walk back to the beginning of
// the row and start another pass. On this second pass, you toggle switches
// 2, 4, 6, and so on. Now, every other light is on. On the third pass, you go
// back to the beginning again, this time toggling switches 3, 6, 9, and so on.
// You continue to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after count passes.

function initialiseSwitches(number) {
  const switches = {};
  for (let property = 1; property <= number; property += 1) {
    switches[property] = false;
  }

  return switches;
}

function lightsOn(numSwitches) {
  const switches = initialiseSwitches(numSwitches);
  for (let round = 1; round <= numSwitches; round += 1) {
    for (let key in switches) {
      if (Number(key) % round === 0) {
        switches[key] = !switches[key];
      }
    }
  }

  const ligthsOnArray = Object.keys(switches).filter((key) => switches[key]);
  return ligthsOnArray.map((num) => Number(num));
}

// Example / Test Cases
console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
