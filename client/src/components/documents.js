import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Label,
  CardSubtitle,
  CardText
} from "reactstrap";
import { Link } from "react-router-dom";
import "./css/documents.css";
import AddLetter from "./addLetter";
import Document from "./document";
import axios from 'axios';


class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: []
    };
  }

  componentDidMount() {
    this.getLetters();
  }

  getLetters(){
    axios
      .get(`https://dontemail.herokuapp.com/letters`, {
        headers: { "Authorization": localStorage.getItem("token") }
      }).then(resp => {
        this.setState({ letters: resp.data.letters });
      }).catch(err =>{
        console.log(err)
      })
  }


  render() {
    const { auth } = this.props.context.userData;
    return (
      <div>
        {auth ? (
          <Col md="8">
            <Row>
              {this.state.letters.map(el => <Document letter={el}/>)}
              <AddLetter {...this.props} />
            </Row>
          </Col>
        ) : (
          this.props.history.push("/")
        )}
      </div>
    );
  }
}

export default Documents;
