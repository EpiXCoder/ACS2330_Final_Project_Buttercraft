import data from './butter-data.json'

data.forEach((obj, i) => {
	obj.id = i
})
console.log(data)

export default data