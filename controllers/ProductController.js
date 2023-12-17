import { PrismaClient } from "@prisma/client";
import generateResponse from "../helpers/generateResponse.js";
import generateResponseError from "../helpers/generateErrorResponse.js";

const prisma = new PrismaClient();
// Model Name
const { product } = prisma;

// req => Request, res => Response
export const getProducts = async (req, res) => {
  try {
    const response = await product.findMany();
    res.json(
      generateResponse(200, {
        message: "Berhasil mendapatkan data!",
        data: response,
      })
    );
  } catch (error) {
    console.error(error);
    res.status(500).json(generateResponseError(error));
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await product.findUnique({
      where: {
        id: Number(req?.params?.id),
      },
    });
    res.json(
      generateResponse(200, {
        message: "Berhasil mendapatkan data!",
        data: response,
      })
    );
  } catch (error) {
    console.error(error);
    res.status(500).json(generateResponseError(error));
  }
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const request = await product.create({
      data: {
        name,
        price,
      },
    });
    res.json(
      generateResponse(201, {
        message: "Berhasil menambah data!",
        data: request,
      })
    );
  } catch (error) {
    console.error(error);
    res.status(500).json(generateResponseError(error));
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const request = await product.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        price,
      },
    });
    res.json(
      generateResponse(200, {
        message: "Berhasil mengubah data!",
        data: request,
      })
    );
  } catch (error) {
    console.error(error);
    res.status(500).json(generateResponseError(error));
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const request = await product.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(
      generateResponse(200, {
        message: "Berhasil menghapus data!",
        data: request,
      })
    );
  } catch (error) {
    console.error(error);
    res.status(500).json(generateResponseError(error));
  }
};
