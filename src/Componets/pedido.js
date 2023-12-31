import Navbar from './navbar'
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
//import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';




import Nav from 'react-bootstrap/Nav';

function TabsExample() {
    return (
        <>
            <Navbar />

            <div className='container'>
                <Image src="bannerpedidos.jpg" fluid rounded />
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/pedido">Lanches</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/porcoes">Porções</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/bebidas">Bebidas</Nav.Link>
                    </Nav.Item>

                </Nav>


                <Form className='my-2'>

<Card>
    {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
            <Form.Check
                inline
                label="03 - Smash Burguer"
            />
        </div>
    ))}
    <Row> 
        <Col>
            <Form.Control placeholder="Nome do cliente" id='' />
        </Col>
        <Col>
            <Form.Control placeholder="Número da Mesa" id='' type='number' />
        </Col>
    </Row>
    <Form.Label htmlFor="inputPassword5" className='mx-3'> Observações</Form.Label>
    <Form.Control type="text" id="obs" aria-describedby="passwordHelpBlock" />
</Card>
</Form>

                <Form className='my-2'>

                    <Card>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="10 - X-tudo"
                                />
                            </div>
                        ))}
                        <Row> 
                            <Col>
                                <Form.Control placeholder="Nome do cliente" id='' />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Número da Mesa" id='' type='number' />
                            </Col>
                        </Row>
                        <Form.Label htmlFor="inputPassword5" className='mx-3'> Observações</Form.Label>
                        <Form.Control type="text" id="obs" aria-describedby="passwordHelpBlock" />
                    </Card>
                </Form>


                <Form className='my-2'>

                    <Card>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="15 - X-Egg"
                                />
                            </div>
                        ))}
                        <Row> 
                            <Col>
                                <Form.Control placeholder="Nome do cliente" id='' />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Número da Mesa" id='' type='number' />
                            </Col>
                        </Row>
                        <Form.Label htmlFor="inputPassword5" className='mx-3'> Observações</Form.Label>
                        <Form.Control type="text" id="obs" aria-describedby="passwordHelpBlock" />
                    </Card>
                </Form>

            </div>
        </>
    );
}

export default TabsExample;

