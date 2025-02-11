import axios, { AxiosInstance } from 'axios'

export function getAPIClient(ctx?: any): AxiosInstance {
	const api = axios.create({
		baseURL: 'https://jsonplaceholder.typicode.com',
	})

	api.interceptors.request.use((config) => {
		if (ctx) {
			console.log('Config request //////////////')
			console.log(config)
		}

		return config
	})

	api.interceptors.response.use(
		(success) => {
			if (ctx) {
				console.log('Request //////////////')
				console.log('Status:' + success.status)
				console.log(JSON.stringify(success.data, null, 2))
			}

			return success
		},
		function (error) {
			if (ctx) {
				console.log('Error response //////////////')
				console.log('Status:' + error.response.status)
				console.log(error.response.data)
			}

			return Promise.reject(error)
		},
	)

	return api
}

const apiRequest = (ctx: any, method: any, url: any, request?: any) => {
	const apiConfig = getAPIClient(ctx)

	return apiConfig({
		method,
		url,
		data: request,
	})
		.then((res) => {
			return Promise.resolve(res.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

const get = async (ctx: any, url: string, request?: any) =>
	apiRequest(ctx, 'get', url, request)

const deleteRequest = async (ctx: any, url: string, request: any) =>
	apiRequest(ctx, 'delete', url, request)

const post = async (ctx: any, url: string, request: any) =>
	apiRequest(ctx, 'post', url, request)

const put = async (ctx: any, url: string, request: any) =>
	apiRequest(ctx, 'put', url, request)

const patch = async (ctx: any, url: string, request: any) =>
	apiRequest(ctx, 'patch', url, request)

const API = {
	get,
	delete: deleteRequest,
	post,
	put,
	patch,
}

export { API }
