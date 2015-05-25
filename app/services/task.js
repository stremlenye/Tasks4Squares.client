/* task.js
* task service
*/

import Http from 'immutable-http'
import settings from 'settings'

// TODO requests difinition could be moved to constants or somewhere else
const tasksResource = new Http().withJsonResponse()
                              .withUrl(settings.api.url + '/tasks')

const taskConcreteResource = tasksResource
                              .withUrl(settings.api.url + '/tasks/:id')

const loadList = tasksResource.withMethod('GET')

const addTask = tasksResource.withMethod('POST')
                        .withJsonBody()

const updateTask = taskConcreteResource.withMethod('PUT')
                            .withJsonBody()

const deleteTask = taskConcreteResource.withMethod('DELETE')

const task = {}

task.list = () => {
  return loadList.exec()
}

task.add = (text, priority) => {
  return addTask.withBody({text, priority}).exec()
}

task.update = (id, text, priority) => {
  return updateTask.withDynamicSection('id', id)
                    .withBody({text, priority})
                    .exec()
}

task.delete = (id) => {
  return deleteTask.withDynamicSection('id', id).exec()
}

export default task
