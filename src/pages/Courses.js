import { useState, useEffect,useContext} from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import {Link, Navigate} from 'react-router-dom'
import CourseCard from "../components/CourseCard"
import SearchBanner from "../components/SearchBanner"
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'
import Advertisement from '../components/Advertisement'

export default function Courses () {
	const [courses, setCourses] = useState([])

	const {user} = useContext(UserContext)

	useEffect(() => {
		//fetch('http://localhost:4000/courses')
		fetch('https://immense-lake-17505.herokuapp.com/products')
		.then(res => res.json())
		.then(data => {
			//console.log(data)
			setCourses(data.map(course => {
	
	return (
		//key used to identify each child
		<CourseCard key={course._id} courseProp={course}/>

	)
	}))
	})
	}, [])

	return (
		(user.isAdmin === true)?

		<Navigate to="/products/adminProducts"/>

		:
		<>
			<Container id="prodBanner" className="products-banner">
			<Container>
			<Row className="justify-content-center text-center mx-auto my-3">

			<Col xl={3} lg={4}  md={12} className="mx-auto text-center d-none d-md-flex d-lg-block">
			<p className="d-lg-block d-none">This is an advertisement</p>
			<Container>
			<Image src="https://assets.mspimages.in/gear/gif_12_hgaufb.gif" /*style={style}*/ className="mx-auto text-center d-none d-lg-block image-advertisement"/>
			</Container>
			</Col>

			<Col xl={6} lg={4} xs={12} className="mx-auto text-center "  id="top-body">
			<h1 className="text-center p-3 text-danger">WELCOME !</h1>
			<p  className="text-center pb-3 text-danger">Check out the latest items on the shop today!</p>
			</Col>
			<p className="d-lg-none d-block">This is an advertisement</p>
			<Col xl={3} lg={4} md={12} className="mx-auto text-center d-lg-block d-flex">
			<p className="d-none d-lg-block">This is an advertisement</p>
			<Container className="d-flex justify-content-center text-center d-lg-block">
			<Image src="https://i.pinimg.com/originals/ec/70/da/ec70da5e912b5faaeba9647b0647d10a.gif" /*style={style}*/ className="mx-auto text-center d-lg-block d-md-flex image-advertisement"/>
			<Image src="https://assets.mspimages.in/gear/gif_12_hgaufb.gif" /*style={style}*/ className="mx-auto text-center d-lg-none d-md-flex d-none image-advertisement"/>
			</Container>
			</Col>

			</Row>
			</Container>
			<Container>
			<Row>
			<Col xs={8} md={3} lg={2}  className="text-center mx-auto m-1">
			<Button className="text-center mx-auto p-1 bg-warning text-dark d-block"  as={Link} to="/products/categoryFood"><h6>Foods &#62;&#62;</h6></Button>
			</Col>
			<Col xs={8} md={3} lg={2}  className="text-center mx-auto m-1">
			<Button className="text-center mx-auto p-1 bg-warning text-dark d-block" as={Link} to="/products/categoryFood"><h6>Machines &#62;&#62;</h6></Button>
			</Col>
			<Col xs={8} md={3} lg={2}  className="text-center mx-auto m-1">
			<Button className="text-center mx-auto p-1 bg-warning text-dark d-block" as={Link} to="/products/categoryFood"><h6>Clothing &#62;&#62;</h6></Button>
			</Col>
			<Col xs={8} md={3} lg={2}  className="text-center mx-auto m-1">
			<Button className="text-center mx-auto p-1 bg-warning text-dark d-block" as={Link} to="/products"><h6>All Products &#62;&#62;</h6></Button>
			</Col>
			</Row>
			</Container>
			</Container>
		{/*courseProp parameter can be named anything*/}
			{/*<CourseCard courseProp={}/>*/}
			<SearchBanner/>
			<Row className="justify-content-md-center">
			{courses}
			</Row>

			<Advertisement/>
			
		</>
		)
}

