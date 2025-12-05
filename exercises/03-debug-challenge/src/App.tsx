import { useState, useEffect } from 'react'
import './App.css'

interface User {
  id: number
  name: string
  email: string
  role: string
}

// Mock API function to simulate fetching users
const fetchUsers = async (): Promise<User[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500))

  return [
    { id: 1, name: 'Anna Hansen', email: 'anna@example.com', role: 'Developer' },
    { id: 2, name: 'Erik Johansen', email: 'erik@example.com', role: 'Designer' },
    { id: 3, name: 'Sofia Berg', email: 'sofia@example.com', role: 'Manager' },
  ]
}

// Mock API function to simulate adding a user
const addUserToAPI = async (user: Omit<User, 'id'>): Promise<User> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300))

  // Return user with a new ID
  return {
    ...user,
    id: Date.now()
  }
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [newUserName, setNewUserName] = useState('')
  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserRole, setNewUserRole] = useState('')

  // BUG 1: useEffect infinite loop
  // TODO: Something seems off here - check the Network tab
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true)
      const data = await fetchUsers()
      setUsers(data)
      setLoading(false)
    }

    loadUsers()
  }, [setUsers]) // Including setUsers in dependencies causes infinite loop!

  // BUG 3: async/await bug - not awaiting the promise properly
  // TODO: Something seems off here - does the new user appear immediately?
  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newUserName || !newUserEmail || !newUserRole) {
      alert('Please fill in all fields')
      return
    }

    const newUser = {
      name: newUserName,
      email: newUserEmail,
      role: newUserRole
    }

    // Not awaiting! This causes a race condition
    addUserToAPI(newUser)

    // BUG 4: State mutation - directly pushing to array
    // TODO: Something seems off here - React might not detect this change
    users.push({
      id: 0, // Temporary ID - will be replaced by API
      ...newUser
    })
    setUsers(users) // Setting the same reference won't trigger re-render!

    // Clear form
    setNewUserName('')
    setNewUserEmail('')
    setNewUserRole('')
  }

  if (loading) {
    return <div className="loading">Loading users...</div>
  }

  return (
    <div className="app">
      <h1>User Management</h1>

      <div className="container">
        <div className="user-list">
          <h2>Current Users</h2>
          {users.length === 0 ? (
            <p>No users found</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id} className="user-item">
                  <div className="user-info">
                    <h3>{user.name}</h3>
                    <p className="email">{user.email}</p>
                    {/* BUG 2: CSS specificity issue - role badge styling conflict */}
                    <span className="badge role-badge">{user.role}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="add-user-form">
          <h2>Add New User</h2>
          <form onSubmit={handleAddUser}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                placeholder="Enter name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={newUserEmail}
                onChange={(e) => setNewUserEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role:</label>
              <input
                type="text"
                id="role"
                value={newUserRole}
                onChange={(e) => setNewUserRole(e.target.value)}
                placeholder="Enter role"
              />
            </div>

            <button type="submit" className="submit-button">
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
