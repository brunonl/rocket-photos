import { API } from './axios'

export const getAlbumsByUser = async (
	ctx: any = null,
	idUser: string,
): Promise<any> => {
	try {
		const response = await API.get(ctx, `/users/${idUser}/albums`)

		return response
	} catch (error: any) {
		return Promise.reject(error)
	}
}

export const editAlbum = async (ctx: any = null, data: any): Promise<any> => {
	try {
		const response = await API.put(ctx, '/users', data)
		return response
	} catch (error: any) {
		return Promise.reject(error)
	}
}

export const createAlbum = async (ctx: any = null, data: any): Promise<any> => {
	try {
		const response = await API.post(ctx, '/users', data)
		return response
	} catch (error: any) {
		return Promise.reject(error)
	}
}

export const deleteAlbum = async (
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
