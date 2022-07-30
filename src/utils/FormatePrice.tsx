function FormatePrice(int:number) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
    return  formatter.format(int)
}

export default FormatePrice