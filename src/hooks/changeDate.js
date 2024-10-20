export const changeDate = (timestamp) => {

    let date = new Date(timestamp);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const resultDate = `${year}/${month}/${day} ${hours}h ${minutes}m ${seconds}s`

    return resultDate
}