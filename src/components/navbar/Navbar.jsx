import React from 'react'
import './navbar.css'
import SRLogo from '../assets/sr-circle.svg'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Navbar() {
	return (
		<div className='navbar' id='navbar'>
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
						<a href='#'>
							{' '}
							<FaGithub className='github' />{' '}
						</a>
						<a href='#'>
							{' '}
							<FaInstagram className='instagram' />{' '}
						</a>
						<a href='#'>
							{' '}
							<FaLinkedinIn className='linkedin' />{' '}
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
