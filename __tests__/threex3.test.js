import ThreeBy3 from './../src/sudoku.js';

describe ("ThreeBy3", () => {
  test("should correctly create an threeby3 object with 9 box values", () =>{
    const threeby3 = new ThreeBy3(1, 2, 3, 4, 5, 6, 7, 8, 9);
    expect(threeby3.box1).toEqual(1);
    expect(threeby3.box2).toEqual(2);
    expect(threeby3.box3).toEqual(3);
    expect(threeby3.box4).toEqual(4);
    expect(threeby3.box5).toEqual(5);
    expect(threeby3.box6).toEqual(6);
    expect(threeby3.box7).toEqual(7);
    expect(threeby3.box8).toEqual(8);
    expect(threeby3.box9).toEqual(9);
  })
})






// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });
// });
