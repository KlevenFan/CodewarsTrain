function josephusSurvivor(n,k){
  let survivor = 1;

  for(let i = 2; i <=n; i++) {
    survivor = (survivor + k) % i
  }

  return survivor + 1;
}