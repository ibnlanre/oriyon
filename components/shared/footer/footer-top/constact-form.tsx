import { Button, Stack, TextInput, Textarea } from "@mantine/core";

export function ContactForm() {
  return (
    <div className='bg-[#101113] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-2xl mx-auto border-2 border-[#3a3b3e]'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center sm:text-left'>
        Have Any Question?
      </h2>

      <Stack gap='md'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
          <TextInput
            placeholder='Name'
            size='md'
            className='rounded-lg bg-[#101113] border border-[#3a3b3e] text-white px-4 '
          />
          <TextInput
            placeholder='E-mail'
            size='md'
            className='rounded-lg bg-[#101113] border border-[#3a3b3e] text-white px-4 '
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <TextInput
            placeholder='Phone'
            size='md'
            className='rounded-lg bg-[#101113] border border-[#3a3b3e] text-white px-4 '
          />
          <TextInput
            placeholder='Service'
            size='md'
            className='rounded-lg bg-[#101113] border border-[#3a3b3e] text-white px-4 '
          />
        </div>

        <Textarea
          placeholder='Message'
          size='md'
          rows={5}
          className='rounded-lg bg-[#101113] border border-[#3a3b3e] text-white p-4 '
        />

        <Button
          type='submit'
          size='lg'
          className='rounded-full bg-[#0d9488] hover:bg-[#0f766e] transition-all duration-200'
          fullWidth
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}
