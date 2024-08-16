import { Component } from '@angular/core';

interface Order {
  dish: string;
  customers: string[];
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  orders: Order[] = [];
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
       this.orders.push({ dish: selectedDish, customers: [customerName] });
     }
     // Clear the input fields after adding the order
     customerNameInput.value = '';
     dishSelect.value = 'Burger'; // Set to default option
   }
 }
}
