window.addEventListener('message', async function (event) {
  const {
    origin,
    data: { key, params },
  } = event
  console.log('Message', key, params)
  const [delay] = params
  let ctr = 0
  let timer
  if (!delay) {
    respond(false)
  } else {
    setTimeout(() => respond(true), delay.value)
  }

  function respond(result) {
    const response = { key }
    if (result !== undefined) {
      response.result = { type: 'boolean', value: result }
    }
    event.source.postMessage(response, '*')
    // console.log(result, '*')
  }
})

