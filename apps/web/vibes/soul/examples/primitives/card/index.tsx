import { Card } from '@/vibes/soul/primitives/card';

export default function Preview() {
  return (
    <div>
      <div className="space-y-8 bg-background p-8 @container">
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <Card
            href="#"
            image={{ src: 'https://rstr.in/monogram/vibes/RopDQNbjTc_', alt: 'Low Maintenance' }}
            title="Low Maintenance"
          />
          <Card href="#" title="Low Maintenance" />
        </div>
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <Card
            href="#"
            image={{ src: 'https://rstr.in/monogram/vibes/RopDQNbjTc_', alt: 'Low Maintenance' }}
            textColorScheme="dark"
            textPosition="inside"
            textSize="small"
            title="Low Maintenance"
          />
          <Card
            href="#"
            image={{ src: 'https://rstr.in/monogram/vibes/RopDQNbjTc_', alt: 'Low Maintenance' }}
            textColorScheme="dark"
            textPosition="inside"
            textSize="large"
            title="Low Maintenance"
          />
        </div>
      </div>
      <div className="bg-foreground p-8 @container">
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <Card
            aspectRatio="1:1"
            href="#"
            iconColorScheme="dark"
            image={{ src: 'https://rstr.in/monogram/vibes/RopDQNbjTc_', alt: 'Low Maintenance' }}
            textColorScheme="dark"
            title="Low Maintenance"
          />
          <Card
            aspectRatio="1:1"
            href="#"
            iconColorScheme="dark"
            textColorScheme="dark"
            title="Partial shade"
          />
        </div>
      </div>
    </div>
  );
}
