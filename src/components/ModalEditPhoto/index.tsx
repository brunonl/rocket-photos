import { Button, Modal } from 'react-bootstrap'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const fieldsValidationSchema = yup.object().shape({
	title: yup.string(),
})

interface FormValues {
	title: string
}

interface DynamicModalProps {
	title: string
	show: boolean
	handleClose: Function
	handleOnEdit: Function
}

export default function ModalEditPhoto({
	title,
	show,
	handleClose,
	handleOnEdit,
}: DynamicModalProps) {
	const { register, handleSubmit } = useForm<FormValues>({
		resolver: yupResolver(fieldsValidationSchema),
	})

	async function handleEdit(data: FormValues) {
		const sendData: any = {}
		sendData.title = data.title

		handleOnEdit(sendData)
	}

	return (
		<Modal show={show} onHide={() => handleClose()}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<form onSubmit={handleSubmit(handleEdit)}>
				<Modal.Body>
					<div className="mb-3">
						<label className="form-label w-100">
							Título
							<input
								type="text"
								className="form-control"
								id="name"
								{...register('title')}
							/>
						</label>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" variant="secondary">
						Editar
					</Button>
				</Modal.Footer>
			</form>
		</Modal>
	)
}
