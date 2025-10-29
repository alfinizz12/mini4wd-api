import sequelize from "@/lib/sequelize"
import Product from "@/models/product"

await sequelize.authenticate()
await sequelize.sync()

export async function GET(_, ctx) {
  const { id } = await ctx.params

  const product = await Product.findOne({
    where: {
        id: id
    }
  })

  return Response.json({ data: product, status: 200 })
}