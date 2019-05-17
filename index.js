exports.parse = function(obj = {}) {
  let str = ''

  Object.keys(obj).forEach(k => {
    const val = obj[k]
    str +=
      typeof val === 'object'
        ? `${k}=${JSON.stringify(val)}\n`
        : `${k}=${val}\n`
  })

  return str
}
