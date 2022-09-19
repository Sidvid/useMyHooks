import React from 'react'
import useFetch from './useFetch'

function UseFetchIndex() {
    const { state } = useFetch("https://jsonplaceholder.typicode.com/posts");
    const {data , isLoading}=state;

    console.log("==>",state);

  return (
    <div>
      {isLoading ? (
        <h1>Loading.........</h1>
      ) : (
        data.map((post) => {
          return <p>{post?.body}</p>;
        })
      )}
    </div>
  );
}

export default UseFetchIndex