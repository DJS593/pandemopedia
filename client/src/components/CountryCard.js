import React from 'react'; 
import { Card, Spinner, Row, Col} from 'react-bootstrap';
import CountryTotalChart from './CountryTotalChart';
import CountryNewChart from './CountryNewChart';

export default class CountryCard extends React.Component {
    state = {
        loading: true,
        us: null
    }; 

    async componentDidMount() {
        const api = "https://corona.azure-api.net/all";
        const response = await fetch(api);
        const data = await response.json();
        
        this.setState({ us: data[0], loading: false});
    }
    render() {
    return (
        <>
        <div>
            {this.state.loading || !this.state.us ? (
                <Spinner animation="border" variant="danger" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ):(
                <Card border="white" className="homepage-card">
                <div>
                    <div>
                        <h4 className="text-center">US TOTAL CASES</h4>
                        <h3 className="text-primary text-center">{this.state.us.countryData[165].US.Summary.Confirmed.toLocaleString()}</h3>
                        <br></br>
                        <Row>
                        <Col xs={7} md={7}>
                        <p className="badge badge-warning">Active:</p> {this.state.us.countryData[165].US.Summary.Active.toLocaleString()}
                        <br></br>
                        <p className="badge badge-success">Recovered:</p> {this.state.us.countryData[165].US.Summary.Recovered.toLocaleString()}
                        <br></br>
                        <p className="badge badge-danger">Deaths:</p> {this.state.us.countryData[165].US.Summary.Deaths.toLocaleString()}
                        </Col>
                        <Col xs={4} md={4}>
                        <CountryTotalChart/>
                        </Col>
                        </Row>

                        <h4 className="text-center">US NEW CASES</h4>
                        <h3 className="text-primary text-center">{this.state.us.countryData[165].US.Summary.NewConfirmed.toLocaleString()}</h3>
                        <br></br>
                        <Row>
                        <Col xs={7} md={7}>
                        <p className="badge badge-success">Recovered:</p> {this.state.us.countryData[165].US.Summary.NewRecovered.toLocaleString()}
                        <br></br>
                        <p className="badge badge-danger">Deaths: </p> {this.state.us.countryData[165].US.Summary.NewDeaths.toLocaleString()}
                        </Col>
                        <Col xs={4} md={4}>
                        <CountryNewChart/>
                        </Col>
                        </Row>
                    </div>
                </div>
                </Card> 
            )}
        </div>
        </>
    )
}
}