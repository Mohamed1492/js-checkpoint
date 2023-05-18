
import { Button, Form, Stack,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    <>
    <Stack direction="horizontal" gap={3} style={{ color: "red", fontSize: 60, marginLeft: 300 }}>
      <div className="bg-warning border">First item</div>
      <div className="bg-warning border ms-auto">Second item</div>
      <div className="bg-warning border">Third item</div>
    </Stack>
    <br />
<Form style={{ marginLeft: 500 }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          we will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <br /><br />
    <Form style={{ marginLeft: 500 }}>
      {['checkbox', 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />

          <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
    <img src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"} alt="" />
    </>
  )
}

export default App
