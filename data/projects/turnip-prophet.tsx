// data/projects/turnip-prophet.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const tags = ['vanilla js', 'open-source', 'collaborative'];
const year = 2020;

export const turnipProphet: Project = {
  id: 'turnip-prophet',
  title: 'Turnip Prophet',
  slug: 'turnip-prophet',
  categories: ['other'],
  tags: tags,
  year: year,
  shortDescription: 'Helping gamers make money',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/turnip-prophet-thumbnail.webp"
        fullSrc="/images/turnip-prophet-full.webp"
        alt="Turnip Prophet"
      />
      <h3>Helping gamers make money</h3>
      <p>Over the course of a week, some fellow developers and I worked on a free-to-use tool that helped players make the most of their money in <i>Animal Crossing: New Horizons</i> by predicting the value of the in-game stock market.</p>
      <p>While I was only the front-end developer, contributing over 1000 lines of CSS, the project <b>made it to the front page of Forbes and peaked at over 400k users.</b></p>
    <StylizedButton 
        label='Read Forbes Article'
        href='https://www.forbes.com/sites/davidthier/2020/04/19/animal-crossing-i-used-turnip-calculator-to-predict-prices-heres-what-happened/'
        external = {true}
        variant= 'dark'
      />
      <div className="mb-3"></div>
     <StylizedButton 
        label='View Live'
        href='https://turnipprophet.io/'
        external = {true}
        variant= 'dark'
      />
      
    </div>
  ),
};