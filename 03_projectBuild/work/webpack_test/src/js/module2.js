function sum(...args) {
  return args.reduce((previousValue, currentValue)=>{
    return previousValue + currentValue; //previousValue默认是0
  })
}

export default sum;