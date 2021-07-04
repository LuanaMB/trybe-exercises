//1
let n =5;
let simbolo= '*';
for(let index2=1; index2<=n; index2 +=1){
let quadrado='';
  for(let index=1; index<=n; index += 1){
    quadrado+=simbolo      
  }
  console.log(quadrado)
}
//2
let n =5;
let quadrado='';
let simbolo= '*';
for(let index=1; index<=n; index += 1){
  quadrado+=simbolo    
  console.log(quadrado)
}
//3
let n =5;
let quadrado='';
let simbolo= '*';
let posicao= n
for(let linha=0; linha<n; linha +=1){
  for(let coluna  =0; coluna<=n; coluna+=1){
    if(coluna<posicao){
      quadrado+=quadrado;
    }    else{
      quadrado+=simbolo;
    }
  }
console.log(quadrado)
quadrado='';
posicao-= 1;
}
//4
