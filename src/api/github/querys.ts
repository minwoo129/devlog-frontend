import { convertQueryDataFuncType } from "./types";

export const REQUEST_GITHUB_USER_DATA_QUERY = `query userInfo($username: String!) {
    user(login: $username) {
        name
        login
        avatarUrl
        contributionsCollection {
            contributionCalendar {
                totalContributions
            }
        }
        repositories(first:100, orderBy: {field: CREATED_AT, direction: DESC}) {
            nodes {
                name
                createdAt
                languages(first: 2) {
                    edges {
                        node {
                            name
                            id
                            color
                        }
                    }
                }
            }
        }
        
    }
}`;

export const convertQueryData: convertQueryDataFuncType = (args) => {
  const { queryType, username } = args;
  return {
    query: REQUEST_GITHUB_USER_DATA_QUERY,
    variables: {
      username,
    },
  };
};
