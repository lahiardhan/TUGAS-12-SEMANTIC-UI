import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
	Form,
	Checkbox,
	Input,
	Button,
	Header,
	Segment,
	Image,
	Grid,
	Message,
} from "semantic-ui-react";

class App extends Component {
	render() {
		return (
			<div>
				<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
							<Header as="h2" color="teal">
								<Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" />{" "}
								Member Login
							</Header>
						<Segment stacked textAlign="center">
							<Form>
								<Form.Field>
									<Input
										icon="user"
										iconPosition="left"
										placeholder="Email Address"
									/>
								</Form.Field>
								<Form.Field>
									<Input
										icon="user"
										iconPosition="left"
										placeholder="Email Address"
									/>
								</Form.Field>
								<Form.Field>
									<Checkbox label="I agree to the Terms and Conditions" />
								</Form.Field>
								<Button fluid type="submit" color="teal">
									Login
								</Button>
							</Form>
						</Segment>

						<Message textAlign="center">
							<p>
								Tidak Punya Akun? Silakan <a href="/">Register</a>
							</p>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default App;
