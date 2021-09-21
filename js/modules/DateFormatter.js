class DateFormatter extends Date{
  getFormattedDate(){
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'Juyl', 'August', 'September', 'October', 'November', 'December']

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'
    ,'Friday','Saturday']
    //  return `${this.getDate()}- ${months[this.getMonth()]}-${this.getFullYear()}`

    return `${days[this.getDay()]} ${months[this.getMonth()]}, ${this.getMonth()}`
  }
}

export default DateFormatter