import { CardUserComponent } from '@/components/CardUser'
import { getUsers } from '@/services/users'
import { UsersAPIResponseProps } from '@/types/UsersAPIResponse'
import { GetServerSideProps } from 'next'
import { Col, Container, Row } from 'react-bootstrap'

interface UserProps {
	users: UsersAPIResponseProps[]
}

export default function Users({ users }: UserProps) {
	const emptyMessage = 'Não há dados para serem exibidos'

	return (
		<Container>
			<h1 className="mb-4">Usuários</h1>
			<Row>
				{users.length > 0 ? (
					users.map((item) => (
						<Col key={item.id} xs={12} sm={6} lg={3}>
							<CardUserComponent
								idUser={item.id}
								name={item?.name}
								email={item?.email}
							/>
						</Col>
					))
				) : (
					<p>{emptyMessage}</p>
				)}
			</Row>
		</Container>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const response = await getUsers(ctx)

		return {
			props: { users: response, error: null },
		}
	} catch {
		return {
			props: {
				users: [],
			},
		}
	}
}
