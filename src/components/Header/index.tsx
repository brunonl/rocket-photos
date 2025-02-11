import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	return (
		<header>
			<Navbar className="navbar__rp">
				<Container>
					<Link href="/dashboard/users">
						<Image
							src={'/assets/img/logo.png'}
							alt={'Logo'}
							width={180}
							height={55}
						/>
					</Link>
				</Container>
			</Navbar>
		</header>
	)
}
