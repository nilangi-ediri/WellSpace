import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaExpeditedssl } from 'react-icons/fa';

function UserLogin() {

  // login procedure

  // 1. check email exsists 
  // 2. email n password is correct
  // 3. approved status is true

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UserLogin;