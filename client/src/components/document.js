import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
  CardText,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";


const Document = (props) => {
  const len = props.letter.versions.length;
  return (
    <Col md="4">
      <Card className="documents-style">
        <CardBody>
          <CardTitle>{props.letter.name}</CardTitle>

          <br />
          <CardSubtitle>{props.letter.destination}</CardSubtitle>
          <br />
          <CardText>
             {props.letter.versions[len -1].content}              
          </CardText>

          <Link to="/dashboard/create">
            <Button>Copy</Button>
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Document;
