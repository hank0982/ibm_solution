import React, { Component } from 'react';
import { Grid, Card, Icon, Pagination } from 'semantic-ui-react';
import './index.css';

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

    constructor(){
        super();
        this.state = {
          activePage: 1,
        };
    }

    
    handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

    render() {
        const { gridInEachLine , lineInEachPage , data} = this.props;
        const { activePage } = this.state;
        
        const dataInThisPage = [];
        const carsInEachPage = gridInEachLine * lineInEachPage;
        const totalPages = Math.ceil(data.length/carsInEachPage);
        // which cars to show on this page
        for ( let i = 0; i < carsInEachPage; i += 1) {
          if(data[(activePage - 1) * carsInEachPage + i] === undefined) break;
          dataInThisPage.push(data[(activePage - 1) * 16 + i]);
        }

        const gridData = dataInThisPage;
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
              <div>
                { lineArray }
              </div>
              <div className="pagination">
                <Pagination
                  activePage={activePage}
                  totalPages={totalPages}
                  onPageChange={this.handlePaginationChange}
                />
              </div>
            </div>
        );
    }
}
export default ProductGrids;
