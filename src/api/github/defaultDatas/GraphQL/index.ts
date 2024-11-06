const USER = `query userInfo($username: String!) {
    user(login: $username) {
        name
        login
        avatarUrl
        contributionsCollection {
            contributionCalendar {
                totalContributions
                months {
                    name
                    firstDay
                    totalWeeks
                    year
                }
                weeks {
                    firstDay
                    contributionDays {
                        date
                        weekday
                        color
                        contributionCount
                    }
                }
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

export const GITHUB_GRAPHQL_QUERY = {
  USER,
};
