import { useState, useEffect} from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import coursesData from "../data/coursesData"
import CourseCard from "../components/CourseCard"
import SearchBanner from "../components/SearchBanner"
import Image from "react-bootstrap/Image";

export default function Courses () {
	const [courses, setCourses] = useState([])

	/*const [image1, setImage1] = useState("./public/laptop.gif")

	const [image2, setImage2] = useState("./public/mobile.gif")*/

	const [style, setStyle] =useState({

		width: "15rem",
		height: "10rem"
		
	})


	//console.log(coursesData);
	//console.log(coursesData[0]);
	useEffect(() => {
		//fetch('http://localhost:4000/courses')
		fetch('http://localhost:4000/products')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setCourses(data.map(course => {
	
	return (
		//key used to identify each child
		<CourseCard key={course._id} courseProp={course}/>

	)
	}))
	})
	}, [])

/*const courses = coursesData.map(course => {
	console.log(course)
	return (
		//key used to identify each child
		<CourseCard key={course.id} courseProp={course}/>

	)
})*/

	return (
		<>
			<Container id="prodBanner">
			<Container>
			<Row className="justify-content-center text-center mx-auto my-3">

			<Col xl={3} lg={4}  md={12} className="mx-auto text-center d-none d-md-flex d-lg-block">
			<p className="d-lg-block d-none">This is an advertisement</p>
			<Container>
			<Image src="https://assets.mspimages.in/gear/gif_12_hgaufb.gif" style={style} className="mx-auto text-center d-none d-lg-block"/>
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
			<Image src="https://i.pinimg.com/originals/ec/70/da/ec70da5e912b5faaeba9647b0647d10a.gif" style={style} className="mx-auto text-center d-lg-block d-md-flex"/>
			<Image src="https://assets.mspimages.in/gear/gif_12_hgaufb.gif" style={style} className="mx-auto text-center d-lg-none d-md-flex d-none"/>
			</Container>
			</Col>

			</Row>
			</Container>
			<Container>
			<Row>
			<Col xs={8} md={3} lg={2}  className="text-center mx-auto m-1">
			<Button className="text-center mx-auto p-1 bg-warning text-dark d-block"  as={Link} to="/courses/categoryFood"><h6>Foods &#62;&#62;</h6></Button>
			</Col>
			<Col xs={8} md={3} lg={2}  className="text-center mx-auto m-1">
			<Button className="text-center mx-auto p-1 bg-warning text-dark d-block" as={Link} to="/courses/categoryFood"><h6>Machines &#62;&#62;</h6></Button>
			</Col>
			<Col xs={8} md={3} lg={2}  className="text-center mx-auto m-1">
			<Button className="text-center mx-auto p-1 bg-warning text-dark d-block" as={Link} to="/courses/categoryFood"><h6>Clothing &#62;&#62;</h6></Button>
			</Col>
			<Col xs={8} md={3} lg={2}  className="text-center mx-auto m-1">
			<Button className="text-center mx-auto p-1 bg-warning text-dark d-block" as={Link} to="/courses"><h6>All Products &#62;&#62;</h6></Button>
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
			
		</>
		)
}

