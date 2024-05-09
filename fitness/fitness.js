

const createCalendar = (year, month) => {
    const date = new Date(year, month);
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    

}

let currentYear = new Date().getFullYear()
let currentMonth = new Date().getMonth() +1

console.log(currentYear, currentMonth)