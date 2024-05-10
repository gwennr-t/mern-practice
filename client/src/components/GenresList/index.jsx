import { useMutation } from '@apollo/client';

import { REMOVE_GENRE } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const GenresList = ({ genres, isLoggedInUser = false }) => {
  const [removeGenre, { error }] = useMutation
  (REMOVE_GENRE, {
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  const handleRemoveGenre = async (genre) => {
    try {
      const { data } = await removeGenre({
        variables: { genre },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!genres.length) {
    return <h3>No Favorite Genres Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {genres &&
          genres.map((genre) => (
            <div key={genre} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{genre}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveGenre(genre)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default GenresList;
