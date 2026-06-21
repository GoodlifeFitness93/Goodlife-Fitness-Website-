import sharp from 'sharp';

async function checkArea() {
  const origPath = 'src/assets/goodlife-logo-master.png';
  const transPath = 'src/assets/goodlife-logo-master-transparent.png';
  
  const orig = await sharp(origPath).raw().toBuffer({ resolveWithObject: true });
  const trans = await sharp(transPath).raw().toBuffer({ resolveWithObject: true });
  
  const w = orig.info.width;
  const h = orig.info.height;
  
  console.log(`Checking 5x5 area at Bottom-Right corner:`);
  for (let dy = -4; dy <= 0; dy++) {
    const y = h + dy;
    let lineOrig = '';
    let lineTrans = '';
    for (let dx = -4; dx <= 0; dx++) {
      const x = w + dx;
      const idxOrig = (y * w + x) * orig.info.channels;
      const idxTrans = (y * w + x) * trans.info.channels;
      
      const rO = orig.data[idxOrig];
      const gO = orig.data[idxOrig+1];
      const bO = orig.data[idxOrig+2];
      
      const rT = trans.data[idxTrans];
      const gT = trans.data[idxTrans+1];
      const bT = trans.data[idxTrans+2];
      const aT = trans.data[idxTrans+3];
      
      lineOrig += `(${rO},${gO},${bO}) `.padEnd(14);
      lineTrans += `(${rT},${gT},${bT},${aT}) `.padEnd(18);
    }
    console.log(`Y=${y} Orig: ${lineOrig}`);
    console.log(`Y=${y} Trans: ${lineTrans}`);
  }
}

checkArea().catch(console.error);
