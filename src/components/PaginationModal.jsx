import React from 'react';
import { Pagination } from 'semantic-ui-react'
const PaginationModal = ({pagination,paginate}) => {


  // const onChange = (e, pageInfo) => {
  // 	setActivePage(pageInfo.activePage);
  //   setApiUrl('https://swapi.co/api/people/?page=' + page.activePage.toString());
  // };
  console.log(pagination.page)
  // console.log(paginate)
  return (
    <Pagination
      // activePage={pagination.page+1}
      // onPageChange={}
      boundaryRange={0}
      defaultActivePage={pagination.page+1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={10}
    />
  );
};

export default PaginationModal;