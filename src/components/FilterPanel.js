import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';

const FilterPanel = function({onChangeHeandler}) {
  return (
    <div className="filter-panel">
      <Input placeholder="Search name" name="fullName" type="string" className="filter-field" 
      onChange={onChangeHeandler}/>
      <Input placeholder="Search country" name="country" type="string" className="filter-field" 
      onChange={onChangeHeandler}/>
      <Input placeholder="Search date of birth" name="dateOfBirth" type="string" className="filter-field" 
      onChange={onChangeHeandler}/>
    </div>
  )
}

FilterPanel.propTypes = {
  onChangeHeandler: PropTypes.func.isRequired
};
export default FilterPanel;