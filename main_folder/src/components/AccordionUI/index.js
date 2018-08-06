import React, { Component } from 'react';

import { AccordionSkeleton, Accordion, AccordionItem} from 'carbon-components-react';
class AccordionUI extends Component {
  render() {
    return (
        <div style={{width: "500px"}}>
            <AccordionSkeleton/>
        </div>
    );
  }
}

export default AccordionUI;
