import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react';
const place_holder = "./place_holder.png";
const testData = [
    [{ imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
    { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
    { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
    { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"}],
    [{ imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
    { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
    { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
    { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"}]
];
class ProductGrids extends Component {

    generateColumn = (config, key) => {
        const {imagePath, header, metaData, description} = config;
        return (
            <Grid.Column key={`$ProductGrids-${new Date()}-${key}`}>
                <Card
                image={imagePath}
                header={header}
                meta={metaData}
                description={description}
                />
            </Grid.Column>
            )
    }
    render() {
        const { gridInEachLine , data} = this.props;
        const gridData = data || testData;
        const lineArray = [];
        for (const lineID in gridData){
            const gridArray = [];
            for (let elementID = 0; elementID < gridInEachLine; elementID ++){
                gridArray.push(this.generateColumn(testData[lineID][elementID], `line-${lineID}-element-${elementID}`));
            }
            lineArray.push(
                <Grid stackable container columns={ gridInEachLine } key={`ProductGrids-${new Date()}-${lineID}`}>
                    { gridArray }
                </Grid>
            )
        }
        return (
            <div>
            { lineArray }
            </div>
        );
    }
}

export default ProductGrids;
