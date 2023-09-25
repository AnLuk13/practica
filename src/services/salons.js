import axios from "axios";

export async function getSalons() {
    return axios.get('http://localhost:4000/salon/', {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export async function getSalonById(id) {
    const response = await fetch(`http://localhost:4000/salon/${id}`);
    const salon = await response.json();
    return salon
}