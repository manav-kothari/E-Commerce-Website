import React from "react";
import { Row, Col } from "react-bootstrap";
import shop from "../ShopData/ElectronicShops";
import Shop from "../Shop";

const ElectronicShopScreen = () => {
  return (
    <div>
      <Row>
        {shop.map((shop) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Shop shop={shop} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ElectronicShopScreen;
