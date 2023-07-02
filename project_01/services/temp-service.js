import { units } from '../constante';

function getOppositUnit(unit) {
  return unit == units.celsius ? units.faranheit : units.celsius;
}

function convertTemp(unit, value) {
  if (unit == units.celsius) {
    return (value - 32) / 1.8;
  } else {
    return value * 1.8 + 32;
  }
}

function isCold(value, unit) {
  if (unit == units.celsius) {
    return value <= 0;
  } else {
    return value <= 32;
  }
}

export { getOppositUnit, convertTemp, isCold };
