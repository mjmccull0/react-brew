import Card from '../component/Card';
import Grid from '../component/Grid';


const BeerList = ({ beers=[], path }) => {
  return (
    <Grid>
      {beers.map(beer =>
        <Card
          key={beer.name}
          link={`${path}/${beer.id}`}
          title={beer.name}
          description={beer.tagline}
          media={beer.image_url}
        />
      )}
    </Grid>
  );
}

export default BeerList;
