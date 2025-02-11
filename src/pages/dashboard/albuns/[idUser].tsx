import { CardAlbumComponent } from '@/components/CardAlbum'
import { getAlbumsByUser } from '@/services/albums'
import { AlbumsAPIResponseProps } from '@/types/AlbumsAPIResponse'
import { GetServerSideProps } from 'next'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface AlbumsProps {
	albums: AlbumsAPIResponseProps[]
}

export default function AlbunsComponent({ albums }: AlbumsProps) {
	const router = useRouter()

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
							<CardAlbumComponent idAlbum={item.id} title={item?.title} />
						</Col>
					))}
			</Row>
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
