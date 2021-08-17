window.addEventListener('message', async function (event) {
  const {
    origin,
    data: { key, params },
  } = event
  console.log('Message', origin, key, params)
  const [value, delay] = params
  if (!value || !delay) return 'Missing params'
  setTimeout(() => event.source.postMessage(value.value, '*'), delay.value)
})
