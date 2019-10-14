import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TeamTable from './TeamTable';
import ConferenceTable from './ConferenceTable';
import ReactPaginate from 'react-paginate';
import { setOffsetAction, setFiltersAction, setPerPageAction } from '../actions';
import { filterData, paginateData } from '../helpers';

const Components = {
  teams: TeamTable,
  conferences: ConferenceTable,
}

const DataTable = ({ entity }) => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.app[entity]);
  const filters = useSelector(state => state.app.filters);
  const offset = useSelector(state => state.app.offset);
  const perPage = useSelector(state => state.app.perPage);

  const filteredData = filterData(data, filters);
  const paginatedData = paginateData(filteredData, offset, perPage);
  const pageCount = filteredData.length / perPage;

  const TableComponent = Components[entity];

  const handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * perPage);
    dispatch(setOffsetAction(offset));
  };

  return (
      <>
        <TableComponent data={paginatedData} setFilter={(filters) => dispatch(setFiltersAction(filters))}/>
        <div className="row">
        <div className="col-sm-9 flex-column">
        <nav>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            activeClassName={'active'}
            pageLinkClassName={'page-link'}
          />
        </nav>
        </div>
        <div className="col-sm-3">
        <form className="form-inline">
          <div className="form-group">
            <label className="mr-3">Per page </label>
            <select className="form-control" value={perPage} onChange={({ target }) => dispatch(setPerPageAction(target.value * 1))}>
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
        </form>
        </div>
        </div>
      </>
  );
}

export default DataTable;