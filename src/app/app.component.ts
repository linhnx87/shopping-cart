import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, DoCheck {
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone XS',
      price: 1000000,
      description: 'Màu Xanh',
      quantity: 10,
      image:
        'https://galaxydidong.vn/wp-content/uploads/2017/11/iphone-x-64gb-quoc-te-95-99.jpg'
    },
    {
      id: 2,
      name: 'Iphone 4',
      price: 500000,
      description: 'Màu tím đỏ',
      quantity: 5,
      image:
        'https://galaxydidong.vn/wp-content/uploads/2017/11/iphone-x-64gb-quoc-te-95-99.jpg'
    }
  ];

  tongSoLuong: number = 0;
  totalMoney: number = 0;

  ngOnInit() {
    console.log('OnInit cua AppComponent');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit cua AppComponent');
  }

  ngDoCheck() {
    console.log('DoCheck cua AppComponent');
    let toTalItem = 0;
    let money = 0;
    for (const product of this.products) {
      toTalItem += Number(product.quantity);
      money += Number(product.price) * Number(product.quantity);
    }
    this.tongSoLuong = toTalItem;
    this.totalMoney = money;
  }

  removeProduct(productId: number) {
    const index = this.products.findIndex(product => product.id === productId);
    const nameProduct = this.products[index].name;

    if (index !== -1) {
      this.products.splice(index, 1);
      alert('Da xoa san pham ' + nameProduct);
    }
  }

  getCountProduct() {
    let toTalItem: number = 0;

    // Cách 1
    // for (let i = 0; i < this.products.length; i++) {
    //   toTalItem += Number(this.products[i].quantity);
    // }

    // Cách 2
    for (const product of this.products) {
      toTalItem += Number(product.quantity);
    }

    return toTalItem;
  }

  xuLyKhiBatDuocSuKienThayDoiSoLuong(obj: {
    maSanPham: number;
    soLuong: number;
  }) {
    const product = this.products.find(product => product.id === obj.maSanPham);
    product.quantity = obj.soLuong;
  }
}

