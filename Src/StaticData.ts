import { images } from "./utils/Images";

export const mainarr:any = [
  {
    name: 'Top Selling',
    productList: [
      { productname: 'Men’s Harrington Jacket', image: images.dummyImage, id: 1, price: '₹1438' },
      { productname: 'Max Cirro Men’s Slides', image: images.dummyImage, id: 2, price: '₹555' },
    ],
  },
  {
    name: 'New In',
    productList: [
      { productname: 'Test3', image: images.dummyImage, id: 3 },
      { productname: 'Test4', image: images.dummyImage, id: 4 },
    ],
  },
];

export const categories:any = [
  { name: 'Hoodies', image: images.Hoddie, id: 1 },
  { name: 'Shorts', image: images.Shorts, id: 2 },
  { name: 'Shoes', image: images.Shoes, id: 3 },
  { name: 'Bag', image: images.Bag, id: 4 },
  { name: 'Accessories', image: images.Accessories, id: 5 },
];

export const dropdownData:any = [
  { label: 'Men', value: 'men' },
  { label: 'Women', value: 'women' },
  { label: 'Kids', value: 'kids' },
];