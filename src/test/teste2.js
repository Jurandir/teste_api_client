  
  const array1 = [
    {nomelogico:"Campo1",valor:"Valor1"},
    {nomelogico:"Campo2",valor:"Valor2"},
    {nomelogico:"Campo3",valor:"Valor3"},
    {nomelogico:"Campo4",valor:"Valor4"},
    {nomelogico:"Campo5",valor:"Valor5"},
    {nomelogico:"Campo6",valor:"Valor6"}                
    ];

    const setValor = (matriz,campo,vlr) => {
        const elemento = matriz.filter( (obj) => (obj.nomelogico === campo) )[0]
        const idx = matriz.indexOf(elemento)
        matriz[idx].valor = vlr  
        return matriz[idx]
    }
    
console.log( '==========================================================' );

console.log( setValor(array1,'Campo3','XXXXXXXXXX') );

console.log( array1 );

console.log( '==========================================================' );



