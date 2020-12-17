import axios from "axios"

export const shopifyRequest = (query, variables) =>
  axios({
    url: "https://blfcqevvrh.execute-api.us-east-1.amazonaws.com/api/graphql",
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    data: {
      query,
      variables,
    },
  })
