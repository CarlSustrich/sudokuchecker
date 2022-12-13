

export default function ThreeBy3 (num1, num2, num3, num4, num5, num6, num7, num8, num9) {
  this.box1 = num1;
  this.box2 = num2;
  this.box3 = num3;
  this.box4 = num4;
  this.box5 = num5;
  this.box6 = num6;
  this.box7 = num7;
  this.box8 = num8;
  this.box9 = num9;
  this.arrayOfValues = [];
}

ThreeBy3.prototype.createArray = function () {
  this.arrayOfValues.splice(0, 8);
  let arr = Object.values(this);
  arr.pop();
  this.arrayOfValues.push(...arr);
};

ThreeBy3.prototype.findDuplicate = function () {
  let valuesAlreadySeen = []
  for (let i = 0; i < this.arrayOfValues.length; i++) {
    let value = this.arrayOfValues[i]
    if (valuesAlreadySeen.indexOf(value) !== -1) {
      return true
    }
    valuesAlreadySeen.push(value)
  }
  return false
};
