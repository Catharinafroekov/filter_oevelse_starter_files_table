const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

showTheseVehicles(vehicles);

/* const allElectricArr = (vehicles.filter(isVehicleElectric));
console.log(allElectricArr)

showTheseVehicles(allElectricArr);

function isVehicleElectric(vehicle){
if(vehicle.isElectric){
  return true;
}
} */
/* 
const allPassengerArr = (vehicles.filter(Passenger));
console.log(allPassengerArr)

showTheseVehicles(allPassengerArr);

function Passenger(vehicle){
if(vehicle.passengers > 2){
  return true;
}
} */

/* const allElectricArr = (vehicles.filter(isVehicleElectric));
console.log(allElectricArr)

showTheseVehicles(allElectricArr);

function isVehicleElectric(vehicle){
if(vehicle.ownedBy === 'Jonas' && vehicle.isElectric){
  return true;
}} */


/* const allPassengerArr = (vehicles.filter(Passenger));
console.log(allPassengerArr)

showTheseVehicles(allPassengerArr);

function Passenger(vehicle){
if(vehicle.passengers > 1 && vehicle.fuel === 'Rugbrød'){
  return true;
}
} */

const filters = {
  isElectric: vehicles.filter((vehicle) => vehicle.passengers >2)
};

document.querySelector("#navigation").addEventListener("click", (event)=>{
  const filterName = event.target.dataset.filter;
  tbodyPointer.innerHTML = "";
  showTheseVehicles(filters[filterName]);
})


function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  ${each.stops ? `<td>${each.stops}</td>`:`<td> - </td>`}
  <td>${each.ownedBy}</td>
  ${each.isElectric ? `<td>${each.isElectric}</td>`:`<td> - </td>`}
  ${each.isTandem ? `<td>${each.isTandem}</td>`:`<td> - </td>`}

</tr>`;
  });
}

/* if(each.stops){'<td>${each.stops}</td>'}else{'<td>-</td>'} */