import { About } from "components/services/about";
import { SharedHero } from "components/shared/hero";
import { Fragment } from "react/jsx-runtime";

export default function Services() {
  return (
    <Fragment>
      <SharedHero
        backgroundImage='/images/goats-background.png'
        title='What We Do'
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What We Do" },
          { label: "Contract Breeding" },
        ]}
        height='h-[400px]'
      />

      <main className='min-h-screen bg-white'>
        <About />
      </main>
    </Fragment>
  );
}
