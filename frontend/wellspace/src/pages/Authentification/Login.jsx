// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { FaExpeditedssl } from 'react-icons/fa';

// function UserLogin() {

//   // login procedure

//   // 1. check email exsists 
//   // 2. email n password is correct
//   // 3. approved status is true

//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default UserLogin;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UserLogin() {
  // login procedure
  // 1. check email exists 
  // 2. email and password are correct
  // 3. approved status is true

  return (
    <div className="signup-container"> {/* Use the same container class as the signup page */}
      <div className="signup-form"> {/* Use the same form class as the signup page */}
      <h2 className="text-center">WellSpace</h2>
      <img
      src="/images/Logo.png"
      style={{
        display: 'block',
        margin: '0 auto',
        width: '60px', // Adjust width as needed
        height: 'auto' // Keeps the aspect ratio
      }}
      alt="WellSpace Logo"
    />
        
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="dark" type="submit" className="btn w-100">
           LogIn
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UserLogin;
