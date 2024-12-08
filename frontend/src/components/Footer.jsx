import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <Container fluid>
          <Row>
            <Col className='text-center py-3'>
              <p>Copyright © {currentYear} ProShop. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer