// APP ENTRY
(function main() {
  const myLibrary = [];
  const ui = getUiComponents();

  const dummy = {
    author: '1',
    title: '2',
    pageCount: 3,
    isRead: true,
  };

  // FUNCTIONS

  /**
   * Get the library UI DOM elements
   * @returns A object containing the DOM interface elements
   */
  function getUiComponents() {
    const components = {
      table: document.querySelector('[data-library]'),
      add: document.querySelector('[data-add]'),
    };

    return components;
  }

  /**
   * Add a book to a library
   * @param {Array} library The library array to add the book to
   * @param {Object} book The book object
   */
  function addBookToLibrary(library, book) {
    const newBook = {
      ...book,
    }

    library.push(newBook);
  }

  function populateTable(library) {
    // Add a 'No books found' message if the library is empty
    if (library.length < 1) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');

      td.setAttribute('colspan', 4);
      td.classList.add('none');
      td.textContent = 'No books found...';

      tr.appendChild(td);
      ui.table.querySelector('[data-tbody]').appendChild(tr);

      return;
    }

    // Loop over the library and add each book to the interface
    library.forEach(book => {
      // Create a new tr element for each book
      const tr = document.createElement('tr');

      // Create a new td element for each property
      for (let property in book) {
        const td = document.createElement('td');
        td.textContent = book[property];

        tr.appendChild(td);
      }

      // Add the row to the table
      ui.table.querySelector('[data-tbody]').appendChild(tr);
    });
  }
})();


// CONSTRUCTORS

/**
 * Create a book object
 * @param {Object} config The configuration object for the constructor
 * @param {String} config.title The title of the book
 * @param {String} config.author The author of the book
 * @param {Number} config.pageCount The number of pages the book has
 * @param {Boolean} config.isRead Whether or not the book has been read
 */
function Book(config = { title: '', author: '', pageCount: 0, isRead: false }) {
  this.title = config.title;
  this.author = config.author;
  this.pageCount = config.pageCount;
  this.isRead = config.isRead;
  this.info = function() {
    return `Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pageCount}\nHas been read: ${this.isRead ? 'Yes' : 'No'}`;
  }
}