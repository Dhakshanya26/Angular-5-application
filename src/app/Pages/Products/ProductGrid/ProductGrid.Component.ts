import { OnInit, ViewChild, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator, Sort, PageEvent } from '@angular/material';
import { Element } from '@angular/compiler';
import { element } from 'protractor';
import { productDialogComponent } from '../ProductDialog/productDialog.component';
import { ProductModel } from '../../../ViewModel/productmodel';
import { InformationModalComponent } from '../../Shared/dialogs/information-dialog.component';
import { ConfimationModalComponent } from '../../Shared/dialogs/confimation-dialog.component';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'pro-list',
  providers: [ProductService],
  templateUrl: './ProductGrid.Component.html',
  styleUrls: ['./ProductGrid.Component.scss']
})

export class ProductGridComponent implements OnInit {
  displayedColumns = ['productName', 'sku', 'price', 'rating', 'releaseDate', 'action'];
  isLoading: boolean = false;
  products: Element[];
  informationDialog: any;
  filteredProducts = new MatTableDataSource<Element>(null);
  title: string = `Product Collection`;
  toolTipPosition: string = 'above';
  showName: boolean = true;
  _searchBy: string;
  errorMessage: string;
  selectedRowIndex: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageIndex: number = 0;
  pageSize: number = 5;
  get searchBy(): string {
    return this._searchBy;
  }

  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.filteredProducts.sort = this.sort;
    this.filteredProducts.paginator = this.paginator;
  }
  set searchBy(value: string) {
    this._searchBy = value;
    if (!this.searchBy) {
      this.filteredProducts = new MatTableDataSource(this.products);
      this.filteredProducts.paginator = this.paginator;
    }
    else {
      this.performFilter(this.searchBy)
    }
  }

  onRatingClick(message: string): void {
    this.title = `You have selected ${message} rating,`;
  }

  performFilter(searchBy: string): void {
    searchBy = searchBy.toLocaleLowerCase();
    var products: any;
    this._ps.getProductsByName(searchBy).subscribe(pro => {

      products = pro.map((item: ProductModel) => {

        return <any>{
          "productId": item.ProductId, "productName": item.ProductName, "sku": item.Sku, "price": item.Price,
          "rating": item.Rating, "releaseDate": item.ReleaseDate
        };
      });
      this.filteredProducts = new MatTableDataSource(products);;
      this.filteredProducts.paginator = this.paginator;
    },
      error => this.errorMessage = <any>error);

  }


  constructor(private _ps: ProductService, public dialog: MatDialog) {
  }
  toggleName(): void {
    this.showName = !this.showName;
  };
  ngOnInit(): void {
    this._ps.getProducts().subscribe(pro => {
      var ementArray = [];
      pro.map((item: ProductModel) => {
        var element = {
          "productId": item.ProductId, "productName": item.ProductName, "sku": item.Sku,
          "price": item.Price, "rating": item.Rating, "releaseDate": item.ReleaseDate
        };
        ementArray.push(element);
      });
      this.products = ementArray;
      this.filteredProducts.sort = this.sort;
      this.filteredProducts.paginator = this.paginator;
      this.getPagedProductData();
    },
      error => this.errorMessage = <any>error);

  }


  reloadGrid = () => {
    this._ps.getProducts().subscribe(pro => {
      var ementArray = [];
      pro.map((item: ProductModel) => {
        var element = {
          "productId": item.ProductId, "productName": item.ProductName, "sku": item.Sku,
          "price": item.Price, "rating": item.Rating, "releaseDate": item.ReleaseDate
        };
        ementArray.push(element);
      });
      this.products = ementArray;
      this.filteredProducts.sort = this.sort;
      this.filteredProducts.paginator = this.paginator;
      this.getPagedProductData();
      this.isLoading = false;
    },
      error => this.errorMessage = <any>error);
  }
  deleteSelected = (row) => {
    this.selectedRowIndex = row.productId;
    this.openConfirmationDialog(row);
  }
  selectedRow = (row) => {
    this.selectedRowIndex = row.productId;
    this.openDialog(row);
  }

  addNewProduct = () => {
    this.openDialog({});
  }
  openDialog = (row) => {
    let productDialogref = this.dialog.open(productDialogComponent, {
      height: 'auto',
      width: '600px',
      data: row
    })
    productDialogref.afterClosed().subscribe(result => {
      if (result) {
        this.reloadGrid();
      }
    });
  }
  openInformationDialog = (row) => {
    this.informationDialog = this.dialog.open(InformationModalComponent, {
      height: 'auto',
      width: '400px',
      data: row
    });
  }
  closeInformationDialog = () => {
    this.dialog.closeAll();
  }
  openConfirmationDialog = (row) => {
    var rowId = row.productId;
    let productDialogref = this.dialog.open(ConfimationModalComponent, {
      height: 'auto',
      width: '400px',
      data: { modalTitle: "Confimation Box", modalBody: "Are you sure you want to delete the product?" }
    })
    productDialogref.afterClosed().subscribe(result => {

      if (result) {
        this.openInformationDialog({ modalBody: "Please wait .." })
        this._ps.deleteProduct(rowId).subscribe(x => {
          this.closeInformationDialog();
          if (x) {
            this.reloadGrid();
          }
          else {
          }
        });
      }
    });
  }
  getPagedProductData(event?: PageEvent) {

    if (event != null) {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
    }
    var itemToBeSkiped = this.pageIndex * this.pageSize;
    var totalRecords = this.products.length;
    var pagedData = this.products.slice(itemToBeSkiped)
      .slice(0, this.pageSize);

    this.filteredProducts = new MatTableDataSource(pagedData);
  }

  sortData(sort: Sort) {
    const data = this.filteredProducts;
    if (!sort.active || sort.direction == '') {
      this.filteredProducts = data;
      return;
    }
    var sortedData = data.data.sort((a: any, b: any) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'productName': return this.compare(a.productName, b.productName, isAsc);
        case 'price': return this.compare(+a.price, +b.price, isAsc);
        case 'sku': return this.compare(+a.sku, +b.sku, isAsc);
        case 'rating': return this.compare(+a.rating, +b.rating, isAsc);
        case 'releaseDate': return this.compare(+a.releaseDate, +b.releaseDate, isAsc);
        default: return 0;
      }
    });

    this.filteredProducts = new MatTableDataSource(sortedData);
  }
  compare = (a, b, isAsc) => {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
