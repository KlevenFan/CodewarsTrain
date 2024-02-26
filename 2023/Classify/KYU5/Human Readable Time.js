// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.
//
// Main

function humanReadable(seconds) {
  const oneMinute = 60;
  const oneHour = 60 * 60;

  function padStart0(timeString, digit) {
    if (timeString === '0') {
      return '0'.repeat(digit);
    }

    if (timeString.length >= digit) {
      return timeString;
    }

    timeString = `0${timeString}`;

    return padStart0(timeString, 2);
  }

  const hours = Math.floor(seconds/oneHour);
  seconds -= hours * oneHour;

  const minutes = Math.floor(seconds/oneMinute);
  seconds -= minutes * oneMinute;

  return `${padStart0(`${hours}`, 2)}:${padStart0(`${minutes}`, 2)}:${padStart0(`${seconds}`, 2)}`;
}

// Best
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
    pad(parseInt(seconds / 60 % 60)) + ":" +
    pad(seconds % 60)
}