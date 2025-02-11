import { Button, Card } from 'react-bootstrap'

interface CardPhotosComponentProps {
	idPhoto: number
	title: string
	handleDeletePhoto: Function
	handleEditPhoto: Function
}

export function CardPhotosComponent({
	idPhoto,
	title,
	handleDeletePhoto,
	handleEditPhoto,
}: CardPhotosComponentProps) {
	return (
		<Card className="card__rp">
			<Card.Img variant="top" src="https://placehold.co/600x400" />
			<Card.Body className="card__rp__body">
				<Card.Text className="card__rp__body__description">{title}</Card.Text>
			</Card.Body>
			<Card.Footer className="card__rp__footer">
				<Button
					onClick={() => handleDeletePhoto(idPhoto)}
					variant="primary me-1"
				>
					Excluir
				</Button>
				<Button onClick={() => handleEditPhoto(idPhoto)} variant="primary me-1">
					Editar
				</Button>
			</Card.Footer>
		</Card>
	)
}
