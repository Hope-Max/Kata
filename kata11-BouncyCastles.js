const PI = 3.14159;

const sphereVolume = function(radius) {
  const formula = (4/3) * PI * Math.pow(radius, 3);
  return formula;
}

const coneVolume = function(radius, height) {
  const formula = (1/3) * PI * height * Math.pow(radius, 2);
  return formula;
}


const prismVolume = function(height, width, depth) {
  const formula = height * width * depth;
  return formula;
}

const totalVolume = function(solids) {
  let volume = 0;
  for (let i = 0; i < solids.length; i++) {
    if (solids[i]['type'] === 'sphere') {
      volume += sphereVolume(solids[i]['radius']);
    } else if (solids[i]['type'] === 'cone') {
      volume += coneVolume(solids[i]['radius'], solids[i]['height']);
    } else if (solids[i]['type'] === 'prism') {
      volume += coneVolume(solids[i]['height'], solids[i]['width'], solids[i]['depth']);
    }
  }
  return volume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}
const smallSphere = {
  type: 'sphere',
  radius: 10
}
const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}
const duck = [largeSphere, smallSphere, cone];
console.log(totalVolume(duck));

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(prismVolume(3, 4, 5) === 60);
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);