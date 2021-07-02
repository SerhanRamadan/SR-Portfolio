import React from 'react'
import './navbar.css'

export default function Navbar() {
	return (
		<div className='navbar' id='navbar'>
			<div className='wrapper'>
				<div className='left'>
					<a href='#intro'>
						<img src={process.env.PUBLIC_URL + '/logo.svg'} alt='' />
					</a>
				</div>
				<div className='center'>
					<ul>
						<li>
							<a href='#intro'>Home</a>
						</li>
						<li>
							<a href='#portfolio'>Portfolio</a>
						</li>
						<li>
							<a href='#work'>Work</a>
						</li>
						<li>
							<a href='#testimonial'>Testimonial</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
				</div>
				<div className='right'>
					<div className='socialMedia'>
						<h2>Social Media</h2>
					</div>
				</div>
			</div>
		</div>
	)
}
