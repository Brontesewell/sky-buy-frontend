import _ from 'underscore'


export function constructItem(itemData){
    // price, pic, title, sales, delivery_fee, shop_title
    return {
      external_id: itemData["num_iid"],
      price: itemData["price"],
      pic: itemData["pic"],
      name: itemData["title"],
      sales: itemData["sales"],
      shop_name: itemData["shop_title"],
      delivery_fee: itemData["delivery_fee"],
      location: itemData["loc"],
      quantity: 0
    }
  }
  
  export function constructItems(itemData) {
    return itemData.map(item => constructItem(item))
  }

  function extractItemsFromPurchases(purchases) {
    return purchases.map(purchase => purchase.items).flat()
  }

  function countQuantity(items, item) {
    let quantity = 0
    items.forEach(p => {
       if (p.external_id == item.external_id) {
         quantity += p.quantity
       }
    })
    return quantity
  }

  export const constructProfileItemArr = (purchases) => {

  
    const items = extractItemsFromPurchases(purchases)

    return _.uniq(items.map(item => {
      return {...item, quantity: countQuantity(items, item)}
    }), false, _.iteratee((i) => i.external_id ) )
    
  }

  
  
  
