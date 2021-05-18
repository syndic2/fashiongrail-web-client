export interface Order{
  username:string
  user_photo:string
  order_invoice:string
  total:bigint
  status:number
  products: object[]
}
