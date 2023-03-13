import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuChangeEvent } from '../../api/menuchangeevent';
import { MenuItem } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private menuSource = new Subject<MenuChangeEvent>();
    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();

    onMenuStateChange(event: MenuChangeEvent) {
        this.menuSource.next(event);
    }

    reset() {
        this.resetSource.next(true);
    }

}
