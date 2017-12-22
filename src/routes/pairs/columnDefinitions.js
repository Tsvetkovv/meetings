function getPartnerCols(accessor) {
  return [
    {
      Header: 'Id',
      accessor: `${accessor}.id`,
    },
    {
      Header: 'Name',
      accessor: `${accessor}.name`,
    },
  ];
}

export default [
  {
    Header: '#',
    accessor: 'id',
    width: 40,
  },
  {
    Header: 'Date start',
    id: 'dateStart',
    accessor: d => d.dateStart && d.dateStart.format('YYYY-MM-DD'),
  },
  {
    Header: 'Date end',
    Cell: ({ value }) => value || '-',
    id: 'dateEnd',
    accessor: d => d.dateEnd && d.dateEnd.format('YYYY-MM-DD'),
  },
  {
    Header: 'First partner',
    columns: getPartnerCols('firstPartner'),
  },
  {
    Header: 'Second Partner',
    columns: getPartnerCols('secondPartner'),
  },
];
