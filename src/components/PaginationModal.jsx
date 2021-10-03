import React from 'react';
import { Pagination } from 'semantic-ui-react'
const PaginationModal = ({total, limit, page, onPageChange}) => {
  const totalPages = Math.ceil(total / limit);
  console.log({total, limit, totalPages})

  return (
    <Pagination
      onPageChange={onPageChange}
      defaultActivePage={page + 1}
      totalPages={totalPages}
    />
  );
};

export default PaginationModal;