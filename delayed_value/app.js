window.addEventListener('message', async function (event) {
  const {
    origin,
    data: { key, params },
  } = event
  console.log('Message', origin, key, params)
  const [value, delay] = params
  if (!value || !delay) {
    respond('Missing params')
  } else {
    setTimeout(() => respond(value.value), delay.value)
  }

  function respond(result) {
    const response = { key }
    if (result !== undefined) {
      response.result = { type: 'string', value: result }
    }
    event.source.postMessage(response, '*')
  }
})

