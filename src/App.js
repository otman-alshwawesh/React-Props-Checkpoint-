import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar,Container,Nav,NavDropdown,Form,Button,FormControl,Carousel ,Card,} from 'react-bootstrap';
import f1 from "./imagn/f1.jpg"
import f2 from "./imagn/f2.jpg"
import f3 from "./imagn/f3.jpg"
import f4 from "./imagn/f4.jpg"
import ProfileComponent from './profile/ProfileComponent';
const handleName=(name)=>{
  alert(`hi i am ${name}`)
}
function App() {
  return (
    <div className="App">
    <Navbar bg="aquamarine"  className='nav'>
  <Container fluid>
    <Navbar.Brand href="#" className="navbar-brand">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1" className='nav-home'>Home</Nav.Link>
        <Nav.Link href="#action2" className='nav-link'>Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className='bb'>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={f1}
      height="300px"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={f2}
      height="300px"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={f3}
      height="300px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<p className='mm'>
Fast Furious
</p>
<div className='carddiv'>
<Card variant="Dark"
      
      className="mb-2"
    >
      <Card.Header className>Header</Card.Header>
      <Card.Body className=''>
        <Card.Title className=''> Card Title </Card.Title>
        <Card.Text>
        The ninth part witnessed many delays and changes in the date of the presentation, due to the Corona pandemic, which led to the closure of all theaters around the world months ago, and the tenth part of the series was scheduled to be released during 2021, and was also postponed due to the delay in launching the ninth part.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card variant="Dark"
      
      className="mb-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title> Card Title </Card.Title>
        <Card.Text>
        Record revenues achieved by the ninth part of the famous action movie series “Fast and Furious”, which is currently shown as “F9”, in 8 global markets.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card variant="Dark"
      
      className="mb-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title> Card Title </Card.Title>
        <Card.Text>
        The film grossed $70 million in the United States during its first week, topping the American box office, followed by the horror movie "A Quiet Place Part II", which earned $6.2 million during the weekend, and its total revenue exceeded $136 million in 5 weeks.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card variant="Dark"
      
      className="mb-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title> Card Title </Card.Title>
        <Card.Text>
        The "Fast and Furious" film series stars the main heroes, Van Diesel and Michelle Rodriguez, as "Dominic" and his girlfriend "Letty", and they are joined in the ninth part by John Cena and Jordana Brewster to play the role of Dominic's brothers, Natalie Emmanuel, Charlize Theron and Helen. mirin
        </Card.Text>
      </Card.Body>
    </Card>
    <iframe width="853" height="480" src="https://www.youtube.com/embed/vpkRAFpkNv8" title="F9: The Fast Saga | Trailer | Own it 9/7 Digital, 9/21 on 4K UHD, Blu-ray & DVD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
<div className='cc'>
<footer className="page-footer font-small blue pt-4 footer1">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <ProfileComponent handleName={handleName} name="otman alshwawesh" salemborogba="Accounting graduate in 2019
              I work on digital systems with a degree in computer principles" tec="i am programmer">
              <img height="100px" src={f4}></img>
              </ProfileComponent>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Email address :  alshwaweshalsharidi@gmail.com</a>
                </li>
                <li>
                  <a href="#!">Phone Number : 00218925547007</a>
                </li>
                <li>
                  <a href="#!">Other Ph Num : 00218915547007</a>
                </li>
                <li>
                  <a href="#!">Address :  otman-alshwawesh </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <i class="fa-brands fa-instagram-square"></i>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a href="#"> Mangateam.com</a>
        </div>
      </footer>
</div>
    </div>
  );
}

export default App;
