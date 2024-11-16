import { SetMetadata } from '@nestjs/common';

import { METADATA_RESPONSE_MESSAGE } from '@/constants';

export const ResponseMessage = (message: string) =>
  SetMetadata(METADATA_RESPONSE_MESSAGE, message);
