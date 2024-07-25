import React, { useState } from 'react';
import styled from 'styled-components';
import { catalog } from '../components/Items';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Cart from '../components/Cart';
import BackToTop from '../components/BackToTop';


const Container = styled.div`
  padding-top: 4rem;
  background-color: ${(props) => (props.theme === 'light' ? '#f9f9f9' : '#2c2c2c')};
  color: ${(props) => (props.theme === 'light' ? '#333' : '#eaeaea')};
  min-height: 100vh;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

const ProductCard = styled.div`
  background: ${(props) => (props.theme === 'light' ? '#ffffff' : '#3a3a3a')};
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1.5rem;
  }

  h5 {
    font-size: 1.2rem;
    margin: 0.75rem 0;
  }

  p {
    font-size: 1rem;
    margin: 0.75rem 0;
  }

  button {
    background-color: ${(props) => (props.theme === 'light' ? '#007bff' : '#ffc107')};
    color: #fff;
    border: none;
    border-radius: 25px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s, opacity 0.3s;

    &:hover {
      background-color: ${(props) => (props.theme === 'light' ? '#0056b3' : '#e0a800')};
      opacity: 0.9;
    }
  }
`;

const SortSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;

  button {
    margin: 0 0.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (props.theme === 'light' ? '#007bff' : '#ffc107')};
    color: #fff;
    border-radius: 25px;
    transition: background-color 0.3s, opacity 0.3s;

    &:hover {
      background-color: ${(props) => (props.theme === 'light' ? '#0056b3' : '#e0a800')};
      opacity: 0.9;
    }
  }
`;

const FilterButton = styled.button`
  position: fixed;
  bottom: 5rem;
  right: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.theme === 'light' ? 'linear-gradient(135deg, #007bff, #0056b3)' : 'linear-gradient(135deg, #ffc107, #e0a800)')};
  color: #fff;
  border-radius: 50%;
  font-size: 1.6rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, transform 0.3s;
  z-index: 1000;

  &:hover {
    background: ${(props) => (props.theme === 'light' ? 'linear-gradient(135deg, #0056b3, #003d7a)' : 'linear-gradient(135deg, #e0a800, #c69100)')};
    transform: scale(1.1);
  }
`;

const CartButton = styled.button`
  position: fixed;
  bottom: 10rem;
  right: 1.7rem;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.theme === 'light' ? 'linear-gradient(135deg, #007bff, #0056b3)' : 'linear-gradient(135deg, #ffc107, #e0a800)')};
  color: #fff;
  border-radius: 50%;
  font-size: 1.6rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, transform 0.3s;
  z-index: 1000;

  &:hover {
    background: ${(props) => (props.theme === 'light' ? 'linear-gradient(135deg, #0056b3, #003d7a)' : 'linear-gradient(135deg, #e0a800, #c69100)')};
    transform: scale(1.1);
  }
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.theme === 'light' ? '#f9f9f9' : '#444')};
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  margin: 2rem 0;

  input {
    border: none;
    background: none;
    outline: none;
    flex: 1;
    color: ${(props) => (props.theme === 'light' ? '#333' : '#eee')};
    font-size: 1rem;
    padding: 0.5rem;
  }

  svg {
    margin-left: 0.5rem;
    color: ${(props) => (props.theme === 'light' ? '#333' : '#eee')};
  }
`;

const CloseFilterButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: inherit;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => (props.theme === 'light' ? '#007bff' : '#ffc107')};
  }
`;

const FilterSection = styled.div`
  position: fixed;
  top: 4rem;
  right: ${(props) => (props.open ? '0' : '-100%')};
  width: 350px;
  height: calc(100% - 4rem);
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#2c2c2c')};
  color: ${(props) => (props.theme === 'light' ? '#333' : '#eaeaea')};
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  transition: right 0.3s ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

const FilterGroup = styled.div`
  margin-bottom: 2rem;
`;

const FilterTitle = styled.h5`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => (props.theme === 'light' ? '#333' : '#eaeaea')};
`;

const FilterItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5rem;
  }

  label {
    font-size: 1rem;
  }
