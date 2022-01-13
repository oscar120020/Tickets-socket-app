export const getTickets = async(endpoint) => {
    const response = await fetch(`http://localhost:8080/api/${endpoint}`);
    const data = await response.json();

    return data;
}
