import { Component } from '@angular/core';

interface Order {
  dish: string;
  customers: string[];
  quantity: number
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  orders: Order[] = [];
  count: number = 0;
  editIndex: number | null = null;
 addOrder(customerNameInput: HTMLInputElement, dishSelect: HTMLSelectElement): void {
   const customerName = customerNameInput.value.trim();
   const selectedDish = dishSelect.value;
   if (customerName) {
     // Find if the dish already exists in the orders array
     const existingOrder = this.orders.find(order => order.dish === selectedDish);
     if (existingOrder) {
       // If it exists, add the customer's name to the customers array
       existingOrder.customers.push(customerName);
     } else {
       // If it doesn't exist, create a new order
       this.orders.push({ dish: selectedDish, customers: [customerName], quantity: 0 });
     }
     // Clear the input fields after adding the order
     customerNameInput.value = '';
     dishSelect.value = 'Burger'; // Set to default option
   }
 }

 increaseQuantity(index: number) {
  this.orders[index].quantity++;


 }
 decreaseQuantity(index: number) {
  if(this.orders[index].quantity > 1){
    this.orders[index].quantity--;
  }
 }

 editItem(index: number) {
  this.editIndex = index;

 }
 deleteItem(index: number) {
  this.orders.splice(index, 1);

 }
}
