
const user = {
  name: '南玖',
  gender: '男',
  hobby: {
    name: 'fe'
  }
}

// Object.freeze(user)
// Object.preventExtensions(user)
Object.seal(user)

user.name = 'nanjiu'
user.age = 18 

delete user.gender

user.hobby.name = 'ux'
user.hobby.years = 3

console.log(user)