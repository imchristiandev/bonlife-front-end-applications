import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'
import { FormattedCurrency } from 'vtex.format-currency'
import { useOrderItems } from 'vtex.order-items/OrderItems'
// components
import ProductCard from './ProductCard';
// types 
import { CustomProperty, FinalArray } from './types'
// function 
import { finalArray } from './helpers';
// styles 
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'container__suggested',
  'container__suggested--principal',
  'suggested__principal--title',
  'container__suggested--add',
  'container__suggested--add-two',
  'container__suggested--complements',
  'suggested__complements--products-child',
  'suggested__complements--title',
  'suggested__complements--products',
  'complements__products--delete',
  'container__suggested--resumen',
  'suggested__resumen--text',
  'suggested__resumen--button'
];

const SuggestedProducts = () => {

  const { handles } = useCssHandles(CSS_HANDLES)

  const { product, selectedItem } = useProduct()
  const { addItem } = useOrderItems()

  const [productSelected, setProductSelected] = useState<string>('')
  const [propertiesProduct, setPropertiesProduct] = useState<CustomProperty[]>([])
  const [selected, setSelected] = useState<FinalArray[]>([{
    principal: '',
    sugerido1: '',
    sugerido2: '',
    sugerido3: ''
  }])
  const [total, setTotal] = useState(0)

  const deleteSku = (id: string) => {
    const newData: any = selected[0];
    for (let key in newData) {
      if (newData[key] === id) {
        delete newData[key];
        break;
      }
    }
    setSelected([newData])
  }

  const addToCart = () => {
    addItem([
      {
        id: selected[0].principal,
        seller: '1',
        quantity: 1,
      },
      {
        id: selected[0].sugerido1,
        seller: '1',
        quantity: 1,
      },
      {
        id: selected[0].sugerido2,
        seller: '1',
        quantity: 1,
      },
      {
        id: selected[0].sugerido3,
        seller: '1',
        quantity: 1,
      }
    ])
  }

  useEffect(() => {
    if (product && product.properties && selectedItem) {
      setProductSelected(selectedItem.itemId)
      setPropertiesProduct(product.properties)
    }
  }, [product, selectedItem])

  useEffect(() => {
    setSelected([])
    setTimeout(() => {
      if (propertiesProduct && propertiesProduct.length) {
        let filterProducts: any = finalArray(propertiesProduct).filter((number) => productSelected === number.principal)
        setSelected(filterProducts)
      }
    }, 500);
  }, [productSelected, propertiesProduct])

  useEffect(() => {
  }, [total, selected])

  return (
    <>
      {
        selected && selected.length && Object.keys(selected[0]).length > 1
          ?
          selected.map((element) =>
            <div className={handles['container__suggested']}>
              <div className={handles['container__suggested--complements']}>
                <p className={handles['suggested__complements--title']}>Completa tu compra</p>
                <div className={handles['suggested__complements--products']}>
                  <div className={handles['suggested__complements--products-child']}>
                    <p className={handles['suggested__principal--title']}>Estás viendo</p>
                    <div className={handles['container__suggested--principal']}>
                      <ProductCard skuID={element.principal} setTotal={setTotal} />
                    </div>
                  </div>
                  {
                    element.sugerido1 && element.sugerido1 !== '0'
                    &&
                    <div className={handles['suggested__complements--products-child']}>
                      <span className={`${handles['container__suggested--add']}`}>+</span>
                      <div className='relative'>
                        <button onClick={() => deleteSku(element.sugerido1)} className={handles['complements__products--delete']}>✖</button>
                        <ProductCard skuID={element.sugerido1} setTotal={setTotal} selected={selected} />
                      </div>
                    </div>
                  }
                  {
                    element.sugerido2 && element.sugerido2 !== '0'
                    &&
                    <div className={handles['suggested__complements--products-child']}>
                      <span className={`${handles['container__suggested--add']} ${handles['container__suggested--add-two']}`}>+</span>
                      <div className='relative'>
                        <button onClick={() => deleteSku(element.sugerido2)} className={handles['complements__products--delete']}>✖</button>
                        <ProductCard skuID={element.sugerido2} setTotal={setTotal} selected={selected} />
                      </div>
                    </div>
                  }
                  {
                    element.sugerido3 && element.sugerido3 !== '0'
                    &&
                    <div className={handles['suggested__complements--products-child']}>
                      <span className={handles['container__suggested--add']}>+</span>
                      <div className='relative'>
                        <button onClick={() => deleteSku(element.sugerido3)} className={handles['complements__products--delete']}>✖</button>
                        <ProductCard skuID={element.sugerido3} setTotal={setTotal} selected={selected} />
                      </div>
                    </div>
                  }
                </div>
              </div>
              <div className={handles['container__suggested--resumen']}>
                <p className={handles['suggested__resumen--text']}>
                  Llevas estos {Object.keys(selected[0]).length} productos por:
                  <br /><br />
                  <strong>
                    <FormattedCurrency value={total} />
                  </strong>
                </p>
                <button onClick={addToCart} className={handles['suggested__resumen--button']}>Agrega Productos</button>
              </div>
            </div>
          )
          : null
      }
    </>
  )
}

export default SuggestedProducts