const users = JSON.parse(localStorage.getItem('users')) || [];


    const user = document.querySelector('#table');
    user.innerHTML = '<tr><th>s.no</th><th>Username</th><th>Email</th><th>age</tr>'; // Reset the table header

    users.forEach((us,index) => {
        const row = document.createElement('tr');
        row.innerHTML =` 
        <td>${index+1}</td>
            <td>${us.name}</td>
            <td>${us.email}</td>
            <td>${us.age}</td>
        `;
        user.appendChild(row);
    });
