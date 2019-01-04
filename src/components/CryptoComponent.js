import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});
class CryptoComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentlyExpandedAskIndex: null,
            currentlyExpandedBidIndex: null
        }
    }

    render() {
        const { orderBookViewModel, classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>BTC/USD</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Mid Point Price: ${orderBookViewModel.midpointPrice}</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <table className={'box'}>
                                <thead>
                                    <tr>
                                        <td>Ask Price</td><td>Size</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.createTopLevelAskRows(orderBookViewModel.descendingAskBuckets)}
                                </tbody>
                            </table>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <table className={'box'}>
                                <thead>
                                    <tr>
                                        <td>Bid Price</td><td>Size</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.createTopLevelBidRows(orderBookViewModel.descendingBidBuckets)}
                                </tbody>
                            </table>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }

    createTopLevelAskRows(askBuckets) {
        const askRows = []
        for (let [index, askBucket] of askBuckets.entries()) {
            askRows.push(<tr onClick={() => this.askRowClicked(index)}><td style={{ color: 'red' }}>${askBucket.price}</td><td>{askBucket.size} ▾</td></tr>)
            if (this.state.currentlyExpandedAskIndex === index) {
                for (let order of askBucket.orders) {
                    askRows.push(<tr onClick={() => this.askRowClicked(index)}><td style={{ color: 'red' }}>${order.price}</td><td>{order.size}</td></tr>)
                }
            }
        }
        return askRows
    }

    createTopLevelBidRows(bidBuckets) {
        const bidRows = []
        for (let [index, bidBucket] of bidBuckets.entries()) {
            bidRows.push(<tr onClick={() => this.bidRowClicked(index)}><td style={{ color: 'green' }}>${bidBucket.price}</td><td>{bidBucket.size} ▾</td></tr>)
            if (this.state.currentlyExpandedBidIndex === index) {
                for (let order of bidBucket.orders) {
                    bidRows.push(<tr onClick={() => this.bidRowClicked(index)}><td style={{ color: 'green' }}>${order.price}</td><td>{order.size}</td></tr>)
                }
            }
        }
        return bidRows
    }

    askRowClicked(bucketIndex) {
        if (this.state.currentlyExpandedAskIndex === bucketIndex) {
            this.setState({ currentlyExpandedAskIndex: null })
            return
        }

        this.setState({ currentlyExpandedAskIndex: bucketIndex })
    }

    bidRowClicked(bucketIndex) {
        if (this.state.currentlyExpandedBidIndex === bucketIndex) {
            this.setState({ currentlyExpandedBidIndex: null })
            return
        }

        this.setState({ currentlyExpandedBidIndex: bucketIndex })
    }
}
export default withStyles(styles)(CryptoComponent);