window.addEventListener('message', async function (event) {
  const {
    origin,
    data: { key, params },
  } = event
  console.log('Params', params)
  const [repeat, interval] = params
  let ctr = 0
  let timer
  if (!repeat || !interval) {
    respond(false)
  } else {
    timer = setInterval(() => respond(ctr%2), interval.value)
  }

  function respond(result) {
    if(++ctr === repeat.value) clearInterval(timer)
    const response = { key }
    if (result !== undefined) {
      response.result = { type: 'boolean', value: result }
    }
    event.source.postMessage(response, '*')
    // console.log(result, '*')
  }
})

