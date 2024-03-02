import PropTypes from "prop-types";

import { SearchInputBox, SearchLabel, SearchWrapper } from "./Filter.styled";

export const Filter = ({ handleFilter }) => {
  return (
    <SearchWrapper>
      <SearchLabel htmlFor="">Find contacts by name</SearchLabel>
      <SearchInputBox
        name="filter"
        onChange={handleFilter}
        type="text"
        placeholder="Сontact search..."
      />
    </SearchWrapper>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
