exports.handler = async (event) => {
    try {
      // Any logic goes here, but we'll return a fixed response
      return { statusCode: 200, body: JSON.stringify({ message: 'ok' }) }
    } catch (err) {
      return { statusCode: 500, body: String(err) }
    }
  }