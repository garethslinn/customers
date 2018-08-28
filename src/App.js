import React, { Component } from 'react';
import Customers from './components/Customers';
import './App.css';

class App extends Component {
  state = {
    caption: 'Property details',
    response: {}
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/properties');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {

      return (<div className="container">
                  <table>
                      <caption>{this.state.caption}</caption>
                      <thead>
                      <tr>
                          <th scope="col">Owner</th>
                          <th scope="col">Address</th>
                          <th scope="col">IncomeGenerated</th>
                      </tr>
                      </thead>
                      <tbody>

                    {Object.keys(this.state.response).length > 0 && this.state.response.map((person, index) => (
                         <Customers
                            key={person.airbnbId}
                            owner={person.owner}
                            line1={person.address.line1}
                            line2={person.address.line2}
                            line3={person.address.line3}
                            line4={person.address.line4}
                            postCode={person.address.postCode}
                            city={person.address.city}
                            country={person.address.country}
                            incomeGenerated={person.incomeGenerated}
                         />
                    ))}
                    </tbody>
           </table>
      </div>);
  }
}

export default App;