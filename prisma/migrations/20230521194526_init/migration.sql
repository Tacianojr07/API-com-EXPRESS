-- CreateTable
CREATE TABLE "Rinoceronte" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "chifre" BOOLEAN NOT NULL DEFAULT true,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Rinoceronte_pkey" PRIMARY KEY ("id")
);
