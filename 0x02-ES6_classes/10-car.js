class Car {
    constructor(brand, motor, color) {
      this._brand = Symbol(brand);
      this._motor = Symbol(motor);
      this._color = Symbol(color);
    }

    get brand() {
      return this._brand;
    }
  
    set brand(brand) {
      this._brand = Symbol(brand);
    }
  
    get motor() {
      return this._motor;
    }
  
    set motor(motor) {
      this._motor = Symbol(motor);
    }
  
    get color() {
      return this._color;
    }
  
    set color(color) {
      this._color = Symbol(color);
    }
  
    cloneCar() {
      const newCar = new Car(this.brand, this.motor, this.color);
  
      newCar._brand = this._brand;
      newCar._motor = this._motor;
      newCar._color = this._color;
  
      return newCar;
    }
  }