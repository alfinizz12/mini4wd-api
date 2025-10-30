import Product from "@/models/product"
import { Op } from "sequelize"

export async function POST(request) {
  try {
    const body = await request.json()
    let { category } = body

    const product = await Product.findAll({
      where: {
        category: {
          [Op.contains]: [category]
        }
      }
    })

    return Response.json({ data: product, status: 200 })
  } catch (err) {
    return Response.json({ error: "Error Occured", status: 500 })
  }
}