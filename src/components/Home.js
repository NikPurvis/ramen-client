import IndexRamen from "./ramen/IndexRamen"
import { Container } from "react-bootstrap"

const Home = (props) => {
	const { user, msgAlert } = props

	return (
		<>
		<Container>
			<IndexRamen user={user} msgAlert={msgAlert} />
		</Container>
		</>
	)
}

export default Home
