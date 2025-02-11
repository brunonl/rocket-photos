import { useRouter } from 'next/router'
import { Button, Card } from 'react-bootstrap'

interface CardUserComponentProps {
	idUser: number
	name: string
	email: string
}

export function CardUserComponent({
	idUser,
	name,
	email,
}: CardUserComponentProps) {
	const router = useRouter()

	function handleNavegationAlbuns() {
		router.push(`/dashboard/albuns/${idUser}`)
	}

	return (
		<Card className="card__rp">
			<Card.Body className="card__rp__body">
				<Card.Title className="card__rp__body__title">{name}</Card.Title>
				<Card.Text className="card__rp__body__description">{email}</Card.Text>
			</Card.Body>
			<Card.Footer className="card__rp__footer">
				<Button onClick={handleNavegationAlbuns} variant="primary">
					Ver albuns
				</Button>
			</Card.Footer>
		</Card>
	)
}
