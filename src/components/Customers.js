import React from 'react';

const Customers = (props) => {
      return (
            <tr key={props.airbnbId}>
                <td>{props.owner}</td>
                <td>
                    <span className="table_address">{props.line1}</span>
                    {props.line2 ? <span className="table_address">{props.line2}</span> : null }
                    {props.line3 ? <span className="table_address">{props.line3}</span> : null }
                    <span className="table_address">{props.line4}</span>
                    <span className="table_address">{props.postCode}</span>
                    <span className="table_address">{props.city}</span>
                    <span className="table_address">{props.country}</span>
                </td>
                <td>{props.incomeGenerated}&pound;</td>
            </tr>
        );
}

export default Customers;

