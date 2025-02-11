import { API } from './axios'

export const getUsers = async (ctx: any = null): Promise<any> => {
	try {
		const response = await API.get(ctx, `/users`)

		return response
	} catch (error: any) {
		return Promise.reject(error)
	}
}

export const editUser = async (ctx: any = null, data: any): Promise<any> => {
	try {
		const response = await API.put(ctx, '/users', data)
		return response
	} catch (error: any) {
		return Promise.reject(error)
	}
}

export const createUser = async (ctx: any = null, data: any): Promise<any> => {
	try {
		const response = await API.post(ctx, '/users', data)
		return response
	} catch (error: any) {
		return Promise.reject(error)
	}
}

export const deleteUser = async (
	ctx: any = null,
	userId: string,
): Promise<any> => {
	try {
		const response = await API.delete(ctx, `/users/${userId}`, {})
		return response
	} catch (error: any) {
		return Promise.reject(error)
	}
}
