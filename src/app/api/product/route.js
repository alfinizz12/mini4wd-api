import Product from "@/models/product"
import sequelize from "@/lib/sequelize"

await sequelize.authenticate()
await sequelize.sync()

export async function GET() {
  try {
    const products = await Product.findAll()
    return Response.json(
      { data: products, status: 200 })

  } catch (err) {
    return Response.json({ message: "An error occured", status: 500 })
  }
}

