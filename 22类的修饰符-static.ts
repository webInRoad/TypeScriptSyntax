class Boss {
	static sname: string = '张总'
	static meeting() {
		console.info('秘书，组织下会议')
	}
}
console.info(Boss.sname)
Boss.meeting()
