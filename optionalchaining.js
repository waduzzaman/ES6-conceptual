const person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '0956466',
        email: 'abdul@gmail.com'
    },

    education: {
        schoolName: 'horimohon',
        subject: [{
                name: 'bangla',
                marks: 56
            },
            {
                name: 'english',
                marks: 64
            },
            {
                name: 'math',
                marks: 78
            },

        ]
    }

}

// when we don't know that whether there is that particular property is in that object or now and to avoid error we have to use ? before we find the next property. 
// console.log(person.education?.schooladdress?.road);
console.log(person.education?.schooladdress?.road);