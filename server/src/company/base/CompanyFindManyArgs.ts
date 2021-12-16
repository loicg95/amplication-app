import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanyWhereInput } from "./CompanyWhereInput";
import { Type } from "class-transformer";
import { CompanyOrderByInput } from "./CompanyOrderByInput";

@ArgsType()
class CompanyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CompanyWhereInput,
  })
  @Field(() => CompanyWhereInput, { nullable: true })
  @Type(() => CompanyWhereInput)
  where?: CompanyWhereInput;

  @ApiProperty({
    required: false,
    type: CompanyOrderByInput,
  })
  @Field(() => CompanyOrderByInput, { nullable: true })
  @Type(() => CompanyOrderByInput)
  orderBy?: CompanyOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CompanyFindManyArgs };
