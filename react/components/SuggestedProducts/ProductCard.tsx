import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-apollo'
import { Spinner } from 'vtex.styleguide'
import { FormattedCurrency } from 'vtex.format-currency'
import { Image } from 'vtex.store-image'
import GET_PRODUCT_BY_ID from '../../graphql/getProductById.graphql'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'product-summary',
  'product-summary__section',
  'product-summary__section--image',
  'product-summary__section--name',
  'product-summary__section--lowPrice',
  'product-summary__section--hightPrice',
  'product-summary__section--normalPrice'
];

const ProductCard = ({ skuID, setTotal, selected }: any) => {

  const { handles } = useCssHandles(CSS_HANDLES)

  const [productImage, setProductImage] = useState<string>('')
  const { loading, error, data: productData } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      id: skuID
    }
  })

  useEffect(() => {
    setProductImage('')
    if (productData && !loading) {
      let imageGroup = productData.product.items.filter((item: any) => skuID === item.itemId)
      setProductImage(imageGroup[0].images[0].imageUrl)
    }
  }, [productData, skuID])

  useEffect(() => {
  }, [productImage])

  useEffect(() => {
    const elements = document.querySelectorAll('.price-special');
    if (elements) {
      let suma = 0;
      if (elements) {
        elements.forEach((element: any) => {
          const value = parseFloat(element?.textContent);
          suma += value;
        })
        setTotal(suma)
      }
    }
  }, [productData, selected])

  return (
    <div className={handles['product-summary']}>
      {loading && <div><Spinner color="#b3b3b3" size={16} /></div>}
      {error && <>Ocurrio un error al realizar la consulta</>}
      {
        !loading && productData
        &&
        <a className={handles['product-summary__section']}
          href={'/' + productData.product.linkText + '/p?skuId=' + skuID}
          target='_blank'>
          <div className={handles['product-summary__section--image']}>
            <Image
              src={productImage}
              maxHeight={400}
              alt={productData.product.productName}
              title={productData.product.productName}
            />
          </div>
          <p className={handles['product-summary__section--name']}>
            {productData.product.productName}
          </p>
          {
            productData.product.priceRange.listPrice.highPrice !== productData.product.priceRange.sellingPrice.highPrice
            &&
            <p className={handles['product-summary__section--lowPrice']}>
              <FormattedCurrency value={productData.product.priceRange.listPrice.highPrice} />
            </p>
          }
          <p className={handles['product-summary__section--normalPrice']}>
            <FormattedCurrency value={productData.product.priceRange.sellingPrice.highPrice} />
          </p>
          <p style={{ display: 'none' }} className="price-special">
            {productData.product.priceRange.sellingPrice.highPrice}
          </p>
        </a>
      }
    </div>
  )
}

export default ProductCard