const data = {
    "data": [
        { "id": "1", "name": "Ana", "dob": "1991-08-21", "skill": "programming", "gender": "female", "email": "ana@mail.com" },
        { "id": "2", "name": "Ani", "dob": "21-06-1997", "skill": "design", "gender": "female", "email": "ani@mail.com" },
        { "id": "3", "name": "Budi", "dob": "07-21-1998", "skill": "programming", "gender": "male", "email": "budimail.com" },
        { "id": "4", "name": "Faza", "dob": "1999-08-21", "skill": "design", "gender": "female", "email": "faza@mail" },
        { "id": "5", "name": "Caca", "dob": "2000-08-21", "skill": "programming", "gender": "female", "email": "cacamail" },
        { "id": "6", "name": "Dara", "dob": "12-23-2002", "skill": "design", "gender": "female", "email": "daradara" },
        { "id": "7", "name": "Fara", "dob": "30-05-2000", "skill": "programming", "gender": "female", "email": "farara@mail" },
        { "id": "8", "name": "Haza", "dob": "1994-07-21", "skill": "programming", "gender": "male", "email": "haza@gmail.com" },
        { "id": "9", "name": "Irene", "dob": "1995-05-21", "skill": "design", "gender": "female", "email": "irene@mail.com" }
    ]
}
// console.log(data.data[0]);


// Fungsi Email Valid (no.4)
const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
}
// console.log(isValidEmail('info@example.com'));

console.log('==== Validasi Email yang valid ====');
data.data.forEach((el) => {
    console.log(`${el.email} adalah email yang ${isValidEmail(el.email) ? 'Valid' : 'Tidak Valid'}`);
})


// Fungsi Filter data user (no.5)
const filter = (filterUser) => {
    const users = filterUser.filter((user) => user.skill === 'programming')
    return users
}
// console.log(filter(data.data));

console.log('==== Data User dengan Skill Programming ====');
console.log(filter(data.data));



