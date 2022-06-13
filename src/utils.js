export function row(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
  if(typeof styles === 'string') return styles;

  const toString = key => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join('; ')
}

export function block() {
  return `
    <form>
      <h5 class="form-title">Text</h5>
      <div class="form-group">
        <select class="form-select form-select-sm" name="select">
          <option selected>Text</option>
          <option>Title</option>
          <option>Image</option>
          <option>Columns</option>
        </select>
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value" />
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles" />
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />`
}