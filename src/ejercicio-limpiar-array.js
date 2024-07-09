

const data = [
  { businessUnitId: 'BU1', branchId: 'BR1', name: 'Criteria', proportion: 0.65 },
  { businessUnitId: 'BU1', branchId: 'BR1', name: 'Criteria', proportion: 0.35 },
  { businessUnitId: 'BU2', branchId: 'BR2', name: 'Criteria', proportion: 0.3 },
  { businessUnitId: 'BU2', branchId: 'BR2', name: 'Criteria', proportion: 0.3 },
  { businessUnitId: 'BU2', branchId: 'BR2', name: 'Criteria', proportion: 0.4 },
  { businessUnitId: 'BU3', branchId: 'BR3', name: 'Criteria', proportion: 0.90 },
  { businessUnitId: 'BU3', branchId: 'BR3', name: 'Criteria', proportion: 0.1 },
]

// de aquellos que se repiten en esas propiedades se requiere que se sumen sus proporciones y se mantenga un solo elemento
// , de tal forma que se tengan elementos con businessUnitId y branchId unicos

let cleanArray = [ ];

for(let i = 0; i < data.length; i++){
  // retorna un arreglo de objetos
  const group = data.filter((object)=> (object.businessUnitId === data[i].businessUnitId && object.branchId === data[i].branchId))

  let proportionSum  = 0;

  group.map((element, index) => {
    proportionSum = element.proportion + proportionSum;
    if(index === group.length - 1){
      const {  businessUnitId, branchId, name } = element
      const compareElement = {
        businessUnitId,
        branchId,
        name,
        proportion: proportionSum
      }
      if(!cleanArray.some( (obj) =>  obj.businessUnitId === businessUnitId && obj.branchId === branchId)){
        console.log(cleanArray.includes(compareElement))
        cleanArray.push(compareElement)
      }
    }
  })
}

console.log(cleanArray)
