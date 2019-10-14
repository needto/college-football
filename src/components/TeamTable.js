import React from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import DynamicImage from './DynamicImage';

const TeamTable = ({ data, setFilter }) => {
  const logo = (data) => {
    return (
      data.logos !== null
        ? <DynamicImage src={data.logos[0]} alt="Logo" key={data.logos[0]} />
        : ""
    )
  }

  const options = useSelector(state => [{value: "", label: "All"}].concat(state.app['conferences'].map(c => { return {value: c.name, label: c.name} })));

  const handleChange = (e) => {
    setFilter({ conference:  e.value });
  };

  return (
    <>
      <div className="row">
      <h3 className="display-5 p-3 col-md-8">Teams</h3>
      <Select className="col-md-4 p-3" options={options} placeholder="Conference" onChange={handleChange} />
      </div>
      <table className="table table-striped">
      <thead>
        <tr>
        <th className="Table-logo">&nbsp;</th>
        <th scope="col">Abbr.</th>
        <th scope="col">School</th>
        <th scope="col">Mascot</th>
        <th scope="col">Division</th>
        <th scope="col">Conference</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map((row, index) =>
          <tr>
            <td className="Table-logo">{logo(row)}</td>
            <td>{row.abbreviation}</td>
            <td>{row.school}</td>
            <td>{row.mascot}</td>
            <td>{row.division}</td>
            <td>{row.conference}</td>
          </tr>
        )
      }
      </tbody>
      </table>
    </>
  );
}

export default TeamTable;
