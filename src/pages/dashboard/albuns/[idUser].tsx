import { CardAlbumComponent } from '@/components/CardAlbum'
import { deleteAlbum, getAlbumsByUser } from '@/services/albums'
import { AlbumsAPIResponseProps } from '@/types/AlbumsAPIResponse'
import { GetServerSideProps } from 'next'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'
import DynamicModal from '@/components/DynamicModal'
import { useState } from 'react'
import { toast } from 'react-toastify'

interface AlbumsProps {
	albums: AlbumsAPIResponseProps[]
}

export default function AlbunsComponent({ albums }: AlbumsProps) {
	const router = useRouter()

	const [showDeletionModal, setShowDeletionModal] = useState(false)
	const [currentAlbumID, setCurrentAlbumID] = useState(0)

	const handleCloseDeletionModal = () => setShowDeletionModal(false)
	const handleShowDeletionModal = (idAlbum: number) => {
		setCurrentAlbumID(idAlbum)
		setShowDeletionModal(true)
	}

	async function handleDeleteAlbum() {
		await deleteAlbum(null, currentAlbumID).then(
			() => {
				handleCloseDeletionModal()
				toast.success('Album deletado com sucesso', {
					position: 'top-right',
					theme: 'colored',
				})
			},
			() => {
				handleCloseDeletionModal()
				toast.error('Erro ao deletar album ', {
					position: 'top-right',
					theme: 'colored',
				})
			},
		)
	}

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="mb-4">
						<Image
							className="me-3 mb-1 c-pointer"
							src={'/assets/img/icons/ic-arrow-back.png'}
							alt={'Logo'}
							width={18}
							height={25}
							onClick={() => router.back()}
						/>
						Albuns
					</h1>
				</Col>
				<Col className="text-end">
					<Button variant="secondary me-1">Adicionar Album</Button>
				</Col>
			</Row>

			<Row>
				{albums.length > 0 &&
					albums.map((item) => (
						<Col key={item.id} xs={12} sm={6} lg="4" xl={3}>
							<CardAlbumComponent
								idAlbum={item.id}
								title={item?.title}
								handleDeleteAlbum={handleShowDeletionModal}
							/>
						</Col>
					))}
			</Row>

			<DynamicModal
				title="Confimarção"
				description="Realmente deseja excluir o album?"
				handleClose={handleCloseDeletionModal}
				handleOnConfirmation={handleDeleteAlbum}
				show={showDeletionModal}
			/>
		</Container>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const idUser: any = ctx?.params?.idUser
	console.log('idUser', idUser)

	try {
		const response = await getAlbumsByUser(ctx, idUser)

		return {
			props: { albums: response, error: null },
		}
	} catch {
		return {
			props: {
				users: [],
			},
		}
	}
}
