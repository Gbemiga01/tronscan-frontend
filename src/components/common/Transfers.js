import React, {Fragment} from "react";
import {Sticky, StickyContainer} from "react-sticky";
import Paging from "./Paging";
import {Client} from "../../services/api";
import {AddressLink, TransactionHashLink} from "./Links";
import {TRXPrice} from "./Price";
import {ONE_TRX} from "../../constants";
import {tu} from "../../utils/i18n";
import TimeAgo from "react-timeago";
import {Truncate} from "./text";
import {withTimers} from "../../utils/timing";
import {FormattedNumber} from "react-intl";
import SmartTable from "./SmartTable.js"
import {upperFirst} from "lodash";
import {ContractTypes} from "../../utils/protocol";

class Transfers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filter: {},
      transfers: [],
      page: 0,
      total: 0,
      pageSize: 25,
      showTotal: props.showTotal !== false,
      emptyState: props.emptyState,
      autoRefresh: props.autoRefresh || false
    };
  }

  componentDidMount() {
    this.load();

    if (this.state.autoRefresh !== false) {
      this.props.setInterval(() => this.load(), this.state.autoRefresh);
    }
  }

  onChange = (page,pageSize) => {
    this.load(page,pageSize);
  };

  load = async (page = 1,pageSize=10) => {

    let {filter} = this.props;

    let {showTotal} = this.state;

    this.setState({ loading: true });

    let {transfers, total} = await Client.getTransfers({
      sort: '-timestamp',
      limit: pageSize,
      start: (page-1) * pageSize,
      count: showTotal ? true : null,
      ...filter,
    });

    this.setState({
      page,
      transfers,
      total,
      loading: false,
    });
  };

  customizedColumn = () => {
    let {intl} = this.props;
    let column = [
      {
        title: upperFirst(intl.formatMessage({id: 'age'})),
        dataIndex: 'timestamp',
        key: 'timestamp',
        align: 'center',
        className: 'ant_table',
        width: '14%',
        render: (text, record, index) => {
          return <TimeAgo date={text}/>
        }
      },
      {
        title: upperFirst(intl.formatMessage({id: 'hash'})),
        dataIndex: 'hash',
        key: 'hash',
        align: 'center',
        className: 'ant_table',
        render: (text, record, index) => {
          return <Truncate>
            <TransactionHashLink hash={text}>
              {text}
            </TransactionHashLink>
          </Truncate>
        }
      },
      {
        title: upperFirst(intl.formatMessage({id: 'from'})),
        dataIndex: 'transferFromAddress',
        key: 'transferFromAddress',
        align: 'center',
        width: '20%',
        className: 'ant_table',
        render: (text, record, index) => {
          return <AddressLink address={text} />
        }
      },
      {
        title: upperFirst(intl.formatMessage({id: 'to'})),
        dataIndex: 'transferToAddress',
        key: 'transferToAddress',
        align: 'center',
        width: '20%',
        className: 'ant_table',
        render: (text, record, index) => {
          return  <AddressLink address={text} />
        }
      },
      {
        title: upperFirst(intl.formatMessage({id: 'amount'})),
        dataIndex: 'hash',
        key: 'hash',
        align: 'center',
        className: 'ant_table',
        render: (text, record, index) => {
          return <Truncate>
            <TransactionHashLink hash={text}>
              {text}
            </TransactionHashLink>
          </Truncate>
        }
      },
    ];
    return column;
  }

  render() {

    let {transfers, page, total, pageSize, loading, emptyState: EmptyState = null} = this.state;
    let column = this.customizedColumn();

    if (!loading && transfers.length === 0) {
      if (!EmptyState) {
        return (
          <div className="p-3 text-center">{tu("no_transfers")}</div>
        );
      }

      return <EmptyState />;
    }

    return (
      <StickyContainer>
        {
          <Sticky>
            {
              ({style}) => (
                <div style={{zIndex: 100, ...style}} className="card-body bg-white py-3 border-bottom">
                  <Paging onChange={this.onChange} total={total} loading={loading} pageSize={pageSize} page={page}/>
                </div>
              )
            }
          </Sticky>
        }
        <div className="table-responsive">
          <table className="table table-hover m-0 border-top-0">
            <thead className={theadClass}>
            <tr>
              <th className="d-lg-table-cell" style={{width: 125 }}>{tu("age")}</th>
              <th className="d-lg-table-cell" style={{width: 125 }}>{tu("hash")}</th>
              <th className="d-md-table-cell">{tu("from")}</th>
              <th className="d-md-table-cell">{tu("to")}</th>
              <th className="text-right" style={{width: 125 }}>{tu("amount")}</th>
            </tr>
            </thead>
            <tbody>
            {
                transfers.map((transfer) => (
                    <tr key={transfer.transactionHash}>
                      <td className="text-nowrap d-lg-table-cell">
                        <TimeAgo date={transfer.timestamp} />
                      </td>
                      <td className="d-lg-table-cell">
                        <Truncate>
                          <TransactionHashLink hash={transfer.transactionHash}>
                              {transfer.transactionHash}
                          </TransactionHashLink>
                        </Truncate>
                      </td>
                      <td className="d-md-table-cell">
                        <AddressLink address={transfer.transferFromAddress} />
                      </td>
                      <td className="d-md-table-cell transfer-cell">
                        <AddressLink address={transfer.transferToAddress} />
                      </td>
                      <td className="text-nowrap text-right">
                          {
                              transfer.tokenName === "TRX" ?
                                  <TRXPrice amount={transfer.amount / ONE_TRX} /> :
                                  <span><FormattedNumber value={transfer.amount} /> {transfer.tokenName}</span>
                          }
                      </td>
                    </tr>
                ))
            }
            </tbody>
          </table>
        </div>
      </StickyContainer>
        <Fragment>
        {loading && <div className="loading-style"><TronLoader/></div>}
    <SmartTable bordered={true} loading={loading} column={column} data={transfers} total={total}
                onPageChange={(page, pageSize) => {
                  this.load(page, pageSize)
                }}/>
    </Fragment>
    )
  }
}

export default withTimers(Transfers);
