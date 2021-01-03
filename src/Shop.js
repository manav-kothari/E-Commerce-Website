import { Card, Button } from "react-bootstrap";
import shop from "./ShopData/ElectronicShops";

const Shop = ({ shop }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <a href={shop.link}>
          <Card.Img variant="top" src="./123403.png" width="300" height="260" />
        </a>
        <Card.Body>
          <a href={shop.link}>
            <Card.Title as="div">
              <strong>{shop.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as="div">
            <div className="my-3">{shop.description}</div>
          </Card.Text>
          <a href={shop.link}>
            <Button variant="primary">Go to Products</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Shop;
