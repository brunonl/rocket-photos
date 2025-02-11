import { Button, Modal } from 'react-bootstrap'

interface DynamicModalProps {
	title: string
	description: string
	show: boolean
	handleClose: Function
	handleOnConfirmation: Function
}

export default function DynamicModal({
	title,
	description,
	show,
	handleClose,
	handleOnConfirmation,
}: DynamicModalProps) {
	return (
		<Modal show={show} onHide={() => handleClose()}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{description}</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={() => handleClose()}>
					Não
				</Button>
				<Button variant="secondary" onClick={() => handleOnConfirmation()}>
					Sim
				</Button>
			</Modal.Footer>
		</Modal>
	)
}
