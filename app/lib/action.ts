/**
 * common util class for fetching data from database
 * 
 */
export default async function getUsers() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await users.json();
    return data;
}