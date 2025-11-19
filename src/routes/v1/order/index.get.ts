import { IOrderSearchResponse, orderSearchSchema } from '~/factory/order';
import { OrderRepository } from '~/repository/order';
import { readQuery } from '~/utils/validator';

export default defineEventHandler(
  async (event): Promise<IOrderSearchResponse> => {
    const query = await readQuery(event, orderSearchSchema);

    const order_repo = new OrderRepository(event.context.db);

    return order_repo.search(query, event.context.user);
  },
);
