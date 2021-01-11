
export function timeNow() {
    let today = new Date();
    
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    let time = today.getHours() + ":" + today.getMinutes();
    
    let dateTime = time+' '+date;

    return dateTime
}