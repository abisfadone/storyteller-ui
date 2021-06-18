import React from 'react';
import clsx from 'clsx';
import pen from '../../assets/icon/pen-secondary.svg';
import trash from '../../assets/icon/trash-secondary.svg';

const Table = (props) => {
  if (!props.tableDateArray[0]) return <h1>Table is empty!</h1>;

  return (
    <table className="table">
      <thead className="table__header">
      <tr>
        {props.keyArray.map((key, index) => (
          <th key={index}>
            <div className={clsx(
              key.type || 'default',
              index === 0 && 'first',
              props.keyArray.length - 1 === index && !props.action && 'last'
            )
            }>{key.value}</div>
          </th>
        ))}
        {props.action && <th className='table__action'>
          <div className="last">Actions</div>
        </th>}
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
              <div className={clsx(elem.type || 'default')}>
                {elem.value}
                {elem.value === true ? 'true' : ''}
                {elem.value === false ? 'false' : ''}
              </div>
            </td>
          ))}
          {props.action && (
            <td className='table__action'>
              <div>
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
              </div>
            </td>
          )}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;
