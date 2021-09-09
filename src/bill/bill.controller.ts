import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('bill')
@Controller('bill')
export class BillController {}
