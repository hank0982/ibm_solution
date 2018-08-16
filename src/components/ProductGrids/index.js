import React, { Component } from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react';

class ProductGrids extends Component {
    generateColumn = (config, key) => {
        const {imagePath, header, metaData, description, auth} = config;
        return (
            <Grid.Column key={`$ProductGrids-${new Date()}-${key}`}>
                <Card
                image={imagePath}
                header={auth ? <h3>{header}<Icon name='thumbs up outline'/></h3> : <h3>{header} </h3>}
                meta={metaData}
                description={description}
                />
            </Grid.Column>
            )
    }
    render() {
        const { gridInEachLine , data} = this.props;
        const gridData = data;
        const lineArray = [];
        let lineNum = 1;
        let gridArray = [];
        for (const elementID in gridData){
            gridArray.push(this.generateColumn(gridData[elementID], `line-${lineNum}-element-${elementID}`));
            if(Number(elementID)+1 === Number(lineNum*gridInEachLine)){
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
