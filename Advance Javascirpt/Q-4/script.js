/**
 * (Q) Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override the draw method. Demonstrate polymorphism using instances of these classes.
 */
class Shape {
    draw() {
      console.log("Drawing a shape");
    }
  }
  
  // Subclass Circle
  class Circle extends Shape {
    draw() {
      console.log("Drawing a circle");
    }
  }
  
  // Subclass Rectangle
  class Rectangle extends Shape {
    draw() {
      console.log("Drawing a rectangle");
    }
  }
  
  // Function to demonstrate polymorphism
  function drawShape(shape) {
    shape.draw();
  }
  
  // Example usage:
  const shape = new Shape();
  const circle = new Circle();
  const rectangle = new Rectangle();
  
  drawShape(shape);      // Output: Drawing a shape
  drawShape(circle);     // Output: Drawing a circle
  drawShape(rectangle);  // Output: Drawing a rectangle