const ascending_sort = (nilai) => {
	return nilai.sort()
}

const descending_sort = (nilai) => {
	let sort_nilai = ascending_sort(nilai)

	return sort_nilai.reverse()
}

module.exports = {
	ascending_sort,
	descending_sort
}