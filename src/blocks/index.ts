import Conditions from './Conditions.astro';
import Coverage from './Coverage.astro';
import Doctors from './Doctors.astro';
import Feature from './Feature.astro';
import Hero from './Hero.astro';
import Reviews from './Reviews.astro';
import Veterans from './Veterans.astro';
import Visit from './Visit.astro';

// Storyblok component name -> Astro component. Each key matches a block type in the editor.
export const blocks = {
  hero: Hero,
  doctors: Doctors,
  conditions: Conditions,
  feature: Feature,
  veterans: Veterans,
  reviews: Reviews,
  coverage: Coverage,
  visit: Visit,
};
