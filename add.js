function add(n){
  const func = (b) => add(n + b)
  func.valueOf = () => n
  return func
}