import { Card, Button } from "react-bootstrap";
import category from "./ShopData/category";

const Category = ({ category }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <a href={category.link}>
          <Card.Img variant="top" src="./123403.png" width="300" height="260" />
        </a>
        <Card.Body>
          <a href={category.link}>
            <Card.Title as="div">
              <strong>{category.name}</strong>
            </Card.Title>
          </a>
          <a href={category.link}>
            <Button variant="primary">Go to Shops</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Category;
