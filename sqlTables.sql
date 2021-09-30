USE gbooks;

CREATE TABLE publishers (
    id INT(10) NOT NULL AUTO_INCREMENT,
    publisher_name TEXT NOT NULL,
    PRIMARY KEY
    (id)
);

    CREATE TABLE authors (
    id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    author_name TEXT NOT NULL
);

    CREATE TABLE books (
    id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    book_title TEXT NOT NULL,
    book_desc TEXT NOT NULL,
    page_count INT
    (10) NOT NULL,
    publisher_id INT
    (10) NOT NULL,
    FOREIGN KEY
    (publisher_id) REFERENCES publishers
    (id)
);

    CREATE TABLE booksauthors (
    id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    book_id INT
    (10) NOT NULL,
    author_id INT
    (10) NOT NULL,
    FOREIGN KEY
    (book_id) REFERENCES books
    (id),
    FOREIGN KEY
    (author_id) REFERENCES authors
    (id)
);