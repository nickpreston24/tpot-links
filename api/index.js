export default function handler(request, response) {
  console.log('serverless function request :>>', request)
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    message: 'You are here'
  })
}
