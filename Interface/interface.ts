interface User_ {
  name: string,
  age : number
}

interface Employee extends User_ {
    position : string
}

const staff: Employee = {
    name : 'Tuandev',
    age : 21,
    position : 'FrontEnd Developer'
}
