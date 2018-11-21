import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Logo';
import SignInProviderButton from '../SignInProviderButton';

/**
 * A view component which displays a SignIn button with modal logic.
 */
class SignInButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ modal: !prevState.modal }));
  }

  render() {
    const { modal } = this.state;

    return (
      <div>
        <button className='btn btn-link' type='button' onClick={this.toggle}>
          Sing in
        </button>
        <Modal fade={false} isOpen={modal} toggle={this.toggle}>
          <div className='modal-content'>
            <div className='modal-header'>
              <div className='modal-title'>Sign in or Sign up in Jewel</div>
              <button
                className='btn btn-link close'
                onClick={this.toggle}
                type='button'
              >
                <FontAwesomeIcon icon='times' />
              </button>
            </div>
            <div className='modal-body'>
              <div className='row justify-content-center'>
                <div className='mb-3 mx-auto'>
                  <Logo style={{ height: '8rem', width: '8rem' }} />
                </div>
              </div>
              <div className='row justify-content-center'>
                <div>
                  <div className='mb-3 mx-auto'>
                    <SignInProviderButton provider='Facebook' />
                  </div>
                  <div className='mb-3 mx-auto'>
                    <SignInProviderButton provider='Google' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignInButton;
