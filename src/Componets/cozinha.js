import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from "./navbar"
import '../index.css'

function KitchenSinkExample() {

  return (
    <>
    <Navbar/>
    <div className='container'>
        <div className='cozinha'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="hamburguer02.jpg" />
      <Card.Body>
        <Card.Title>03 - Smash Burguer</Card.Title>
        <Card.Text>
         Sem salada, add milho
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Mesa 1</ListGroup.Item>
        <ListGroup.Item>02/10/2023 - 19:49</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Concluido</Card.Link>
        <Card.Link href="#">Cancelar</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="frangobatata.jpg" />
      <Card.Body>
        <Card.Title>25 - frango c/ batata GG</Card.Title>
        <Card.Text>
            add bacon 
            add cheedar
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Mesa 4</ListGroup.Item>
        <ListGroup.Item>02/10/2023 - 21:02</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Concluido</Card.Link>
        <Card.Link href="#">Cancelar</Card.Link>
      </Card.Body>
    </Card>



    </div>
    </div>
    </>
  );
}

export default KitchenSinkExample;