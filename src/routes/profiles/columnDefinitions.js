import React from 'react';

export default [
  {
    Header: '#',
    accessor: 'id',
    width: 40,
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Birthday',
    id: 'Birthday',
    accessor: d => d.birthday.format('YYYY-MM-DD'),
  },
  {
    Header: 'Sex',
    accessor: 'sex',
    filterMethod: (filter, row) => {
      if (filter.value === 'all') {
        return true;
      }
      const id = filter.pivotId || filter.id;
      return row[id] !== undefined ? String(row[id]) === filter.value : true;
    },
    // eslint-disable-next-line react/prop-types
    Filter: ({ filter, onChange }) =>
      <select
        onChange={event => onChange(event.target.value)}
        style={{ width: '100%' }}
        value={filter ? filter.value : ''}
      >
        <option value="all">all</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>,
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'Goal',
    accessor: 'goal',
  },
  // {
  //   Header: 'Interests',
  //   accessor: 'interests',
  //   Cell: row =>
  //     <span>
  //       {row.value.map(v =>
  //         <div key={v}>
  //           {v}
  //         </div>,
  //       )}
  //     </span>,
  // },
];
