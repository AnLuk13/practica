export async function getSalons() {
    const response = await fetch("http://localhost:3001/salon/");
    const salons = await response.json();
    return salons
}

export async function getSalonById(id) {
    const response = await fetch(`http://localhost:3001/salon/${id}`);
    const salon = await response.json();
    return salon
}