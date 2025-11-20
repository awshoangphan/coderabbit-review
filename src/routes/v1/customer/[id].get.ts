import { customerrepo } from '~/repository/customer';

export default defineEventHandler(async (event) => {
  const id = getIdParam(event);

  const customerRepo = new customerrepo(event.context.db);

  return customerRepo.searchId(id);
});
