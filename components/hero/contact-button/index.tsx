import { Button, Group } from '@mantine/core';
import { ContactArrowIcon } from '../../icons/contact-arrow-icon';

export function ContactButton() {
  return (
    <Button
      size="lg"
      className="bg-black hover:bg-gray-800 text-white font-medium uppercase tracking-widest transition-colors duration-200 px-6 py-3 h-auto"
      style={{
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '2px',
        backgroundColor: '#1a1a1a',
        borderRadius: '0px'
      }}
      leftSection={
        <ContactArrowIcon 
          width={27} 
          height={20} 
          color="white" 
          className="mr-2"
        />
      }
    >
      contact us
    </Button>
  );
}