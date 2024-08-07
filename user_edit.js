// Function to render the user list
function renderUserList() {
    try {
        var users = JSON.parse(localStorage.getItem('users')) || [];
        if (!Array.isArray(users)) {
            users = [];
        }
    } catch (e) {
        users = [];
    }

    const userTableBody = document.querySelector('#table');
    userTableBody.innerHTML = ''; // Clear the table body
    const row = document.createElement('tr');
            row.innerHTML = `
            <th>S.No</th>
            <th>name</th>
            <th>email</th>
            <th>age</th>
            <th>password</th>
            <th>Edit</button></td>
            <th>Delete</button></td>
        `;
        userTableBody.appendChild(row);
        
        

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${index+1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>${user.password}</td>
            <td><button class="edit" data-index="${index}">Edit</button></td>
            <td><button class="delete" data-index="${index}">Delete</button></td>
        `;
        userTableBody.appendChild(row);
    });

    // Add event listeners for edit and delete buttons
    document.querySelectorAll('.edit').forEach(button => {
        button.addEventListener('click', editUser);
    });

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', deleteUser);
    });
}

// Function to edit a user
function editUser(event) {
    event.preventDefault();
    const index = this.getAttribute('data-index');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users[index];

    

    const name = prompt('Enter new username:', user.name);
    const email = prompt('Enter new email:', user.email);
    const password = prompt('Enter new password:', user.password);

    if (name && email && password) {
        users[index] = { name, email, password };
        localStorage.setItem('users', JSON.stringify(users));
        renderUserList();
    } else {
        alert('All fields are required.');
    }
}

// Function to delete a user
function deleteUser(event) {
    event.preventDefault();
    const index = this.getAttribute('data-index');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1); // Remove the user from the array
    localStorage.setItem('users', JSON.stringify(users)); // Save the updated users array to localStorage
    renderUserList(); // Re-render the user list
}

// Initial call to render the user list
renderUserList();
