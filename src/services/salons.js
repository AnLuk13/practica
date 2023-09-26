import {salons} from "../DB";

export async function getSalons() {
    return salons;
    // return axios.get('http://localhost:4000/salon/', {
    //     headers: {
    //         "Content-Type" : "application/json"
    //     }
    // })
}

export async function getSalonById(id) {
    const salonById = salons.find((salon) => salon.id === id);
    if (!salonById) {
        return 'A salon with such id does not exist!';
    }
    return salonById;
    // const response = await fetch(`http://localhost:4000/salon/${id}`);
    // const salon = await response.json();
    // return salon
}