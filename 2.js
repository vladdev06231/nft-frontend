function formatDate(utcTimeString) {
    const date = new Date(utcTimeString);
    const options = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate.replace('at', '|');
}

// Example usage:
const utcTimeString = "2024-05-07T03:12:58.685+00:00";
console.log(formatDate(utcTimeString)); // Output: May 7, 2024 | 03:12:58 AM