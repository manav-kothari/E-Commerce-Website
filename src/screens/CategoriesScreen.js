import React from "react";
import { Row, Col } from "react-bootstrap";
import category from "../ShopData/category";
import Category from "../Category";

const CategoriesScreen = () => {
  return (
    <div>
      <Row>
        {category.map((category) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Category category={category} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoriesScreen;
