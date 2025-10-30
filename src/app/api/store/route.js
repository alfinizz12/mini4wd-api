import Store from "@/models/store"

export async function GET() {
  try {
    const stores = await Store.findAll()
    return Response.json({ data: stores, status: 200 })

  } catch(err) {
    return Response.json({ message: "An error occured", status: 500 })
  }
}