`;

const PriceRange = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;

  input[type='range'] {
    width: 100%;
  }

  span {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

const Catalog = ({ theme, toggleTheme }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [sortOption, setSortOption] = useState('new');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [search, setSearch] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleSort = (option) => {
    setSortOption(option);
  };

  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColors((prev) =>
      event.target.checked ? [...prev, color] : prev.filter((c) => c !== color)
    );
  };

  const handleSizeChange = (event) => {
    const size = event.target.value;
    setSelectedSizes((prev) =>
      event.target.checked ? [...prev, size] : prev.filter((s) => s !== size)
    );
  };

  const handleKeywordChange = (event) => {
    const keyword = event.target.value;
    setSelectedKeywords((prev) =>
      event.target.checked ? [...prev, keyword] : prev.filter((k) => k !== keyword)
    );
  };

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    alert('Checkout successful!');
    setCartItems([]);
    setCartOpen(false);
  };

  const getFilteredCatalog = () => {
    let items = [];
    catalog.forEach((category) => {
      items = items.concat(category.items);
    });

    return items
      .filter(
        (item) =>
          item &&
          (!search || item.name.toLowerCase().includes(search.toLowerCase())) &&
          (!selectedColors.length || item.colors && item.colors.some((color) => selectedColors.includes(color))) &&
          (!selectedSizes.length || item.size && item.size.some((size) => selectedSizes.includes(size))) &&
          (!selectedKeywords.length || item.keywords && selectedKeywords.every((keyword) => item.keywords.includes(keyword))) &&
          parseInt(item.price.substring(1)) >= priceRange[0] &&
          parseInt(item.price.substring(1)) <= priceRange[1]
      )
      .sort((a, b) => {
        const priceA = parseFloat(a.price.substring(1));
        const priceB = parseFloat(b.price.substring(1));
        if (sortOption === 'price_asc') return priceA - priceB;
        if (sortOption === 'price_desc') return priceB - priceA;
        return 0;
      });
  };

  const filteredCatalog = getFilteredCatalog();

  return (
    <Container theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <SortSection>
        <button onClick={() => handleSort('new')}>New</button>
        <button onClick={() => handleSort('price_asc')}>Price Low to High</button>
        <button onClick={() => handleSort('price_desc')}>Price High to Low</button>
      </SortSection>
      <FilterButton onClick={handleFilterToggle}>Filters</FilterButton>
      <CartButton onClick={handleCartToggle}>
        <FaShoppingCart />
      </CartButton>
      <FilterSection open={filterOpen} theme={theme}>
        <CloseFilterButton onClick={handleFilterToggle}>×</CloseFilterButton>
        <SearchInput theme={theme}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearchChange}
          />
          <FaSearch />
        </SearchInput>
        <FilterGroup>
          <FilterTitle>Price Range</FilterTitle>
          <PriceRange>
            <input
              type="range"
              min={0}
              max={150}
              value={priceRange[0]}
              onChange={(event) => handlePriceChange(event, [event.target.valueAsNumber, priceRange[1]])}
            />
            <input
              type="range"
              min={0}
              max={150}
              value={priceRange[1]}
              onChange={(event) => handlePriceChange(event, [priceRange[0], event.target.valueAsNumber])}
            />
            <span>${priceRange[0]} - ${priceRange[1]}</span>
          </PriceRange>
        </FilterGroup>
        <FilterGroup>
          <FilterTitle>Colors</FilterTitle>
          {["White", "Blue", "Yellow", "Black", "Brown", "Light Blue", "Dark Blue", "Green", "Light Grey", "Red", "Grey", "Silver", "Orange", "Navy Blue"].map((color) => (
            <FilterItem key={color}>
              <input
                type="checkbox"
                value={color}
                checked={selectedColors.includes(color)}
                onChange={handleColorChange}
              />
              <label>{color}</label>
            </FilterItem>
          ))}
        </FilterGroup>
        <FilterGroup>
          <FilterTitle>Sizes</FilterTitle>
          {["1", "4", "5", "8", "9", "10", "11", "S", "M", "L", "XL", "24x36", "One Size"].map((size) => (
            <FilterItem key={size}>
              <input
                type="checkbox"
                value={size}
                checked={selectedSizes.includes(size)}
                onChange={handleSizeChange}
              />
              <label>{size}</label>
            </FilterItem>
          ))}
        </FilterGroup>
        <FilterGroup>
          <FilterTitle>Keywords</FilterTitle>
          {[
  "official", "match", "football", "training", "durable", "plush", "kids", 
  "street", "retro", "classic", "home", "jersey", "away", "third", 
  "performance", "nike", "phantom", "adidas", "predator", 
  "puma", "future", "under armour", "magnetico", "new balance", "furon", 
  "scarf", "accessory", "winter", "cap", "summer", "gloves", "backpack", 
  "school", "beanie", "keychain", "souvenir", "gift", "mug", "poster", 
  "wall decor", "pennant", "decoration", "magnet", "goalkeeper", "gear", 
  "shorts", "socks", "pads"
].map(
            (keyword) => (
              <FilterItem key={keyword}>
                <input
                  type="checkbox"
                  value={keyword}
                  checked={selectedKeywords.includes(keyword)}
                  onChange={handleKeywordChange}
                />
                <label>{keyword}</label>
              </FilterItem>
            )
          )}
        </FilterGroup>
      </FilterSection>
      <ProductGrid>
        {filteredCatalog.map((item, index) => (
          <ProductCard key={index} theme={theme}>
            <img src={item.imageUrl} alt={item.name} />
            <h5>{item.name}</h5>
            <p>{item.price}</p>
            <p>{item.colors && item.colors.join(', ')}</p>
            <p>{item.size && item.size.join(', ')}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </ProductCard>
        ))}
      </ProductGrid>
      <Cart
  theme={theme}
  cartItems={cartItems}
  removeFromCart={removeFromCart}
  handleCheckout={handleCheckout}
  open={cartOpen}
  handleCartToggle={handleCartToggle}
/>
      <Footer theme={theme} />
      <BackToTop theme={theme} />
    </Container>
  );
};

export default Catalog;
