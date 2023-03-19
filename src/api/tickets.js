export const getTickets = () => {
    const accessToken = localStorage.getItem('access')
    return fetch(`${process.env.REACT_APP_API_URL}/tickets/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
    }).then(response => response.json());
}

export const getTicket = (id) => {
    const accessToken = localStorage.getItem('access')
    return fetch(`${process.env.REACT_APP_API_URL}/tickets/${id}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
    }).then(response => response.json());
}


export const deleteTicket = (id) => {
    const accessToken = localStorage.getItem('access')
    return fetch(`${process.env.REACT_APP_API_URL}/tickets/${id}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
    }).then(response => console.log("deleted"));
}

export const updateTicket = (ticket) => {
    const accessToken = localStorage.getItem('access')
    return fetch(`${process.env.REACT_APP_API_URL}/tickets/${ticket.id}/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(ticket)
    }).then(response => response.json());
}

export const createTicket = ({ zone, priority }) => {
    const accessToken = localStorage.getItem('access')
    return fetch(`${process.env.REACT_APP_API_URL}/tickets/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({ zone, priority }),
    }).then(response => response.json());
}
