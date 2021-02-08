abstract class Shape {
	draw(gd): void {}
	abstract area(): number
	abstract pointin(x: number, y: number): boolean
}

class Rect extends Shape {
	constructor(private width: number, private height: number) {
		super()
	}
	// draw(gd): void {
	// 	gd.fillRect(0, 0, this.width, this.height)
	// }
	area(): number {
		return this.width * this.height
	}
	pointin(x: number, y: number) {
		return true
	}
}

class Circle extends Shape {
	constructor(private cx: number, private cy: number, private r: number) {
		super()
	}
	// draw(gd) {
	// 	gd.arc()
	// }
	area() {
		return Math.PI * Math.pow(this.r, 2)
	}
	pointin(x: number, y: number) {
		return true
	}
}
// a既可以是Rect，也可以是Circle类
let a: Shape
a = new Rect(400, 200)
console.info(a.area())
a = new Circle(400, 500, 150)
console.info(a.area())
