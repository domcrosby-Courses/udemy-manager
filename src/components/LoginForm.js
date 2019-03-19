// imrc
import React, { Component } from 'react';
// imrn
import { Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailChanged, passwordChanged, loginUser } from '../ducks/auth';
import { Card, CardSection, Input, Button, Spinner } from '../Components';

const propTypes = {
  email: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  emailChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired
};

const defaultProps = {};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    // Bind functions to remove from binding in JSX
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    const { loading } = this.props;
    if (loading) {
      return <Spinner />;
    }
    return <Button onPress={this.onButtonPress}>Login</Button>;
  }

  render() {
    const { email, password, error } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth;
  return { email, password, error, loading };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;
