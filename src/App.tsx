import { FC } from 'react'
import Layout from './containers/Layout/Layout'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'

const App: FC = () => {
	return (
		<div className='container'>
			<Layout
				aside={<Aside />}
				header={<Header />}
				footer={<Footer />}
				main={<Main />}
			/>
		</div>
	)
}

export default App
