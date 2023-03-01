import { useEffect } from 'react';

const SearchForm = ({
  inputRef,
  searchInput,
  changeHandler,
  submitHandler,
}) => {
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <form>
      <input
        type='text'
        ref={inputRef}
        placeholder='Search'
        value={searchInput}
        onChange={changeHandler}
      />
      <button onClick={submitHandler}>Search</button>
    </form>
  );
};

export default SearchForm;
