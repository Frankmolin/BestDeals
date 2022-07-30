import React from 'react'

function FormateTimestamp(time:any) {
    var date = new Date(time*1000)
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

export default FormateTimestamp