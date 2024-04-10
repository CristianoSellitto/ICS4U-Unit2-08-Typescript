/**
*
* This class creates a vehicle
*
* By:      Cristiano Sellitto
* Version: 1.1
* Since:   2024-03-28
*/

export class Vehicle {
  // Class variables
  protected _colour: string   // Vehicle colour
  protected _speed: number    // Current speed of the vehicle
  protected _maxSpeed: number // Maximum speed of the vehicle
  protected _wheels:number    // Total number of wheels on the vehicle

  // Creates the base vehicle
  public constructor(startColour: string, startMaxSpeed: number, startWheels: number) {
    this._colour = startColour
    this._speed = 0
    this._maxSpeed = startMaxSpeed
    this._wheels = startWheels
  }

  // Gets the colour of the vehicle
  public get colour() {
    return this._colour
  }

  // Gets the current speed of the vehicle
  public get speed() {
    return this._speed
  }

  // Gets the maximum speed of the vehicle
  public get maxSpeed() {
    return this._maxSpeed
  }

  // Gets the number of wheels on the vehicle
  public get wheels() {
    return this._wheels
  }

  // Creates a string about the status of the car
  public get status() {
    let statusString = 'Status:\n'
    statusString = ` -> Speed: ${this.speed}\n`
    statusString += ` -> MaxSpeed: ${this.maxSpeed}\n`
    statusString += ` -> Color: ${this.colour}\n`
    statusString += ` -> # of Wheels: ${this.wheels}`

    return statusString
  }

  // Sets the colour of the vehicle
  public set colour(newColour: string) {
    this._colour = newColour
  }

  // Accelerates the car, changing the speed
  public accelerate(accelPower: number, accelTime: number) {
    this._speed = (accelPower * accelTime) + this._speed
    if (this._speed > this._maxSpeed) {
      this._speed = this._maxSpeed
    }
  }

  // Brakes the car, changing the speed
  public brake(brakePower: number, brakeTime: number) {
    this._speed = this._speed - (brakePower * brakeTime)
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}

