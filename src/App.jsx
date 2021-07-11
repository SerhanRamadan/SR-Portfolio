import React from 'react'

import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import '../src/app.css'
import '../src/globals.css'
import { useState } from 'react'

function App() {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<div className='app'>
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			{/* Side menu to be imported for media query */}
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className='sections'>
				<Intro />
				<Portfolio />
				<Testimonials />
				<Works />
				<Contact />
			</div>
		</div>
	)
}

export default App
