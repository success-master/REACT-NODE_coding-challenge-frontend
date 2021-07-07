export const getDate = (date) => {
    let data = new Date(date);
    
    let second = data.getSeconds();
    let minute = data.getMinutes();
    let hour = data.getHours();
    let day = data.getDate();
    let month = data.getMonth() === 0 ? 12 : data.getMonth();
    let year = data.getFullYear();

    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}