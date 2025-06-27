import './styles.scss';
import { StructureCarousel } from '../../slides/sructure';

export const StructureSection = () => {
  return (
    <section id="Structure">
      <div>
        <h2>Nossa estrutura</h2>
      </div>

      <StructureCarousel />
    </section>
  );
};
