import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reset from 'styled-reset';
import GlobalStyle from './style/global';
import ButtonStyle from './style/button';
import Header from './components/Header'
import Homepage from './pages/Homepage';
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import Postview from './pages/Postview';

const ResetStyle = createGlobalStyle`
	${reset}
`


function App() {
	const [data, setData] = useState([]);
  	useEffect(() => {
		const fetchData = () => {
		fetch('/data.json')
		.then(res => res.json())
		.then(resData => {
			setData(resData)
		})
	}
  	fetchData();
    }, [])
	console.log(data);
	return (
		<>
		<BrowserRouter>
			<ResetStyle/>
			<GlobalStyle />
			<ButtonStyle />
			<Header />
			<Switch>
				<Route path='/' exact>
					<Homepage />
				</Route>
				<Route path='/postview' component={Postview}>
					
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
		</>
	)

}

export default App;
