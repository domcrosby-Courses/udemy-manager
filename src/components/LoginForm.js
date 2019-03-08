// imrc
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from '../Components';

const propTypes = {};

const defaultProps = {};

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password" />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  null,
  { emailChanged }
)(LoginForm);

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;
