class Tiger {
	readonly name: string
	constructor(name: string) {
		this.name = name
	}
}

const female: Tiger = new Tiger('母老虎')
// female.name = '温柔妹子' //那是不可能的
