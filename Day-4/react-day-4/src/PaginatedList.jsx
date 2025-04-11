import React, { useEffect, useState } from 'react';

const PaginatedList = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error("API did not return an array:", data);
        }
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  if (!Array.isArray(items)) {
    return <p>Error: items is not an array.</p>;
  }

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <h2>Paginated Items</h2>

      <ul>
        {currentItems.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>

        <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>

        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;
