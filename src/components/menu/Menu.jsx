import React from 'react'
import './menu.css'

export default function Menu({ menuOpen, setMenuOpen }) {
	return (
		<div className={'menu ' + (menuOpen && 'active')}>
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#intro'>Home</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#works'>Work</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#testimonials'>Testimonial</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</div>
	)
}
