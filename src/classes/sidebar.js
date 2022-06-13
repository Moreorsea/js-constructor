import { block } from '../utils';
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './blocks';

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);

    this.update = updateCallback;

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
    this.$el.addEventListener('change', this.toggleTitleOfBlock.bind(this));
  }

  add(e) {
    e.preventDefault();

    const value = e.target.value.value;
    const styles = e.target.styles.value;
    const select = e.target.select.value;

    let newBlock;

    switch(select) {
      case 'Text':
        newBlock = new TextBlock(value, {styles});
        break;
      case 'Columns':
        newBlock = new ColumnsBlock(value, {styles});
        break;
      case 'Title':
        newBlock = new TitleBlock(value, {styles});
        break;
      case 'Image':
        newBlock = new ImageBlock(value, {styles});
        break;
      default:
        newBlock = new TextBlock(value, {styles});
        break;
    }


    this.update(newBlock);
    e.target.value.value = '';
    e.target.styles.value = '';
  }

  get template() {
    return block();
  }

  toggleTitleOfBlock(e) {
    if(!e.target.classList.contains('form-select')) return;

    this.$title = document.querySelector('.form-title');
    this.$title.innerHTML = e.target.value;
  }
}

