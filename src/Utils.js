export default function formatAmount(value) {
    const formatter = new Intl.NumberFormat('ru')
    return formatter.format(value) 
  }
  