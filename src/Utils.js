export default function formatAmount(value) {
    const formatter = new Intl.NumberFormat('ru')
    return formatter.format(value) 
  }
  
export function validatorPassword(value) {
  if (value.length <= 6) {
    return "Password should be > 6 letters"
  }
  return ''
}
  
export function validatorEmail(value) {
  if (/^(\w+)@(\w+).com$/i.test(value)) return ''
  return "Not a valid email"  
}
  