// union Type
let subs : number | string = "1M"

let apiRequestStatus : 'pending' | 'success' | 'error' = 'pending'

let airlineSeat : 'asile' | 'window' | 'middle' = 'asile'

airlineSeat = 'asile'

// any Type
let orders = ["24", "28", "34", "39"]

let currentOrder : string | undefined ;

for(let order of orders){
if(order === '28'){
    currentOrder = order;
    break;
}
order = '11'
}

console.log(currentOrder);
