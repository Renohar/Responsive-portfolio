
// Adding Date to Footer

let date = new Date();

let days = (date.getDate() < 10) ? `0${date.getDate()}` : `${date.getDate()}`;

let year = date.getFullYear()
let month = (date.getMonth() < 10) ? `0${date.getMonth() +1}` : `${date.getMonth() +1}`

let hours = (date.getHours() < 10) ? `0${date.getHours() +1}` : `${date.getHours() +1}`


let currentdate = () => {
    
    setInterval(() => {

        date = new Date();

        let seconds = (date.getSeconds() < 10) ? `0${date.getSeconds() }` : `${date.getSeconds() }`
    
        let minutes = (date.getMinutes() < 10) ? `0${date.getMinutes() }` : `${date.getMinutes() }`
    
        let displaydate = `${days}-${month}-${year} ${hours}-${minutes}-${seconds}`
        
        document.getElementById('time').innerHTML= displaydate;
    
    }, 1000);

}

currentdate()


























