// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
//
//   The following are examples of expected output values:
//
//   rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
  const R = r > 255 ? 255 : r < 0 ? 0 : r;
  const G = g > 255 ? 255 : g < 0 ? 0 : g;
  const B = b > 255 ? 255 : b < 0 ? 0 : b;

  const RStr = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16) ;
  const GStr = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16) ;
  const BStr = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16) ;

  return (RStr + GStr + BStr).toUpperCase();
}

// Best
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
  if(d < 0 ) {return "00";}
  if(d > 255 ) {return "FF";}
  return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}