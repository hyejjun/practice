import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import useFetchCategories from '../hooks/useFetchCategories';
import useAccessToken from '../hooks/useAccessToken';
import Button from './ui/Button';
import { apiService } from '../services/ApiService';

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

// TODO: 헤더에 카테고리 목록 보여주기
export default function Header() {
  const navigate = useNavigate();

  const { accessToken, setAccessToken } = useAccessToken();

  const { categories } = useFetchCategories();

  const handleClickLogout = async () => {
    await apiService.logout();
    setAccessToken('');
    navigate('/');
  };

  return (
    <Container>
      <h1>Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
            <ul>
              {!!categories.length
            && categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/products?categoryId=${category.id}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
            </ul>
          </li>
          <li>
            {accessToken ? (
              <span className="logined-box">
                <Link to="/orders">Orders</Link>
                <Link to="/cart">Cart</Link>
                <Button className="logout-button" onClick={handleClickLogout}>
                  Logout
                </Button>
              </span>
            ) : (
              <span>
                <Link to="/login">Login</Link>
              </span>
            )}
          </li>
        </ul>
      </nav>
    </Container>
  );
}
