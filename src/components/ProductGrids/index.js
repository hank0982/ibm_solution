import React, { Component } from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react';

/**
 * @class ProductGrids
 * @extends {Component}
 * @prop {Array} data - data for grids
 * @prop {Number} gridInEachLine - number of grids each line contains
 * @description This will generate grids based on the data you provide
 */
class ProductGrids extends Component {
    /**
     * @function generateColumn
     * @param {Object} carData - data for each card
     * @param {string} key - unique key for each card
     * @memberof ProductGrids
     */
    generateColumn = (cardData, key) => {
        const {imagePath, header, metaData, description, auth} = cardData;
        return (
            <Grid.Column key={`$ProductGrids-${new Date()}-${key}`}>
                <Card
                image={imagePath}
                header={auth ? <div className="header">{header} <Icon name='thumbs up outline'/></div> : header}
                meta={metaData}
                description={description}
                />
            </Grid.Column>
            )
    }
    render() {
        const { page, gridInEachLine , lineInEachPage , data} = this.props;
        const gridData = data;
        const lineArray = [];
        let lineNum = 1;
        let gridArray = [];
        for (const elementID in gridData){
            gridArray.push(this.generateColumn(gridData[elementID], `line-${lineNum}-element-${elementID}`));
            if(Number(elementID)+1 === Number(lineNum*gridInEachLine) || Number(elementID)+1 === gridData.length){
                lineArray.push(
                    <Grid stackable container columns={ gridInEachLine } key={`ProductGrids-${new Date()}-${lineNum}`}>
                        { gridArray }
                    </Grid>
                )
                gridArray = []
                lineNum ++;
            }
        }
        return (
            <div>
            { lineArray }
            </div>
        );
    }
}
export default ProductGrids;
