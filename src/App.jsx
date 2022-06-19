import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Header from './components/Header'

const GlobalStyle = createGlobalStyle`
	${reset}
`

function App() {
	return (
		<>
		{/* <Header></Header> */}
		<GlobalStyle/>
		<h1>hello h1</h1>
		</>
	)

}

export default App;
