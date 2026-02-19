import { computed, effect, Injectable, signal } from "@angular/core";
import { Product } from "../products/models/product.model";
import { CartItem } from "./models/cart-item.model";

@Injectable({
    providedIn:'root'
})
export class CartStore {
    private storagekey = 'cart'
    private _items = signal<CartItem[]>([])
    private _isOpen = signal(false);

    constructor(){
        this._items.set(this.loadFromStorage());

        effect(() => {
            this.saveToStorage(this._items())
        });
    }

    //leitura pública
    items = this._items.asReadonly();
    readonly isOpen = this._isOpen.asReadonly();

    //total de itens
    totalItems = computed(() => this._items().reduce((acc,item) => acc+item.quantity, 0));

    //valor total
    readonly totalPrice = computed(() => 
        this._items().reduce((acc, item)=> acc + item.product.price * item.quantity, 0)
    );

    readonly isEmpty = computed(() => this._items().length === 0);

    readonly totalProducts = computed(() => this._items().length);

    add(product: Product){
        this._items.update(items => {
            const existingItem = items.find(
                item => item.product.id === product.id
            );

            if(existingItem){
                return items.map(item =>
                    item.product.id === product.id
                    ? { ...item, quantity: item.quantity + 1}
                    :item
                )
            }

            return [...items, {product, quantity:1}]
        });
    }

    remove(productId: number){
        this._items.update(items =>
           items.filter(item => item.product.id !== productId)
        );
    }

    decrease(productId: number){
        this._items.update(items =>
            items
            .map(item =>
                item.product.id === productId
                ? {...item, quantity: item.quantity - 1}
                : item
            )
            .filter(item => item.quantity > 0)
        );
    }

    increase(productId: number){
        this._items.update(items =>
            items.map(item =>
              item.product.id === productId
              ? {...item, quantity: item.quantity + 1} 
              : item   
            )
        );
    }

    clear(){
        this._items.set([]);
    }

    open(){
        this._isOpen.set(true);
    }
    close(){
        this._isOpen.set(false);
    }
    toggle(){
        this._isOpen.update(value => !value);
    }

    private saveToStorage(items: CartItem[]){
        localStorage.setItem(this.storagekey, JSON.stringify(items));
    }

    private loadFromStorage(): CartItem[] {
        const stored = localStorage.getItem(this.storagekey);
        if(!stored) return [];
        try {
            return JSON.parse(stored);
        } catch {
            localStorage.removeItem(this.storagekey);
            return [];
        }
    }
}