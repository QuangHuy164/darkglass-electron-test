/* eslint-disable prettier/prettier */
import { useState } from 'react';

interface ShopifyProps {
  id: string;
  title: string;
  description: string;
  variants?: {
    edges: Array<{
      node: {
        sku: string;
        price: {
          amount: string;
        };
      };
    }>;
  };
}

interface ProductEdgeProps {
  node: ShopifyProps;
}

interface ApiResponse {
  data: {
    edges: ProductEdgeProps[];
  };
}

function Fetch() {
  const [products, setProducts] = useState<ProductEdgeProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const onFetch = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const fetchProducts = await fetch(
        ' http://localhost:3000',
      );

      const response: ApiResponse = await fetchProducts.json();

      if (response.data.edges) {
        setProducts(response.data.edges);
      }
    } catch (error) {
      console.log('Error while fetching', error)
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProducts = products.filter(({ node }) => {
    const query = search.toLowerCase();
    const filteredTitle = node.title.toLowerCase().includes(query);

    const sku = node.variants?.edges?.[0].node.sku || ''
    const filteredSku = sku.toLowerCase().includes(query);

    const price = node.variants?.edges?.[0].node.price.amount || ''
    const filteredPrice = price.includes(query)
    return filteredTitle || filteredSku || filteredPrice;
  });

  return (
    <div>
      <h2>Shopify Products</h2>

      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <button
          type="button"
          onClick={onFetch}
          disabled={isLoading}
          style={{ background: '#007bff', color: '#fff' }}
        >
          {isLoading ? 'Loading...' : 'Fetch Products'}
        </button>
      {!isLoading && products.length > 0 && (<input
        style={{padding: '10px', marginLeft: '40px'}}
          type="text"
          placeholder="Search name or SKU..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        )}
        
      </div>

      {isLoading && <p>Connecting Node.js server...</p>}

      {!isLoading && products.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>SKU</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(({ node }) => {
              const firstVariant = node.variants?.edges?.[0].node;
              return (
              <tr key={node.id}>
                <td style={{padding: '10px'}}>{node.title}</td>
                <td style={{padding: '10px'}}>{firstVariant?.sku}</td>
                <td style={{padding: '10px'}}>{firstVariant?.price.amount}</td>
              </tr>
            )})}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Fetch;
