import { shopifyRequest } from "../../utils/shopifyRequest"
import { createDraftOrder, markDraftOrderComplete } from "../../graphql/mutation"

const createOrderInput = (input) => ({
  input: input,
})

export const createOrder = async ({ input }) => {
  try {
    const draftOrder = await shopifyRequest(createDraftOrder, { input })

    const completeOrder = await shopifyRequest(markDraftOrderComplete, {
      id: draftOrder.data.data.draftOrderCreate.draftOrder.id,
    })
    return completeOrder.data
  } catch (error) {
    console.log(error)
  }
}
