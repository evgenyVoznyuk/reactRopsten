import React from 'react';
import { withRouter } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class Search extends React.Component {
  state = {
		isInvalid: false
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let address = e.target.elements.formAddress.value.trim();
    if (this.validate(address)){
      this.props.history.push(`/address/${address}`);
    } else {
      this.setState({ isInvalid: true });
    }
  }

  validate(val){
    return /^0x[a-zA-Z0-9]{40}$/.test(val);
  }
  render(){
    return <Form 
              className="mt-5"
              onSubmit={(e) => this.handleSubmit(e)}

           >
      <InputGroup className="mb-3">
        <Form.Control
          id="formAddress"
          placeholder="Enter address"
          min-width="400px"
          isInvalid={this.state.isInvalid}
        />
        <InputGroup.Append>
          <Button type="submit">Find address</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  }
}

export default withRouter (Search);