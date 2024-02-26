import { Form, Button, FormLabel, FormControl } from "react-bootstrap";

const ReviewForm = ({handleSubmit, revText, labelText, defaultValue}) => {

    return (

    <form>
        <Form.Group className="mb-3" controlId="example.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue}/>
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </form>

    )
}

export default ReviewForm