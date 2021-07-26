import React from 'react';
import './index.scss';

function Table({data}) {
    const generateTableItems = (data) => {
        const arr = data.map((item) => {
            if (item) {
                return (
                    <tr key={item.id}>
                        <td className="styled-table__text">{item.companyName}</td>
                        {item.price.map(str => {
                            return (
                                <td className="styled-table__body__price">{str}</td>
                            )
                        })}
                    </tr>
                );
            }
            return null;
        });
        return arr;
    };
    return (
        <table className="styled-table" >
            <thead className="styled-table__header">
            <tr>
                <th></th>
                <th className="styled-table__text title">Бесплатное имя</th>
                <th className="styled-table__text title">Платное имя</th>
                <th className="styled-table__text title">Сервисные SMS</th>
            </tr>
            </thead>
            <tbody className="styled-table__body">
            {generateTableItems(data)}
            </tbody>
        </table>
    );
}

export default Table;