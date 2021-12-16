import { CompanyWhereInput } from "./CompanyWhereInput";
import { CompanyOrderByInput } from "./CompanyOrderByInput";

export type CompanyFindManyArgs = {
  where?: CompanyWhereInput;
  orderBy?: CompanyOrderByInput;
  skip?: number;
  take?: number;
};
