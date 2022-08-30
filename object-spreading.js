const person = {
    name: 'hero alom',
    age: 34, 
    phone: '301133853',
    address: 'bari nai'

}

//we can assign the abject variable in new variable
//we take name property outside

//before get the property names we first keep in names in variables then we can call 
const{name, age, phone:contact}=person//phone : contact meaning I have change the phone to contact so i can access with new name 
console.log(contact);