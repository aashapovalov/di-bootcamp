import {type FormEvent, useState} from "react";
import type { ChangeEvent } from "react";


export function Form() {
  const [ title, setTitle ] = useState("");
  const [ author, setAuthor ] = useState("");
  const [ genre, setGenre ] = useState("");
  const [ yearPublished, setYearPublished ] = useState(0);
  const [ formSubmitted, setFormSubmitted ] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setFormSubmitted(true);
      const formData = new FormData(event.currentTarget)
      console.log(Object.fromEntries(formData.entries()))
  }

  function onChangeTitle (event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function onChangeAuthor (event: ChangeEvent<HTMLInputElement>) {
      setAuthor(event.target.value);
  }

  function onChangeGenre (event: ChangeEvent<HTMLInputElement>) {
      setGenre(event.target.value);
  }

  function onChangeYearPublished (event: ChangeEvent<HTMLInputElement>) {
      setYearPublished(Number(event.target.value));
  }

  return (
      <>
          {formSubmitted && (<p>data sent!</p>)}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Enter title:</label>
          <input
              onChange={onChangeTitle}
              id="title"
              type="text"
              name="title"
              placeholder="Enter title"
              value={title}
          />
            <label htmlFor="author">Enter author:</label>
            <input
                onChange={onChangeAuthor}
                id="author"
                type="text"
                name="author"
                placeholder="Enter author"
                value={author}
            />
            <label htmlFor="genre">Enter genre:</label>
            <input
                onChange={onChangeGenre}
                id="genre"
                type="text"
                name="genre"
                placeholder="Enter genre"
                value={genre}
            />
            <label htmlFor="yearPublished">Enter genre:</label>
            <input
                onChange={onChangeYearPublished}
                id="yearPublished"
                type="text"
                name="yearPublished"
                placeholder="Enter year of publishing"
                value={yearPublished}
            />
            <button type="submit">Submit</button>
        </form>
      </>
  )
}

