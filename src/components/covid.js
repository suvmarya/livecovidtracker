import React, { useEffect, useState } from "react";
import { Card, Spinner , CardTitle, CardText, Row, Col } from 'reactstrap';

const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const response = await fetch("https://api.covid19india.org/data.json");
            const actualData = await response.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);

        }

    }


    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <section className='container pt-2' >
                <h1 style={{ textAlign: "center", color:"#fff"}} className="mx-1"><span>  <Spinner type="grow" color="danger" style={{ marginBottom: "8px" }}/></span>Live</h1>
                <h2 style={{ textAlign: "center", color:"#fff" }}>COVID-19 CORONAVIRUS TRACKER</h2>

                <Row >
                    <Col sm="4">
                        <Card body color="primary" className="mb-3 pb-5 bg-docs-transparent-grid">
                            <CardTitle tag="h5">OUR COUNTRY</CardTitle>
                            <CardText tag="h1">INDIA</CardText>

                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card body color="warning" className=" pb-5">
                            <CardTitle tag="h5">TOTAL RECOVERED</CardTitle>
                            <CardText tag="h1">{data.recovered}</CardText>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card body color="danger" className=" pb-5">
                            <CardTitle tag="h5">TOTAL CONFIRMED</CardTitle>
                            <CardText tag="h1">{data.confirmed}</CardText>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card body color="info" className=" pb-5">
                            <CardTitle tag="h5">TOTAL DEATH</CardTitle>
                            <CardText tag="h1">{data.deaths}</CardText>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card body color="secondary" className=" pb-5">
                            <CardTitle tag="h5">TOTAL ACTIVE</CardTitle>
                            <CardText tag="h1">{data.active}</CardText>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card body color="success" className=" pb-5">
                            <CardTitle tag="h5">LAST UPDATED</CardTitle>
                            <CardText tag="h2">{data.lastupdatedtime}</CardText>
                        </Card>
                    </Col>
                </Row>
            </section> 
        </>
    )

}
export default Covid;