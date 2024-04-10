/*
* This program is a vehicle class.
*
* @author  Mr Coxall
* @version 1.0
* @since   2020-01-01
*/

import { Truck } from "./Truck"
import { Bike } from "./Bike"

// Create a bmx bike
const bmx = new Bike('Red', 40)

console.log('Created Bmx Bike.\nStatus:')
console.log(bmx.status)

// Create a big truck
const bigTruck = new Truck('Grey', 200, 'HGC-3456F')

console.log('\nCreated a Big Truck.\nStatus:')
console.log(bigTruck.status)

// Create a small truck
const smallTruck = new Truck('Black', 100, 'CDA-3214F')

console.log('\nCreated a Small Truck.\nStatus:')
console.log(smallTruck.status)

console.log('\nDone.')
