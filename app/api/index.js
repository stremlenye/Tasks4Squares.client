import Http from 'immutable-http'

const resourceKey = 'resource'

const base = (new Http()).withUrl(`http://localhost:9000/:${resourceKey}`)
  .withHeader('Content-Type', 'application/json')
  .withResponseType('json')
  .withBodyProccessor(JSON.stringify)

const post = base.withMethod('POST')

export const signup = post.withDynamicSegment(resourceKey, 'signup')

export const signin = post.withDynamicSegment(resourceKey, 'signin')
