function createPagination(
  totalRecords,
  routeEndpoint,
  limit,
  page,
  otherQueryParams
) {
  const totalPages = Math.ceil(totalRecords / limit);

  const nextPageNumber = page === totalPages ? totalPages : page + 1;
  const previousPageNumber = page === 1 ? 1 : page - 1;

  pagination = {
    pageLinks: [],
    nextPage: `${routeEndpoint}?page=${nextPageNumber}&limit=${limit}${
      otherQueryParams ? "&" + otherQueryParams : ""
    }`.trim(),
    previousPage: `${routeEndpoint}?page=${previousPageNumber}&limit=${limit}${
      otherQueryParams ? "&" + otherQueryParams : ""
    }`.trim(),
  };

  for (let i = 1; i <= totalPages; i++) {
    pagination.pageLinks.push({
      pageNumber: i,
      activePage: page === i ? true : false,
      link: `${routeEndpoint}?page=${i}&limit=${limit}${
        otherQueryParams ? "&" + otherQueryParams : ""
      }`.trim(),
    });
  }

  return pagination;
}

module.exports = createPagination;
