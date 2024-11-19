import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class RouteStrategy implements RouteReuseStrategy {

    private storedRouteHandles = new Map<string, DetachedRouteHandle | null>();

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.log(`logging the route: ${route}`);
        return true;
    }
    
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
        this.storedRouteHandles.set(route.routeConfig?.path || '', handle);
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return this.storedRouteHandles.has(route.routeConfig?.path || '');
    }
     
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return this.storedRouteHandles.get(route.routeConfig?.path || '') || null;
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }
    
}