interface Shape2 {
	area(): number
}

class Rect2 implements Shape2 {
	constructor(private width: number, private height: number) {
		// super()
	}
	area(): number {
		return this.width * this.height
	}
}

let r2: Rect2 = new Rect2(100, 200)
console.log(r2.area())
