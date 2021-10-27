import client from '../providers/api'

export const getTask = () => client.get() 
export const postTask = () => client.post()
export const deleteTask = () => client.delete()