import React, { useState } from "react";

const Search = ({ filterItemsFunction }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    filterItemsFunction(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search trails"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
