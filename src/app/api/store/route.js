import Store from "@/models/store"
import sequelize from "@/lib/sequelize"

await sequelize.authenticate()
await sequelize.sync()

export async function GET() {
  try {
    const stores = await Store.findAll()
    return Response.json({ data: stores, status: 200 })

  } catch(err) {
    return Response.json({ message: "An error occured", status: 500 })
  }
}
