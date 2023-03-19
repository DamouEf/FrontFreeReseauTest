
export const login = ({ username, password }) => {
    return fetch(`${process.env.REACT_APP_API_URL}/api/auth/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    }).then(response => response.json());
}
