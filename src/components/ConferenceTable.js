import React from 'react';

const ConferenceTable = ({ data }) => {
  return (
    <>
      <div className="row">
      <h3 className="display-5 p-3">Conferences</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Abbr.</th>
            <th scope="col">Short name</th>
            <th scope="col">name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) =>
            <tr>
              <td>{row.abbreviation}</td>
              <td>{row.short_name}</td>
              <td>{row.name}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default ConferenceTable;
