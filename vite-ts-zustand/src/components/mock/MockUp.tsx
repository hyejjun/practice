import axios from 'axios';

import { useState } from 'react';
import { styled } from 'styled-components';

import { useEffectOnce } from 'usehooks-ts';

const BASE_URL = 'https://example.com';

type PostItem = {
  id: number;
  title: string;
  body: string;
}

const PostItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1rem;
  
  ul {
    width: 20rem;
    padding: 1rem 0.5rem;
    border : 1px solid black;
  }

  li {
    list-style: none;
  }
`;

export default function Mocking() {
  const [list, setList] = useState<PostItem[]>([]);

  async function fetchPosts() {
    const { data } = await axios.get(`${BASE_URL}/posts`);

    if (data) {
      setList(data?.posts);
    }
  }

  async function createPosts() {
    const { data } = await axios.post(`${BASE_URL}/posts`);
    fetchPosts();
    console.log(data);
  }

  useEffectOnce(() => {
    fetchPosts();
  });

  return (
    <div>
      <div>
        <div>게시판</div>
        <div>
          <button
            type="button"
            onClick={() => { createPosts(); }}
          >
            create
          </button>
        </div>
        <PostItemWrap>
          {
            list?.map((v) => (
              <ul key={v.id}>
                <li>
                  id :
                  {' '}
                  {v.id}
                </li>
                <li>
                  title :
                  {' '}
                  {v.title}
                </li>
                <li>
                  body :
                  {' '}
                  {v.body}
                </li>
              </ul>
            ))
          }
        </PostItemWrap>
      </div>

    </div>
  );
}
