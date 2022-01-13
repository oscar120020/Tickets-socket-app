const baseUrl = process.env.REACT_APP_API_URL

export const getTickets = async(endpoint) => {
    const response = await fetch(`${baseUrl}/api/${endpoint}`);
    const data = await response.json();

    return data;
}
