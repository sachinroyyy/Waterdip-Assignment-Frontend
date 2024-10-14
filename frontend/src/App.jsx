import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import ChartContainer from "./components/ChartContainer"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="app-container">
      <h1 className="title text-center my-4">Hostel Booking Dashboard</h1>
      <Container fluid>
        <Row className="justify-content-center mb-5">
          <Col md={10}>
            <Card className="overview-card shadow-lg">
              <Card.Header className="overview-header text-center">
                Hostel Booking Overview
              </Card.Header>
              <Card.Body>
                <Row className="justify-content-center mb-4">
                  <ChartContainer />
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
