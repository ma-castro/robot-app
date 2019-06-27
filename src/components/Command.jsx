import React from 'react'
import { Row, Col, Button } from 'reactstrap';

export default function Command({ place, report, move, left, right, isRobotPlaced }) {

  return (
    <div
      style={{
        height: "90%",
        border: "2px solid",
        textAlign: "center"
      }}
    >
    	<Row className="mb-4 mt-4">
    		<Col>
				<Button color="primary" className="mr-2">Place</Button>      
				<Button color="primary" className="ml-2" disabled={isRobotPlaced ? false: true}>Report</Button>    
			</Col>  
		</Row>
    	<Row>
    		<Col>
				<Button color="primary" onClick={move} disabled={isRobotPlaced ? false: true}>Move 🠝</Button>      
			</Col>  
		</Row>
    	<Row>
    		<Col>
				<Button color="primary" onClick={left} disabled={isRobotPlaced ? false: true}>⟲ Left</Button>      
			</Col>  
    		<Col>
				<Button color="primary" onClick={right} disabled={isRobotPlaced ? false: true}>Right ⟳</Button>      
			</Col>  
		</Row>
    </div>
  )
}