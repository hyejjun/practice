import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.header`
  margin-bottom: 2rem;

  h1 {
    font-size: 4rem;
  }

  nav {
    padding-block: 2rem;

    ul {
      display: flex;
    }

    li {
      margin-right: 2rem;
    }

    .active {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .logined-box {
    display: flex;
    gap: 15px;
  }
`;

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

        </ul>
      </nav>
    </Container>
  );
}
