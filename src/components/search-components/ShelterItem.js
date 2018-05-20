import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Geocode from "react-geocode";

Geocode.enableDebug();

class ShelterItem extends Component {

	constructor(props) {
		super(props);
		this.state = { collapse: false, address: null }
		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	getLoc(latlng) {
		{
			Geocode.fromLatLng("48.8583701", "2.2922926")
				.then(response => {
					console.log(response.results[0].formatted_address)
					this.setState(Object.assign(this.state, { address: response.results[0].formatted_address }))
				}).catch(error => {
					console.log(error)
				})
		}
	}

	render() {
		return (
			<div>
				<Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.shelter.name}</Button>
				<Collapse isOpen={this.state.collapse}>
					<Card>
						<CardBody>
							{this.getLoc(this.props.shelter.location)}

							{this.props.shelter.inventory.map((x, i) => {
								return (
									<h3 key={i}>{x.item}</h3>
								)
							})}
						</CardBody>
					</Card>
				</Collapse>
			</div>
		)
	}


}

export default ShelterItem