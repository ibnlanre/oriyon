import { Stack } from '@mantine/core';
import { EmpowermentDescription } from '../empowerment-description';
import { ContactButton } from '../contact-button';

export function EmpowermentContent() {
  return (
    <Stack gap="24px" className="mt-0 lg:mt-0">
      <EmpowermentDescription />
      <ContactButton />
    </Stack>
  );
}