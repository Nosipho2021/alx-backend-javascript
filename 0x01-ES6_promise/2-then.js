function handleResponseFromAPI(promise) {
  const body = { status: 200, body: 'success' };

  return promise
    .then(() => {
      console.log('Got a response from the API');
      return body;
    })
    .catch(() => new Error())
}

export default handleResponseFromAPI;
