var employees = [
    { id: 18521 , name:'john wick', email:'john@gmail.com',phone:'88552233' },
    { id: 18522 , name:'jason stathem', email:'jason@gmail.com',phone:'88552233' },
    { id: 18523 , name:'Alex test', email:'alet@gmail.com',phone:'88552233' },
    { id: 18524 ,name:'taher chourabi', email:'tchourabi@gmail.com',phone:'88552233' }, 
];

var employeesList = document.getElementById('employees-list');


employees.map((e)=>{

    const blocHTML = `
    <li>
        <h3>${e.name}</h3>
        <p><small>${e.email} / ${e.phone}</small></p>
        <a href="employee.html?id=${e.id}">voir plus</a>
    </li>
    `;

    employeesList.innerHTML = employeesList.innerHTML + blocHTML;
})

/**
 * search
'?id=18524&dep=18'
search.split('?')
(2) ['', 'id=18524&dep=18']
search.split('?')[1]
'id=18524&dep=18'
search.split('?')[1].split('&')
(2) ['id=18524', 'dep=18']
search.split('?')[1].split('&')[0]
'id=18524'
search.split('?')[1].split('&')[0].spl
undefined
search.split('?')[1].split('&')[0].split("=")
(2) ['id', '18524']
search.split('?')[1].split('&')[0].split("=")[1]
'18524'
 */