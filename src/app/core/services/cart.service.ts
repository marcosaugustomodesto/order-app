import { computed, Injectable, signal } from "@angular/core";
import { Product } from "../../features/products/models/product.model";

@Injectable({
    providedIn:'root'
})
export class CartService {
    private _items = signal<Product[]>([])

    //leitura pública
    items = this._items.asReadonly();

    //total de itens
    totalItems = computed(() => this._items().length);

    //valor total
    totalPrice = computed(() => 
        this._items().reduce((acc, item)=> acc + item.price, 0)
    );

    add(product: Product){
        this._items.update(items => [...items, product]);
    }

    remove(productId: number){
        this._items.update(items =>
           items.filter(item => item.id !== productId)
        );
    }

    clear(){
        this._items.set([]);
    }
}