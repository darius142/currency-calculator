import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactTable from 'react-table';
import Grid from '@material-ui/core/Grid';

import withStyles from '@material-ui/core/styles/withStyles';
import "react-table/react-table.css";

const styles = (theme) => ({
  root: {
    padding: '0 1rem',
    marginBottom: '3rem'
  },
  table: {
    border: 'none'
  },
  modifyTable: {
    border: '1px solid rgba(0,0,0,0.1)'
  },
  modifyThead: {
    boxShadow: 'none!important',
    backgroundColor: 'rgba(227, 227, 227, 0.7)',
    [theme.breakpoints.down('xs')]: {
      display: 'none!important'
    },
  },
  modifyTr: {
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'contents!important'
    },
  },
  modifyGroupTr: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: '10px',
      border: '1px solid rgba(0,0,0,0.1)'
    },
    '&:hover': {
      cursor: 'pointer'
    }
  },
  modifyTh: {
    '&:focus': {
      outline: 'none !important'
    },
    height: '78px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'none'
  },
  modifyTbody: {
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%!important'
    }
  },
  modifyTd: {
    '& span': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      '&::before': {
        content: 'attr(data-label)',
        float: 'left',
        textTransform: 'uppercase',
        fontWeight: '600',
        fontFamily: 'Lato, san-serif',
        [theme.breakpoints.up('sm')]: {
          content: '""',
          display: 'none'
        },
      },

    },
    [theme.breakpoints.down('xs')]: {
      display: 'table-cell',
      textAlign: 'left',
      fontSize: '14px',
      borderBottom: 'none',
      width: '100%!important'
    }
  }
});


class CurrencyRateInfo extends Component {
  state = {
    rates: []
  };

  componentWillReceiveProps(nextProps) {
  this.setState({
    rates: [...nextProps.rates]
  })
  }

  render() {
    const { classes, isFetching } = this.props;
    const { rates } = this.state;

    return (
      <div className={classes.root}>
        {!isFetching && (
            <Grid container>
              <Grid item xs={12}>
                <h1>
                  Currency info
                </h1>
                <Grid item xs={12}>
                  <ReactTable
                    data={rates}
                    defaultPageSize={rates.length}
                    className={`${classes.table} -striped`}
                    showPagination={false}
                    columns={
                      [
                        {
                          id: 'amount',
                          Header: 'Amount',
                          accessor: d => <span data-label='Amount'>{d.unit_value || ''}</span>
                        },
                        {
                          id: 'currency_code',
                          Header: 'Currency code',
                          accessor: d => <span data-label='Currency code'>{d.currency_code || ''}</span>,
                        },
                        {
                          id: 'median_rate',
                          Header: 'Median rate',
                          accessor: d => <span data-label='Median rate'>{d.median_rate || ''}</span>,
                        },
                        {
                          id: 'buying_rate',
                          Header: 'Buying rate',
                          accessor: d => <span data-label='Median rate'>{d.buying_rate || ''}</span>,
                        },
                        {
                          id: 'selling_rate',
                          Header: 'Selling rate',
                          accessor: d => <span data-label='Selling rate'>{d.selling_rate || ''}</span>,
                        }
                      ]
                    }
                    getTrProps={() => {
                      return {
                        className: classes.modifyTr
                      };
                    }}
                    getTheadProps={() => {
                      return {
                        className: classes.modifyThead
                      };
                    }}
                    getTheadThProps={() => {
                      return {
                        className: classes.modifyTh
                      };
                    }}
                    getTableProps={() => {
                      return {
                        className: classes.modifyTable
                      };
                    }}
                    getTbodyProps={() => {
                      return {
                        className: classes.modifyTbody
                      };
                    }}
                    getTdProps={() => {
                      return {
                        className: classes.modifyTd
                      };
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rates: state.exchange.rates,
  isFetching: state.exchange.isFetching
});

const mapDispatchToProps = (dispatch) => ({});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CurrencyRateInfo));
