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
  const [stock, setStock] = useState<number>()
  const { loading, error, data: productData } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      id: skuID
    }
  })

  useEffect(() => {
    setProductImage('')
    if (productData && !loading) {
      let selectedItem = productData.product.items.filter((item: any) => skuID === item.itemId)
      setStock(selectedItem[0].sellers[0].commertialOffer.AvailableQuantity)
      setProductImage(selectedItem[0].images[0].imageUrl)
    }
  }, [productData, skuID])

  useEffect(() => {
  }, [productImage, stock])

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
    setTimeout(() => {
      if (productData && !loading) {
        const elements = document.querySelectorAll('.bonlifeco-front-end-applications-0-x-suggested__complements--products-child');
        elements.forEach((element) => {
          const paragraph: any = element.querySelector('small');
          if (paragraph && paragraph.textContent.toLowerCase().includes('sin stock')) {
            const deleteButton: any = element.querySelector('.bonlifeco-front-end-applications-0-x-complements__products--delete');
            if (deleteButton) {
              deleteButton.click();
            }
          }
        });
      }
    }, 1000);
  }, [productData, selected])

  return (
    <>
      {loading && <div><Spinner color="#b3b3b3" size={16} /></div>}
      {error && <small>Sin stock</small>}
      {
        !loading && productData
          ?
          <div className={handles['product-summary']}>
            <a className={handles['product-summary__section']}
              href={'/' + productData.product.linkText + '/p?skuId=' + skuID}
              target='_blank'>
              <div className={handles['product-summary__section--image']}>
                <Image
                  src={productImage}
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
              {
                stock === 0
                &&
                <small>Sin stock</small>
              }
            </a>
          </div>
          : null
      }
    </>
  )
}

export default ProductCard