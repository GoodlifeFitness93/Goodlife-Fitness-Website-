import fs from 'node:fs';
import path from 'node:path';

const artifactsDir = 'C:\\Users\\AMOL\\.gemini\\antigravity\\brain\\b1403d92-e794-47c6-9841-5ffb7056544c';
const projectDir = 'c:\\goodlife fitness production\\goodlife-fitness-solapur-2d14b2d7';

const logoSource = path.join(artifactsDir, 'media__1782063152437.jpg');
const trainerSource = path.join(artifactsDir, 'media__1782061235602.jpg');

const logoDest = path.join(projectDir, 'src', 'assets', 'goodlife-logo-master.png');
const trainerDest = path.join(projectDir, 'src', 'assets', 'goodlife-trainer-new.png');

console.log("Copying logo from:", logoSource, "to:", logoDest);
fs.copyFileSync(logoSource, logoDest);

console.log("Copying trainer from:", trainerSource, "to:", trainerDest);
fs.copyFileSync(trainerSource, trainerDest);

console.log("Done copying assets.");
