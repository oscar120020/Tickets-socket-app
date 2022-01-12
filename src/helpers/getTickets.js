export const getLatestTickets = async() => {
    const response = await fetch("http://localhost:8080/api/latest");
    const data = await response.json();

    return data;
}
