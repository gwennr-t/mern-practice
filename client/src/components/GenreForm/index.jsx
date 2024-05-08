import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_GENRE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const GenreForm = ({ profileId }) => {
  const [genre, setGenre] = useState('');

  const [addGenre, { error }] = useMutation(ADD_GENRE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addGenre({
        variables: { profileId, genre },
      });

      setGenre('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Like some more genres below.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Like some genres..."
              value={genre}
              className="form-input w-100"
              onChange={(event) => setGenre(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Like Genre
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to like genres! Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default GenreForm;
