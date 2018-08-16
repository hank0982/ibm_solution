import React, { Component } from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react';
const place_holder = "./place_holder.png";

class ProductGrids extends Component {

    generateColumn = (config, key) => {
        const {imagePath, header, metaData, description, auth} = config;
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
        const { gridInEachLine , data} = this.props;
        const gridData = data ;
        const lineArray = [];
        for (const lineID in gridData){
            const gridArray = [];
            for (let elementID = 0; elementID < gridInEachLine; elementID ++){
                gridArray.push(this.generateColumn(gridData[lineID][elementID], `line-${lineID}-element-${elementID}`));
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
