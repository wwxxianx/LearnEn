export function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email) 
}

export function isValidPassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)
}

export function isValidName(name) {
    return name.trim().length >= 3;
}

export function isValidAge(age) {
    return age > 0;
}