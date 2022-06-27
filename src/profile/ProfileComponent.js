import React from "react";
import PropTypes from "prop-types";
const ProfileComponent = (props) => {
  return (
    <>
      {props.children}
<h5 className="text-uppercase"> {props.name}</h5>
              <p>
              {props.salemborogba}
              </p>
              <p>{props.tec}</p>
              <button onClick={()=>props.handleName(props.name)}>click</button>




      {/* <Card style={{ width: "18rem" }}>
        <span>{props.children}</span>
        <Card.Body>
          <button onClick={() => props.handleName(props.name)}>
            Click Me To Now Ho Am I ?
          </button>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.profession}</Card.Text>
          <Card.Text>{props.bio}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </>
  );
};
export default ProfileComponent;
ProfileComponent.defaultProps = {
  name: "Othman",
 
};
ProfileComponent.propTypes = {
  name: PropTypes.string,
};