// Get the dutation in this format h:m:s or m:s
export function getDurations (val) {
  let h = 0,
    m = 0,
    s = 0

  let quatient = Math.floor(val / 60)
  let remainder = val % 60

  if (quatient <= 59) {
    m = quatient
    s = remainder
  } else {
    h = Math.floor(quatient / 60)
    m = quatient % 60
    s = remainder
  }

  return h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`
}
