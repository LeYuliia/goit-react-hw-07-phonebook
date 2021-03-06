import React from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/phonebook/actions";
//Styles:
import "./Filter.scss";
import { InputGroup, FormControl } from "react-bootstrap";
import selectors from "../../redux/phonebook/selectors";

const Filter = ({ filter, onChange }) => (
  <InputGroup size="sm" className="filter-wrapp">
    <InputGroup.Prepend>
      <InputGroup.Text>Find contact:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl type="text" name="filter" value={filter} onChange={onChange} />
  </InputGroup>
);

const mapStateToProps = (state) => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
