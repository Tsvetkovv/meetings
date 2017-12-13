export default [
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
