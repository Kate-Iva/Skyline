import {
  FormControl,
  InputGroup,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';

const DropDown = () => {
  return (
    <>
      <DropdownButton variant="outline-secondary" title="Dropdown">
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </DropdownButton>
    </>
  );
};
const Search = ({query, onQueryChange}) => {
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl placeholder="Search" onChange={(event) => {
            onQueryChange(event.target.value)
        }} value={query} />
        <DropDown />
      </InputGroup>
    </>
  );
};

export default Search;
