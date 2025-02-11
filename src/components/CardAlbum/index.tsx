import { useRouter } from 'next/router'
import { Button, Card } from 'react-bootstrap'

interface CardAlbumComponentProps {
	idAlbum: number
	title: string
}

export function CardAlbumComponent({
	idAlbum,
	title,
}: CardAlbumComponentProps) {
	const router = useRouter()

	function handleNavegationPhotos() {
		router.push(`/dashboard/photos/${idAlbum}`)
	}

	return (
		<Card className="card__rp">
			<Card.Img variant="top" src="https://placehold.co/600x400" />
			<Card.Body className="card__rp__body">
				<Card.Text className="card__rp__body__description">{title}</Card.Text>
			</Card.Body>
			<Card.Footer className="card__rp__footer">
				<Button onClick={handleNavegationPhotos} variant="primary me-1">
					Excluir
				</Button>
				<Button onClick={handleNavegationPhotos} variant="primary me-1">
					Editar
				</Button>
				<Button onClick={handleNavegationPhotos} variant="primary">
					Ver fotos
				</Button>
			</Card.Footer>
		</Card>
	)
}
