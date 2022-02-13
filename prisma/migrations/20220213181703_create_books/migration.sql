-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "publication_date" DATETIME NOT NULL,
    "publish_company" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "author" TEXT NOT NULL,
    "cover_image" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "books_isbn_key" ON "books"("isbn");
