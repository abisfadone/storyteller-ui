import React from 'react';
import pen from '../../assets/icon/pen.svg';
import trash from '../../assets/icon/trash.svg';

const Table = (props) => {
  if (!props.tableDateArray[0]) return <h1>Table is empty!</h1>;

  return (
    <table className="table">
      <thead className="table__header">
      <tr>
        {props.keyArray.map((key, index) => (
          <th key={index}>
            <div className={`
            ${key.type ? key.type : 'default'} 
            ${index === 0 ? 'first' : ''} 
            ${props.keyArray.length - 1 === index ? 'last' : ''}
            `}>{key.value}</div>
          </th>
        ))}
        {props.action && <th className='table__action'>Actions</th>}
      </tr>
      </thead>
      <tbody>
      {props.tableDateArray.map((row, index) => (
        <tr key={index}>
          {row.map((elem, index) => (
            <td key={index} className={`
              ${elem === 'success' ? 'success ' : ''}
              ${elem === 'pending' ? 'pending ' : ''}
              ${elem === 'failed' ? 'failed ' : ''}
           `}>
              <div className={elem.type ? elem.type : 'default'}>
                {elem.value}
                {elem.value === true ? 'true' : ''}
                {elem.value === false ? 'false' : ''}
              </div>
            </td>
          ))}
          {props.action && (
            <td className='table__action'>
              <img
                onClick={() => props.editHandler(row[0])}
                src={pen}
                alt="edit"
              />
              <img
                onClick={() => props.deleteHandler(row[0])}
                src={trash}
                alt="setting"
              />
            </td>
          )}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;
