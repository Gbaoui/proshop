import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products';
import { Link } from 'react-router-dom';
import {Col,Row, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating';







const ProductScreen = () => {
    const { id: productId } = useParams();
    const product = products.find((p) => p._id === productId);   
  return (
   <>
   <Link className='btn btn-light my-3' to='/'>
   Go Back
   </Link>
   <Row>
     <Col md={5}>
     <Image src={products.image} alt={products.name} fluid/>
     </Col>
     <Col md={4}>
     <ListGroup variant='flush'>
       <ListGroupItem>
         <h3>{products.name}</h3>
       </ListGroupItem>
       <ListGroupItem>
        <Rating value={products.rating} text={`${products.numReviews} reviews`}/>
       </ListGroupItem>
       <ListGroupItem>
         Price: ${products.price}
       </ListGroupItem>
       <ListGroupItem>
         Description:
         <p>{products.description}</p>
       </ListGroupItem>
     </ListGroup>
     </Col>
     <Col md={3}>
     <Card>
      <ListGroup variant='flush'>
        <ListGroupItem>
          <Row>
            <Col>
              Price:
            </Col>
            <Col>
              <strong>${products.price}</strong>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Row>
            <Col>
              Status:
            </Col>
            <Col>
              {products.countInStock > 0? 'In Stock' : 'Out of Stock'}
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Button className='btn-block' disabled={products.countInStock === 0} type='button'>
            Add to Cart
          </Button>
        </ListGroupItem>
      </ListGroup>
     </Card>
     </Col>
   </Row>
   </>
  )
}

export default ProductScreen







