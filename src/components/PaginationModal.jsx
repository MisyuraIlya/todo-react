import React from 'react';
import { Pagination } from 'semantic-ui-react'
const PaginationModal = ({ page, paginationTotalPages, onPageChange }) => {
  return (
    <Pagination
      boundaryRange={0}
      onPageChange={onPageChange}
      defaultActivePage={page+1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={paginationTotalPages}
    />
  );
};

export default PaginationModal;