import { singleton } from 'tsyringe';

import { Store, Action } from 'usestore-ts';

import {
  Category, Image, ProductDetail, ProductOption,
} from '../types';

import { append, remove, update } from '../utils';

@singleton()
@Store()
export default class ProductFormStore {
  productId = '';

  category: Category | null = null;

  images: Image[] = [];

  name = '';

  price = '';

  options: ProductOption[] = [];

  description = '';

  hidden = false;

  error = false;

  done = false;

  get valid() {
    const price = parseInt(this.price, 10);

    return !!this.category?.id
    && this.images.length && this.images.every((i) => i.url)
    && !!this.name.trim() && Number.isInteger(price)
    && this.options.every((option) => (
      option.name && option.items.length
      && option.items.every((item) => item.name)
    ))
    && this.description.trim();
  }

  @Action()
  reset() {
    this.productId = '';
    this.category = null;
    this.images = [{ url: '' }];
    this.name = '';
    this.price = '';
    this.options = [];
    this.description = '';
    this.error = false;
    this.done = false;
  }

  @Action()
  setProduct(product: ProductDetail) {
    this.productId = product.id;
    this.category = product.category;
    this.images = product.images;
    this.name = product.name;
    this.price = product.price.toString();
    this.options = product.options;
    this.description = product.description;
    this.error = false;
    this.done = false;
  }

  @Action()
  changeCategory(category: Category) {
    this.category = category;
  }

  @Action()
  addImage() {
    this.images = append(this.images, { url: '' });
  }

  @Action()
  removeImage(index: number) {
    this.images = remove(this.images, index);
  }

  @Action()
  changeImageUrl(index:number, url:string) {
    this.images = update(this.images, index, () => ({
      ...this.images, url,
    }));
  }

  @Action()
  changeName(name: string) {
    this.name = name;
  }

  @Action()
  changePrice(price: string) {
    this.price = price;
  }

  @Action()
  addOption() {
    const option = {
      name: '',
      items: [{ name: '' }],
    };

    this.options = append(this.options, option);
  }
}
