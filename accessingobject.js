const person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '0956466',
        email: 'abdul@gmail.com'
    },

    education: {
        schoolName: 'horimohon',
        subject: [
            { name: 'bangla',marks: 56 },
            { name: 'english', marks: 64 },
            { name: 'math', marks: 78},

        ]
    }
        
    
}

// accessing object /array properties 
console.log(person.name);
// get email: 
console.log(person.contact.email);
console.log(person.education.subject);
console.log(person.education.subject[2]);
console.log(person.education.subject[2].marks);
console.log(person.education.subject[2].name);