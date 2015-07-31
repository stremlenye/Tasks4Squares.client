import Http from 'immutable-http'

const resourceKey = 'resource'

const base = (new Http()).url(`http://localhost:9000/:${resourceKey}`)
  .header('Content-Type', 'application/json')
  .responseType('json')
  .bodyProcessor(JSON.stringify)

const post = base.method('POST')

export const signup = post.segment(resourceKey, 'users/register')

export const signin = post.segment(resourceKey, 'signin')

export const createTask = post.segment(resourceKey, 'tasks')
