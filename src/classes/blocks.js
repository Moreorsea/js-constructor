import {col, css, row} from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = 'h1', styles = '' } = this.options;

    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { imageStyles: is, styles, alt = '' } = this.options;
    return row(`<img alt="${alt}" style="${css(is)}" src="${this.value}" />`, css(styles));
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    let childs = this.value.map(col).join('');
    return row(childs, css(this.options.styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  
  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles));
  }
}