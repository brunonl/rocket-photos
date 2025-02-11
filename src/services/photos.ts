import { API } from './axios'

export const getPhotosByAlbum = async (
	ctx: any = null,
	idAlbum: string,
): Promise<any> => {
	try {
		const response = await API.get(ctx, `/albums/${idAlbum}/photos`)

		return response
	} catch (error: any) {
		return Promise.reject(error)
	}
}

export const editPhoto = async (
	ctx: any = null,
	photoId: number,
	data: any,
): Promise<any> => {
	photoId.toString()
	try {
		const response = await API.put(ctx, '/photos/5', data)
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

export const deletePhoto = async (
	ctx: any = null,
	photoId: number,
): Promise<any> => {
	try {
		const response = await API.delete(ctx, `/photos/${photoId}`, {})
		return response
	} catch (error: any) {
		return Promise.reject(error)
	}
}
