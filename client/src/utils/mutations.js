import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_GENRE = gql`
  mutation addGenre($profileId: ID!, $genre: String!) {
    addGenre(profileId: $profileId, genre: $genre) {
      _id
      name
      genres
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_GENRE = gql`
  mutation removeGenre($genre: String!) {
    removeGenre(genre: $genre) {
      _id
      name
      genres
    }
  }
`;
