function createPagination(
  totalRecords,
  routeEndpoint,
  limit,
  page,
  otherQueryParams
) {
  const totalPages = Math.ceil(totalRecords / limit);

  console.log(totalRecords);

  pagination = [];

  for (let i = 1; i < totalPages; i++) {
    pagination.push({
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
