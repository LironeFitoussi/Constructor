const peopleArr = [
    {
        firstName: "Lirone",
        lastName: "Fitoussi",
        age: 23
    },
    {
        firstName: "Nir",
        lastName: "Gluskin",
        age: 25
    },
    {
        firstName: "Uriel",
        lastName: "Bengaev",
        age: 24
    }
]

peopleArr.forEach((name) => {
    name.fullName = `${name.firstName} ${name.lastName}`
})

console.log({peopleArr});