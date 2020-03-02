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
      location: itemData["loc"]
    }
  }
  
  export function constructItems(itemData) {
    return itemData.map(item => constructItem(item))
  }