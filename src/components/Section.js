export class Section {
  constructor ({/*items,*/ renderer}, containerSelector){
    //this._renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems(item) {
    //this._renderedItems.forEach(item => this._renderer(item));
    item.forEach(item => this._renderer(item));
  }  

  addItem(item) {
    this._container.prepend(item)
  }
}