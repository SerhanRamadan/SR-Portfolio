import './navbar.scss'

export default function Navbar() {
	return (
		<div className='navbar' id='navbar'>
			<div className='wrapper'>
				<div className='left'>
					<a href='#intro' className='logo'>
						SR.
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
					<div className='socialMedia'></div>
				</div>
			</div>
		</div>
	)
}
