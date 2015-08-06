import Http from 'immutable-http'

const resourceKey = 'resource'

const base = (new Http()).url(`http://localhost:9000/:${resourceKey}`)
  .header('Content-Type', 'application/json')
  .responseType('json')
  .bodyProcessor(JSON.stringify)

const get = base.method('GET')
const post = base.method('POST')
const put = base.method('PUT')
const del = base.method('DELETE')

export const signup = post.segment(resourceKey, 'users/register')

export const signin = post.segment(resourceKey, 'signin')

export const createTask = post.segment(resourceKey, 'tasks')

export const updateTask = put.segment(resourceKey, 'tasks/:id')

export const fetchTasks = get.segment(resourceKey, 'tasks')

export const deleteTask = del.segment(resourceKey, 'tasks/:id')
