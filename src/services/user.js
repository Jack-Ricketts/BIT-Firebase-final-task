import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";
// Import the functions you need from the SDKs you need

const User = {
    users: {},
    create(username, password, data = {}) {
        User.users[username] = {username, password, ...data};
    },
    verify(username, password) {
        return User.users[username].password == password
    },
    get(username) {
        return {...User.users[username], password: undefined};
    },
    changePassword(username, newPassword) {
        User.users[username].password = newPassword;
    },
    firebaseSignIn: async (username, password) => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, username, password)
    }}

User.users['Vardenis'] = {username: 'Vardenis', password: 'pavardenis'};
User.users['user'] = {username: 'user', password: 'user'};

export default User;