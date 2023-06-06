import jwt_decode from 'jwt-decode';

export function getUserFromToken() {
    const token = sessionStorage.getItem('token');

    if (!token) {
        return null;
    }

    const decodedToken = jwt_decode(token);

    return decodedToken;
}
