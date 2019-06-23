import React from 'react'
import { MdStar } from 'react-icons/md'
import styled from 'styled-components'

const Card = styled.div`
  width: 80vh;
  height: 100px;
  background-color: rgb(34, 17, 51);
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem auto;
  color: rgb(63, 169, 245);
  h4 {
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  ul {
    display: flex;
    margin-left: 2px;
  }
  li {
    margin: 0 1rem;
    padding: 3px;
    border-radius: 4px;
    list-style: none;
    background: rebeccapurple;
    color: #fff;
  }
`

const RepoListItem = ({ repoDetails }) => {
  const {
    url,
    name,
    primaryLanguage,
    stargazers: { totalCount },
  } = repoDetails
  return (
    <Card>
      <h4>
        <a href={url}>{name}</a>
      </h4>
      <ul>
        <li>{primaryLanguage ? primaryLanguage.name : 'JavaScript'}</li>
        <li>
          <MdStar css={{ verticalAlign: 'sub', color: 'gold' }} size={20} />{' '}
          {totalCount}
        </li>
      </ul>
    </Card>
  )
}

export default RepoListItem