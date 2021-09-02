import { description } from 'commander'
import React, {useState} from 'react'
import { Col, Row, Container, Card, Button, CardTitle, CardText, CardSubtitle, Jumbotron } from 'reactstrap'
import storeData from "./mockData/index"

console.log(storeData)

const ShoppingItem = ({name, price, description, addingToCart, id}) => {
  return(
    <Col>
      <Card body inverse color="info">
        <CardTitle tag="h5">{ name }</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted"> ${ price }.00</CardSubtitle>
        <CardText>{ description }</CardText>
        <Button color="secondary" onClick={addingToCart} data-id={id}>Add to cart</Button>
      </Card>
    </Col>
  )
}

const App = () => {
  const { products } = storeData
  const [cartProducts, setCartProducts] = useState([])

  const addingToCart = event => {
    const productId = event.target.dataset.id
    setCartProducts([...cartProducts, products[productId]])
  }

  return(
    <Container>
      <Row>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3"> $
            {
              cartProducts.reduce( (accum, item) => {
                return accum += item.price
              },0)
            }.00
          </h1>
          <p className="lead">This is your total </p>
          <hr className="my-2" />
          <p className="lead">There's {cartProducts.length} products in your cart </p>
        </Container>
      </Jumbotron>
      </Row>
      <Row>
        {
          products.map( (item, index) => 
          <ShoppingItem
            {...item}
            addingToCart= {addingToCart}
            id= {index}
          />)
        }
      </Row>
    </Container>
  )

}

export default App;
