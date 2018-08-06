import React, { Component } from 'react';

import { AccordionSkeleton, Accordion, AccordionItem} from 'carbon-components-react';
class AccordionUI extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const { preload, elements } = this.props;
    let accordionItems = [];
    if(elements){
      for(let element of elements) {
        const {open, title, child, key} = element;
        accordionItems.push(
          <AccordionItem title={title} open={open} key={key}>
            {child}
          </AccordionItem>
        )
      }
    }
    return (
      preload || !elements ? <AccordionSkeleton/> : 
      <Accordion>{accordionItems}</Accordion>
    );
  }
}

export default AccordionUI;
