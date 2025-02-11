import { CardPhotosComponent } from '@/components/CardPhotos'
import DynamicModal from '@/components/DynamicModal'
import ModalEditPhoto from '@/components/ModalEditPhoto'
import { deletePhoto, editPhoto, getPhotosByAlbum } from '@/services/photos'
import { PhotosAPIResponseProps } from '@/types/PhotosAPIResponse'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

interface PhotoProps {
	photos: PhotosAPIResponseProps[]
}

export default function PhotosComponent({ photos }: PhotoProps) {
	const router = useRouter()

	const [showEditModal, setShowEditModal] = useState(false)
	const [showDeletionModal, setShowDeletionModal] = useState(false)
	const [currentPhotoID, setCurrentPhotoID] = useState(0)

	const handleCloseDeletionModal = () => setShowDeletionModal(false)
	const handleShowDeletionModal = (idPhoto: number) => {
		setCurrentPhotoID(idPhoto)
		setShowDeletionModal(true)
	}

	const handleCloseEditModal = () => setShowEditModal(false)
	const handleShowEditModal = (idPhoto: number) => {
		setCurrentPhotoID(idPhoto)
		setShowEditModal(true)
	}

	async function handleEditPhoto(data: any) {
		await editPhoto(null, currentPhotoID, JSON.stringify(data)).then(
			() => {
				handleCloseEditModal()
				toast.success('Foto deletada com sucesso', {
					position: 'top-right',
					theme: 'colored',
				})
			},
			() => {
				handleCloseEditModal()
				toast.error('Erro ao deletar foto ', {
					position: 'top-right',
					theme: 'colored',
				})
			},
		)
	}

	async function handleDeletePhoto() {
		await deletePhoto(null, currentPhotoID).then(
			() => {
				handleCloseDeletionModal()
				toast.success('Foto deletada com sucesso', {
					position: 'top-right',
					theme: 'colored',
				})
			},
			() => {
				handleCloseDeletionModal()
				toast.error('Erro ao deletar foto ', {
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
						Fotos
					</h1>
				</Col>
				<Col className="text-end">
					<Button variant="secondary me-1">Adicionar Foto</Button>
				</Col>
			</Row>
			<Row>
				{photos.length > 0 ? (
					photos.map((item) => (
						<Col key={item.id} xs={12} sm={6} lg="4" xl={3}>
							<CardPhotosComponent
								idPhoto={item?.id}
								title={item?.title}
								handleDeletePhoto={handleShowDeletionModal}
								handleEditPhoto={handleShowEditModal}
							/>
						</Col>
					))
				) : (
					<p>{emptyMessage}</p>
				)}
			</Row>

			<DynamicModal
				title="Confimarção"
				description="Realmente deseja excluir a foto?"
				handleClose={handleCloseDeletionModal}
				handleOnConfirmation={handleDeletePhoto}
				show={showDeletionModal}
			/>

			<ModalEditPhoto
				title="Editar foto"
				handleClose={handleCloseEditModal}
				handleOnEdit={handleEditPhoto}
				show={showEditModal}
			/>
		</Container>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const idAlbum: any = ctx?.params?.idAlbum
	console.log('idAlbum', idAlbum)

	try {
		const response = await getPhotosByAlbum(ctx, idAlbum)

		return {
			props: { photos: response, error: null },
		}
	} catch {
		return {
			props: {
				photos: [],
			},
		}
	}
}
