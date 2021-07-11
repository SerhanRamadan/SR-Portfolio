import React from 'react'
import './navbar.css'
import SRLogo from '../assets/sr-circle.svg'
import { FaGithub, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa'

export default function Navbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={'navbar ' + (menuOpen && 'active')} id='navbar'>
			<div className='wrapper'>
				<div className='left'>
					<a href='#intro'>
						<img src={SRLogo} alt='SR Coding Logo' />
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
						<a href='#intro'>
							<FaGithub className='github' />
						</a>
						<a href='#intro'>
							<FaInstagramSquare className='instagram' />
						</a>
						<a href='#intro'>
							<FaLinkedinIn className='linkedin' />
						</a>
					</div>
					{/* Hamburger Menu to be imported to media query */}
					<div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
						<span className='line1'></span>
						<span className='line2'></span>
						<span className='line3'></span>
					</div>
				</div>
			</div>
		</div>
	)
}
