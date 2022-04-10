import IndexRamen from "./ramen/IndexRamen"

const Home = (props) => {
	const { user, msgAlert } = props

	return (
		<>
			<h2>Home Page</h2>
			<IndexRamen user={user} msgAlert={msgAlert} />
		</>
	)
}

export default Home
