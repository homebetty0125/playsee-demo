const UseTimePass = (past, type) => {
  if (!past) return ''
  const now = new Date().getTime()
  const time = new Date(past).getTime()
  const currentYear = new Date().getFullYear()
  const pastYear = new Date(past).getFullYear()

  const timePass =
    now - time < 1000 * 60
      ? `${Math.floor((now - time) / 1000)}s`
      : now - time < 1000 * 60 * 60
      ? `${Math.floor((now - time) / (1000 * 60))}m`
      : now - time < 1000 * 60 * 60 * 24
      ? `${Math.floor((now - time) / (1000 * 60 * 60))}h`
      : now - time < 1000 * 60 * 60 * 24 * 7
      ? `${Math.floor((now - time) / (1000 * 60 * 60 * 24))}d`
      : type !== 'fullDate'
      ? `${Math.floor((now - time) / (1000 * 60 * 60 * 24 * 7))}w`
      : now - time < 1000 * 60 * 60 * 24 * 7 * 4
      ? `${Math.floor((now - time) / (1000 * 60 * 60 * 24 * 7))}w`
      : currentYear === pastYear
      ? new Date(past).toLocaleString('en-US', {
          month: 'short',
          day: 'numeric'
        })
      : new Date(past).toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })

  return timePass
}

export default UseTimePass
