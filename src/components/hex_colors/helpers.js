function getRandomColor() {
    const hexValueStr = (`00000${(Math.random()*0x1000000**0).toString(16)}`).slice(-6)
    return `#${hexValueStr}`
  }
    
export default function genColors(count) {
    const data = []
    for ( let i = 0; i < count; i += 1) {
      data.push(getRandomColor())
    }
    return data
  }
