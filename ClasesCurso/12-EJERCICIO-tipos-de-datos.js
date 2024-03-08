//Social Media Profil

//1. User information
const username = 'codingAdventurer'
const fullName = 'Jhon Doe'
const age = 25
const isStudent = true

//2.Address
const address = {
    street: '123 Main Street',
    city: 'Techville',
    state: 'Codingland',
    zipCode: 54321
}

//3. Hobbies
const hobbies = ['Codding', 'Reading', 'Gaming']

//4. Generating personalized bio
const personalizedBio = `My name is ${fullName}, 
I'm ${age} years old and I live in ${address.city}, 
${address.state}. I like ${hobbies.join(", ")}. 
and i am ${username} and work in ${address.street}`;

//5. print the user profile
console.log(personalizedBio);