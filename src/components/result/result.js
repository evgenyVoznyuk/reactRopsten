import React from 'react';
import Table from 'react-bootstrap/Table';

import Search from '~c/search';

import {tokentx} from '~/api/etherscan';

class Result extends React.Component {
  state = {
		res: {}
  }
  componentDidMount(){
    tokentx(this.props.match.params.id).then(res => {
      this.setState({res});
    });
  }

  componentDidUpdate(){
    tokentx(this.props.match.params.id).then(res => {
      this.setState({res});
    });
  }
  
  render(){
    let tokenData ={};
    if(this.state.res.status === '1'){
      tokenData = this.state.res.result.reduce((result, item) => {
          let value = parseInt(item.value);
          if(result[item.tokenName] === undefined){
            result[item.tokenName] = value;
          }else{
            result[item.tokenName] += value;
          }
      return result;
      }, {});
    }

    let tokenTable = Object.entries(tokenData).map(item => {
      return <tr key={item[0]}>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
      </tr>
    });

    return <>
      <Search/>
      {this.state.res.status === '0' &&
      <h3>No address found</h3>
      }
      {this.state.res.status === '1' &&
      <Table>
        <thead>
          <tr>
            <th>Token name</th>
            <th>Token quantity</th>
          </tr>
        </thead>
        <tbody>
          {tokenTable}
        </tbody>
      </Table>}
    </>
  }
}

export default Result;